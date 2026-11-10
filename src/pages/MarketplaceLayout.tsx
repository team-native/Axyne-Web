import { Link, NavLink, useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';
import mark from '../assets/9d914.png';

export function MarketplaceHeader() {
  const { pathname } = useLocation();
  const loggedIn = pathname === '/developer' || pathname.startsWith('/developer/plugins/');
  return <header className="extension-header">
    <Link to="/" className="extension-logo" aria-label="Axyne 홈"><img src={mark} alt=""/><span>Axyne</span></Link>
    <nav aria-label="확장 기능 메뉴">
      <NavLink to="/marketplace" className={({isActive})=>isActive?'active':''}>마켓플레이스</NavLink>
      <NavLink to="/releases" className={({isActive})=>isActive?'active':''}>IDE 다운로드</NavLink>
      <NavLink to="/developer" className={({isActive})=>isActive?'active':''}>개발자 센터</NavLink>
      <Link className="extension-login" to={loggedIn?'/developer':'/developer/login'}>{loggedIn?'대시보드':'로그인'}</Link>
    </nav>
  </header>;
}

export function ExtensionFrame({children, className = ''}:{children:ReactNode;className?:string}) {
  return <div className={`extension-app ${className}`}><MarketplaceHeader/>{children}</div>;
}

export function Eyebrow({children}:{children:ReactNode}) { return <p className="extension-eyebrow">{children}</p>; }

