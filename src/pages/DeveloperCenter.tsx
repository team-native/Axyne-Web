import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ApiError, apiRequest, clearTokens, jsonRequest, getAccessToken } from '../services/api';
import { ApiFailure, StatusPanel } from './ApiFeedback';
import { Eyebrow, ExtensionFrame } from './MarketplaceLayout';

type Account={id:string;name:string;avatarUrl:string|null;role:'user'|'developer'|'admin';developerStatus:string|null};
type Plugin={id:string;name:string;status:string;latestVersion:string|null};
type PluginsResponse={items:Plugin[];page:number;total:number};
type Stats={downloads:number;byVersion:{version:string;downloads:number}[]};

export default function DeveloperCenter() {
  const [account,setAccount]=useState<Account|null>(null);
  const [plugins,setPlugins]=useState<Plugin[]>([]);
  const [downloads,setDownloads]=useState<Record<string,number|null>>({});
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState<ApiError|null>(null);
  const [busy,setBusy]=useState(false);
  const [reload,setReload]=useState(0);
  const navigate=useNavigate();
  const load=useCallback(async()=>{
    setLoading(true);setError(null);
    try {
      const [me,mine]=await Promise.all([apiRequest<Account>('/api/v1/auth/me'),apiRequest<PluginsResponse>('/api/v1/developer/plugins?page=1&limit=100')]);
      setAccount(me);setPlugins(mine.items??[]);
      const today=new Date();const from=new Date(today.getFullYear(),today.getMonth(),1).toISOString().slice(0,10);const to=today.toISOString().slice(0,10);
      const pairs=await Promise.all((mine.items??[]).map(async plugin=>{
        try {const stats=await apiRequest<Stats>(`/api/v1/developer/plugins/${encodeURIComponent(plugin.id)}/stats?${new URLSearchParams({from,to})}`);return [plugin.id,stats.downloads] as const;}
        catch(reason){if(reason instanceof ApiError&&(reason.status===429||reason.status===403))throw reason;return [plugin.id,null] as const;}
      }));
      setDownloads(Object.fromEntries(pairs));
    } catch(reason) {
      const apiError=reason instanceof ApiError?reason:new ApiError('개발자 정보를 불러오지 못했습니다.',0);
      setError(apiError);
      if(apiError.status===401&&!getAccessToken()) navigate('/developer/login',{replace:true});
    } finally {setLoading(false);}
  },[navigate,reload]);
  useEffect(()=>{void load()},[load]);
  async function logout(){setBusy(true);try{await jsonRequest('/api/v1/auth/logout','POST')}catch{/* 세션 만료나 서버 오류여도 로컬 세션은 종료합니다. */}finally{clearTokens();setBusy(false);navigate('/developer/login',{replace:true});}}
  const totalDownloads=Object.values(downloads).reduce<number>((sum,value)=>sum+(value??0),0);
  if(loading)return <ExtensionFrame><main className="extension-main"><StatusPanel title="개발자 정보를 불러오는 중입니다" description="계정과 등록된 플러그인을 확인하고 있습니다."/></main></ExtensionFrame>;
  if(error)return <ExtensionFrame><main className="extension-main"><ApiFailure error={error} onRetry={()=>setReload(value=>value+1)}/>{error.status===403&&<StatusPanel title="개발자 권한이 필요합니다" description="개발자 권한이 있는 계정으로 로그인해 주세요." action={<Link className="extension-button secondary" to="/marketplace">마켓플레이스</Link>}/>}</main></ExtensionFrame>;
  if(account?.role!=='developer'&&account?.role!=='admin')return <ExtensionFrame><main className="extension-main"><StatusPanel title="개발자 권한이 필요합니다" description="이 계정은 개발자 대시보드에 접근할 수 없습니다." action={<button className="extension-button primary" onClick={logout}>로그아웃</button>}/></main></ExtensionFrame>;

  return <ExtensionFrame className="developer-page"><main className="extension-main">
    <div className="developer-heading"><div><Eyebrow>DEVELOPER CENTER</Eyebrow><h1>안녕하세요, {account?.name}님</h1></div><div className="dashboard-actions"><Link className="extension-button primary" to="/developer/plugins/new">+ 새 플러그인 등록</Link><button className="extension-button secondary" disabled={busy} onClick={logout}>{busy?'로그아웃 중…':'로그아웃'}</button></div></div>
    <div className="dashboard-metrics"><Metric label="등록된 플러그인" value={String(plugins.length).padStart(2,'0')} note={`전체 ${plugins.length}개`}/><Metric label="이번 달 다운로드" value={totalDownloads.toLocaleString()} note="통계 조회 가능 항목 합계"/><Metric label="게시된 플러그인" value={String(plugins.filter(item=>item.status==='published').length).padStart(2,'0')} note="게시 상태 플러그인"/></div>
    <section className="plugin-management"><header className="panel-heading"><div><Eyebrow>YOUR PLUGINS</Eyebrow><h2>내 플러그인</h2></div><span>{plugins.length}개</span></header>
      {plugins.length===0?<StatusPanel title="등록된 플러그인이 없습니다" description="첫 플러그인을 등록하면 심사와 다운로드 현황을 확인할 수 있습니다." action={<Link className="extension-button primary" to="/developer/plugins/new">플러그인 등록</Link>}/>:<div className="developer-table-wrap"><table className="developer-table"><thead><tr><th>플러그인</th><th>최신 버전</th><th>다운로드</th><th>검수 상태</th><th>관리</th></tr></thead><tbody>{plugins.map(plugin=><tr key={plugin.id}><td><strong>{plugin.name}</strong><small>{plugin.id}</small></td><td><code>{plugin.latestVersion?`v${plugin.latestVersion}`:'—'}</code></td><td>{downloads[plugin.id]?.toLocaleString()??'—'}</td><td><span className={`status-pill ${plugin.status==='published'?'success':plugin.status==='blocked'?'error':'pending'}`}>{statusLabel(plugin.status)}</span></td><td><Link to={`/developer/plugins/${plugin.id}/releases/new`}>새 버전</Link></td></tr>)}</tbody></table></div>}
    </section>
  </main></ExtensionFrame>;
}
function statusLabel(status:string){return ({draft:'초안',review:'검수 중',published:'게시됨',blocked:'차단됨'} as Record<string,string>)[status]??status;}
function Metric({label,value,note}:{label:string;value:string;note:string}) {return <article className="dashboard-metric"><span>{label}</span><div><strong>{value}</strong><small>{note}</small></div></article>;}

