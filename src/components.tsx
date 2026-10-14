import { type MouseEvent } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import mark from './assets/9d914.png';

const nav = [['특징', '/features'], ['메모리 예산', '/memory-budget'], ['문서', '/docs'], ['다운로드', '/download']];
const docGroups = [
  { label: '시작하기', items: [['소개', '/docs'], ['Windows 설치', '/docs/windows'], ['macOS 설치', '/docs/macos']] },
  { label: '사용법', items: [['편집기와 탭', '/docs/editor'], ['검색과 이동', '/docs/search'], ['터미널·출력', '/docs/terminal']] },
  { label: '설정', items: [['settings.json', '/docs/settings'], ['theme.json', '/docs/theme'], ['단축키', '/docs/shortcuts']] },
  { label: '설계', items: [['메모리 예산', '/docs/memory-budget'], ['렌더링', '/docs/rendering']] },
];
export function Header() {
  return <header className="site-header"><Link to="/" className="logo" aria-label="Axyne 홈"><img src={mark} width="30" height="30" alt=""/><span>Axyne</span></Link><nav aria-label="주 메뉴" className="site-nav">{nav.map(([text, href]) => <NavLink key={href} to={href}>{text}</NavLink>)}</nav></header>;
}
export function Footer() { return <footer className="site-footer"><span>© 2026 Native</span><span>C · Win32 API · Scintilla</span></footer>; }
export function DocSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  return <><select className="doc-mobile-select" aria-label="문서 선택" value={location.pathname} onChange={event => navigate(event.target.value)}>{docGroups.map(group => <optgroup key={group.label} label={group.label}>{group.items.map(([label, href]) => <option key={href} value={href}>{label}</option>)}</optgroup>)}</select><nav className="doc-sidebar" aria-label="문서 메뉴">{docGroups.map(group => <section key={group.label}><p>{group.label}</p>{group.items.map(([label, href]) => <NavLink key={href} to={href} end>{label}</NavLink>)}</section>)}</nav></>;
}
type Platform = 'windows' | 'macos' | 'portable';
export function installerUrl(platform?: Platform) {
  const selected = platform || (window.location.pathname.endsWith('/macos') ? 'macos' : new URLSearchParams(window.location.search).get('platform') === 'portable' ? 'portable' : 'windows');
  return (selected === 'portable' ? import.meta.env.VITE_PORTABLE_DOWNLOAD_URL : selected === 'macos' ? import.meta.env.VITE_MACOS_DOWNLOAD_URL : import.meta.env.VITE_WINDOWS_DOWNLOAD_URL) || '#download-unavailable';
}
export function startDownload(platform?: Platform) {
  const url = installerUrl(platform);
  if (url.startsWith('#')) { window.dispatchEvent(new Event('download-unavailable')); return false; }
  const link = document.createElement('a');
  link.href = url;
  link.download = '';
  document.body.appendChild(link);
  link.click();
  link.remove();
  return true;
}
export function handleInstallerClick(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
  startDownload();
}
type ButtonProps = { className?: string; label?: string; size?: 'S' | 'M' | 'L'; style?: 'Primary' | 'Secondary'; href?: string };
export function Button({ className, label = '무료 다운로드', style = 'Primary', href = '/download' }: ButtonProps) {
  const classes = `${className || 'button'} component-button ${style === 'Secondary' ? 'secondary' : 'primary'}`;
  return href === 'download' ? <a className={classes} href={installerUrl()} onClick={handleInstallerClick}>{label}</a> : <Link className={classes} to={href}>{label}</Link>;
}
export function DownloadNotice({ close }: { close: () => void }) {
  const location = useLocation();
  return <div className="modal-backdrop" onClick={close}><section className="download-notice" role="dialog" aria-modal="true" aria-labelledby="notice-title" onClick={event => event.stopPropagation()}><h2 id="notice-title">설치 파일 준비 중</h2><p>아직 설치 파일이 연결되지 않았습니다.</p><div><Link to={location.pathname.endsWith('/macos') ? '/docs/macos' : '/docs/windows'} className="button secondary" onClick={close}>설치 문서 보기</Link><button className="button" type="button" autoFocus onClick={close}>확인</button></div></section></div>;
}
