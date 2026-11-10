import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ApiError, apiUrl } from '../services/api';
import { ApiFailure } from './ApiFeedback';
import { Eyebrow, ExtensionFrame } from './MarketplaceLayout';

export default function DeveloperLogin() {
  const [error, setError] = useState<ApiError | null>(null);
  function start(provider: 'github' | 'google') {
    try {
      sessionStorage.setItem('axyne.oauthProvider', provider);
      const callback = new URL('/developer/callback', window.location.origin).toString();
      window.location.assign(apiUrl(`/api/v1/auth/oauth/${provider}?${new URLSearchParams({ redirectUri: callback })}`));
    } catch (reason) {
      setError(reason instanceof ApiError ? reason : new ApiError('로그인 주소를 확인하지 못했습니다.', 0));
    }
  }
  return <ExtensionFrame className="centered-extension-page"><main className="login-card">
    <Eyebrow>DEVELOPER CENTER</Eyebrow><h1>개발자 로그인</h1><p className="login-intro">Axyne 플러그인을 등록하고 배포 현황을 관리하세요.</p>
    {error && <ApiFailure error={error} onRetry={() => setError(null)} />}
    <div className="oauth-buttons">
      <button className="extension-button primary" onClick={() => start('github')}>GitHub로 계속하기</button>
      <button className="extension-button secondary" onClick={() => start('google')}>Google로 계속하기</button>
    </div>
    <div className="login-footer"><span>마켓플레이스 둘러보기</span><Link to="/marketplace">플러그인 보기</Link></div>
    <p className="login-api-note">인증은 서버 OAuth를 사용하며, 세션 만료 시 토큰을 갱신하고 로그아웃하면 세션을 종료합니다.</p>
  </main></ExtensionFrame>;
}

