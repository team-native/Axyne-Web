import { Component, useEffect, useState, type ReactNode } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { DownloadNotice, installerUrl } from './components';
import Home from './pages/Home';
import Features from './pages/Features';
import Memory from './pages/Memory';
import Download from './pages/Download';
import DownloadComplete from './pages/DownloadComplete';
import MacComplete from './pages/MacComplete';
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
class ErrorBoundary extends Component<{children:ReactNode},{failed:boolean}> {
  state={failed:false};
  static getDerivedStateFromError(){return {failed:true};}
  render(){return this.state.failed?<div className="app dark"><ServerError/></div>:this.props.children;}
}
function Site(){
  const location=useLocation();
  const [notice,setNotice]=useState(false);
  const dark=location.pathname.startsWith('/docs')||['/404','/500','/download/complete/macos'].includes(location.pathname);
  useEffect(()=>{
    document.title='Axyne';
    setNotice(false);
    if(!location.hash) window.scrollTo(0,0);
    else requestAnimationFrame(()=>document.getElementById(location.hash.slice(1))?.scrollIntoView());
    const portable=location.pathname==='/download'&&new URLSearchParams(location.search).get('platform')==='portable';
    if(portable&&installerUrl().startsWith('#')) setNotice(true);
    if((portable||location.pathname.startsWith('/download/complete'))&&!installerUrl().startsWith('#')){
      const timer=window.setTimeout(()=>{const link=document.createElement('a');link.href=installerUrl();link.download='';link.click();},150);
      return ()=>window.clearTimeout(timer);
    }
  },[location.pathname,location.search]);
  useEffect(()=>{
    const show=()=>setNotice(true);
    const escape=(event:KeyboardEvent)=>{if(event.key==='Escape')setNotice(false);};
    window.addEventListener('download-unavailable',show);
    window.addEventListener('keydown',escape);
    return ()=>{window.removeEventListener('download-unavailable',show);window.removeEventListener('keydown',escape);};
  },[]);
  return <div className={dark ? 'app dark' : 'app'}><Routes>
  <Route path="/" element={<Home/>}/>
<Route path="/features" element={<Features/>}/>
<Route path="/memory-budget" element={<Memory/>}/>
<Route path="/download" element={<Download/>}/>
<Route path="/download/complete" element={<DownloadComplete/>}/>
<Route path="/download/complete/macos" element={<MacComplete/>}/>
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
  <Route path="*" element={<NotFound/>}/></Routes>{notice&&<DownloadNotice close={()=>setNotice(false)}/>}</div>;
}
export default function App(){return <BrowserRouter><ErrorBoundary><Site/></ErrorBoundary></BrowserRouter>;}

