import { Component, useEffect, type ReactNode, type MouseEvent } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { usePageMotion } from './usePageMotion';
import Home from './pages/Home';
import Features from './pages/Features';
import Memory from './pages/Memory';
import Download from './pages/Download';
import NotFound from './pages/NotFound';
import ServerError from './pages/ServerError';
import Introduction from './pages/Introduction';
import WindowsInstall from './pages/WindowsInstall';
import MacInstall from './pages/MacInstall';
import Editor from './pages/Editor';
import Search from './pages/Search';
import Terminal from './pages/Terminal';
import Settings from './pages/Settings';
import Theme from './pages/Theme';
import Shortcuts from './pages/Shortcuts';
import MemoryDoc from './pages/MemoryDoc';
import Rendering from './pages/Rendering';
import Marketplace from './pages/Marketplace';
import PluginDetail from './pages/PluginDetail';
import DeveloperCenter from './pages/DeveloperCenter';
import DeveloperLogin from './pages/DeveloperLogin';
import PluginRegistration from './pages/PluginRegistration';
import VersionUpload from './pages/VersionUpload';
import Releases from './pages/Releases';
import OAuthCallback from './pages/OAuthCallback';
class ErrorBoundary extends Component<{children:ReactNode},{failed:boolean}> {
  state={failed:false};
  static getDerivedStateFromError(){return {failed:true};}
  render(){return this.state.failed?<div className="app"><ServerError/></div>:this.props.children;}
}
function Site(){
  const location=useLocation();
  const navigate=useNavigate();
  const motionRoot=usePageMotion(location.pathname);
  useEffect(()=>{
    document.title='Axyne';
    if(!location.hash) window.scrollTo(0,0);
    else requestAnimationFrame(()=>document.getElementById(location.hash.slice(1))?.scrollIntoView());
  },[location.pathname,location.search]);
  function onDownloadClick(event:MouseEvent<HTMLDivElement>){
    if(event.button!==0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey) return;
    const link=(event.target as Element).closest<HTMLAnchorElement>('a[href]');
    if(!link) return;
    const target=new URL(link.href,window.location.href);
    if(target.origin!==window.location.origin) return;
    const platform=target.pathname==='/download/complete'?'windows':target.pathname==='/download/complete/macos'?'macos':target.pathname==='/download'&&target.searchParams.get('platform')==='portable'?'portable':null;
    if(!platform) return;
    event.preventDefault();
    event.stopPropagation();
    navigate(`/releases?target=${platform}`);
  }
  return <div className="app motion-ready" ref={motionRoot} onClickCapture={onDownloadClick}><div className="scroll-progress" aria-hidden="true"/><Routes>
  <Route path="/" element={<Home/>}/>
<Route path="/features" element={<Features/>}/>
<Route path="/memory-budget" element={<Memory/>}/>
  <Route path="/download" element={new URLSearchParams(location.search).get('platform')==='portable'?<Navigate to="/releases?target=portable" replace/>:<Download/>}/>
<Route path="/download/complete" element={<Navigate to="/releases?target=windows" replace/>}/>
<Route path="/download/complete/macos" element={<Navigate to="/releases?target=macos" replace/>}/>
<Route path="/404" element={<NotFound/>}/>
<Route path="/500" element={<ServerError/>}/>
<Route path="/docs" element={<Introduction/>}/>
<Route path="/docs/windows" element={<WindowsInstall/>}/>
<Route path="/docs/macos" element={<MacInstall/>}/>
<Route path="/docs/editor" element={<Editor/>}/>
<Route path="/docs/search" element={<Search/>}/>
<Route path="/docs/terminal" element={<Terminal/>}/>
<Route path="/docs/settings" element={<Settings/>}/>
<Route path="/docs/theme" element={<Theme/>}/>
<Route path="/docs/shortcuts" element={<Shortcuts/>}/>
<Route path="/docs/memory-budget" element={<MemoryDoc/>}/>
<Route path="/docs/rendering" element={<Rendering/>}/>
<Route path="/marketplace" element={<Marketplace/>}/>
<Route path="/marketplace/:pluginId" element={<PluginDetail/>}/>
<Route path="/developer" element={<DeveloperCenter/>}/>
<Route path="/developer/login" element={<DeveloperLogin/>}/>
<Route path="/developer/callback" element={<OAuthCallback/>}/>
<Route path="/developer/plugins/new" element={<PluginRegistration/>}/>
<Route path="/developer/plugins/:pluginId/releases/new" element={<VersionUpload/>}/>
<Route path="/releases" element={<Releases/>}/>
  <Route path="*" element={<NotFound/>}/></Routes></div>;
}
export default function App(){return <BrowserRouter><ErrorBoundary><Site/></ErrorBoundary></BrowserRouter>;}


