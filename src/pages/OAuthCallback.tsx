import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ApiError, apiPublicRequest, saveTokens } from '../services/api';
import { ApiFailure } from './ApiFeedback';
import { Eyebrow, ExtensionFrame } from './MarketplaceLayout';

type OAuthResponse = { accessToken: string; refreshToken: string; expiresIn: number };

export default function OAuthCallback() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [error, setError] = useState<ApiError | null>(null);

  useEffect(() => {
    let active = true;
    const provider = sessionStorage.getItem('axyne.oauthProvider');
    const code = params.get('code');
    const state = params.get('state');
    const rejected = params.get('error');
    if (rejected || (provider !== 'github' && provider !== 'google') || !code || !state) {
      setError(new ApiError('로그인 인증을 완료하지 못했습니다. 다시 시도해 주세요.', 401));
      return () => { active = false; };
    }
    apiPublicRequest<OAuthResponse>(`/api/v1/auth/oauth/${provider}/callback?${new URLSearchParams({ code, state })}`)
      .then(result => {
        if (!active) return;
        saveTokens(result.accessToken, result.refreshToken);
        sessionStorage.removeItem('axyne.oauthProvider');
        navigate('/developer', { replace: true });
      })
      .catch(reason => { if (active) setError(reason instanceof ApiError ? reason : new ApiError('로그인 처리 중 오류가 발생했습니다.', 0)); });
    return () => { active = false; };
  }, [navigate, params]);

  return <ExtensionFrame className="centered-extension-page"><main className="login-card">
    <Eyebrow>DEVELOPER CENTER</Eyebrow><h1>로그인 확인 중</h1>
    {error ? <><ApiFailure error={error} onRetry={() => navigate('/developer/login', { replace: true })}/><button className="extension-button secondary" onClick={() => navigate('/developer/login')}>로그인으로 돌아가기</button></> : <p role="status">계정 인증을 확인하고 있습니다…</p>}
  </main></ExtensionFrame>;
}

