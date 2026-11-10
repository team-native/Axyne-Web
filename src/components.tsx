import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import mark from './assets/9d914.png';
import nativeLogo from './assets/native-logo.png';

const nav = [['특징', '/features'], ['메모리 예산', '/memory-budget'], ['마켓플레이스', '/marketplace'], ['문서', '/docs'], ['다운로드', '/download'], ['개발자 센터', '/developer']];
const docGroups = [
  { label: '시작하기', items: [['소개', '/docs'], ['Windows 설치', '/docs/windows'], ['macOS 설치', '/docs/macos']] },
  { label: '사용법', items: [['편집기와 탭', '/docs/editor'], ['검색과 이동', '/docs/search'], ['터미널·출력', '/docs/terminal']] },
  { label: '설정', items: [['settings.json', '/docs/settings'], ['theme.json', '/docs/theme'], ['단축키', '/docs/shortcuts']] },
  { label: '설계', items: [['메모리 예산', '/docs/memory-budget'], ['렌더링', '/docs/rendering']] },
];
export function Header() {
  return <header className="site-header"><Link to="/" className="logo" aria-label="Axyne 홈"><img src={mark} width="30" height="30" alt=""/><span>Axyne</span></Link><nav aria-label="주 메뉴" className="site-nav">{nav.map(([text, href]) => <NavLink key={href} to={href}>{text}</NavLink>)}</nav></header>;
}
export function Footer() {
  return <footer className="site-footer">
    <div className="footer-brand">
      <a className="footer-wordmark" href="https://github.com/team-native" aria-label="Native GitHub"><img src={nativeLogo} width="36" height="36" alt=""/><span>Native</span></a>
    </div>
    <nav className="footer-links" aria-label="푸터 메뉴">
      <Link to="/docs">문서</Link>
      <Link to="/download">다운로드</Link>
      <a href="https://github.com/team-native/Axyne-Web">GitHub <span aria-hidden="true">↗</span></a>
    </nav>
    <p className="footer-copyright">© 2026 Native</p>
  </footer>;
}
export function DocSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  return <><select className="doc-mobile-select" aria-label="문서 선택" value={location.pathname} onChange={event => navigate(event.target.value)}>{docGroups.map(group => <optgroup key={group.label} label={group.label}>{group.items.map(([label, href]) => <option key={href} value={href}>{label}</option>)}</optgroup>)}</select><nav className="doc-sidebar" aria-label="문서 메뉴"><h2 className="doc-sidebar-title">문서</h2>{docGroups.map(group => <section key={group.label}><p>{group.label}</p>{group.items.map(([label, href]) => <NavLink key={href} to={href} end>{label}</NavLink>)}</section>)}</nav></>;
}
type ButtonProps = { className?: string; label?: string; size?: 'S' | 'M' | 'L'; style?: 'Primary' | 'Secondary'; href?: string };
export function Button({ className, label = '무료 다운로드', style = 'Primary', href = '/download' }: ButtonProps) {
  const classes = `${className || 'button'} component-button ${style === 'Secondary' ? 'secondary' : 'primary'}`;
  return <Link className={classes} to={href === 'download' ? '/releases' : href}>{label}</Link>;
}

