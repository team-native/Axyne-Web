export type ApiErrorBody = { message?: string; error?: string; code?: string; requestId?: string; errors?: unknown[]; [key: string]: unknown };

const ACCESS_TOKEN_KEY = 'axyne.accessToken';
const REFRESH_TOKEN_KEY = 'axyne.refreshToken';

export class ApiError extends Error {
  constructor(message: string, readonly status: number, readonly retryAfterSeconds?: number, readonly body?: ApiErrorBody) {
    super(message);
    this.name = 'ApiError';
  }
}

export function getAccessToken() { return sessionStorage.getItem(ACCESS_TOKEN_KEY); }
export function getRefreshToken() { return sessionStorage.getItem(REFRESH_TOKEN_KEY); }
export function saveTokens(accessToken: string, refreshToken: string) {
  sessionStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  sessionStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
}
export function clearTokens() {
  sessionStorage.removeItem(ACCESS_TOKEN_KEY);
  sessionStorage.removeItem(REFRESH_TOKEN_KEY);
}

export function apiUrl(path: string) {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  if (!baseUrl) throw new ApiError('서버 주소가 설정되지 않았습니다. VITE_API_BASE_URL을 설정해 주세요.', 0);
  return new URL(path.replace(/^\//, ''), `${baseUrl.replace(/\/+$/, '')}/`).toString();
}

export function retryAfterSeconds(value: string | null, now = Date.now()): number | undefined {
  if (!value) return undefined;
  const asSeconds = Number(value);
  if (Number.isFinite(asSeconds) && asSeconds >= 0) return Math.ceil(asSeconds);
  const date = Date.parse(value);
  if (!Number.isFinite(date)) return undefined;
  return Math.max(0, Math.ceil((date - now) / 1000));
}

function errorFrom(response: Response, body?: ApiErrorBody) {
  const message = typeof body?.message === 'string' ? body.message
    : typeof body?.error === 'string' ? body.error
      : `요청을 처리하지 못했습니다. (${response.status})`;
  const requestId = response.headers.get('X-Request-ID') || response.headers.get('X-Request-Id');
  return new ApiError(message, response.status, retryAfterSeconds(response.headers.get('Retry-After')),
    requestId && !body?.requestId ? { ...body, requestId } : body);
}

async function readBody(response: Response) {
  const text = await response.text();
  if (!text) return undefined;
  try { return JSON.parse(text) as ApiErrorBody; } catch { return undefined; }
}

let refreshPromise: Promise<boolean> | undefined;
async function refreshSession() {
  const refreshToken = getRefreshToken();
  if (!refreshToken) return false;
  if (refreshPromise) return refreshPromise;
  refreshPromise = (async () => {
    try {
      const response = await fetch(apiUrl('/api/v1/auth/refresh'), {
        method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ refreshToken }), credentials: 'include',
      });
      const body = await readBody(response);
      if (response.status === 401) {
        clearTokens();
        return false;
      }
      if (!response.ok) throw errorFrom(response, body);
      if (typeof body?.accessToken !== 'string' || typeof body?.refreshToken !== 'string') throw new ApiError('세션 갱신 응답을 확인할 수 없습니다.', 502);
      saveTokens(body.accessToken, body.refreshToken);
      return true;
    } catch (reason) {
      if (reason instanceof ApiError) throw reason;
      throw new ApiError('세션을 갱신하는 동안 서버에 연결하지 못했습니다.', 0);
    } finally {
      refreshPromise = undefined;
    }
  })();
  return refreshPromise;
}

async function perform<T>(path: string, init: RequestInit, allowRefresh: boolean, authenticated: boolean): Promise<T> {
  const headers = new Headers(init.headers);
  headers.set('Accept', 'application/json');
  if (init.body && !(init.body instanceof FormData) && !headers.has('Content-Type')) headers.set('Content-Type', 'application/json');
  const token = authenticated ? getAccessToken() : null;
  if (token) headers.set('Authorization', `Bearer ${token}`);
  const response = await fetch(apiUrl(path), { ...init, headers, credentials: 'include' });
  if (response.status === 401 && authenticated && allowRefresh && !path.includes('/auth/refresh') && !path.includes('/auth/oauth/')) {
    if (await refreshSession()) return perform<T>(path, init, false, true);
    clearTokens();
  }
  const body = await readBody(response);
  if (!response.ok) throw errorFrom(response, body);
  return (body ?? {}) as T;
}

/** No automatic retry on 429. The caller exposes a manual retry after Retry-After. */
export function apiRequest<T>(path: string, init: RequestInit = {}) {
  return perform<T>(path, init, true, true);
}

export function apiPublicRequest<T>(path: string, init: RequestInit = {}) {
  return perform<T>(path, init, false, false);
}

export function jsonRequest<T>(path: string, method: string, body?: unknown) {
  return apiRequest<T>(path, { method, ...(body === undefined ? {} : { body: JSON.stringify(body) }) });
}

