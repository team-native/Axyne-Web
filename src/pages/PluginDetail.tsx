import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ApiError, apiPublicRequest } from '../services/api';
import { ApiFailure, StatusPanel } from './ApiFeedback';
import { Eyebrow, ExtensionFrame } from './MarketplaceLayout';

type Plugin = { id: string; name: string; description: string; publisher: { id: string; name: string }; latestVersion: string; permissions: string[]; supportedOs: string[]; status: string };
type VersionSummary = { version: string; releaseNotes: string; publishedAt: string };
type VersionList = { items: VersionSummary[]; page: number; total: number };
type VersionDetail = { version: string; releaseNotes: string; minIdeVersion: string; maxIdeVersion: string | null; supportedOs: string[]; dependencies: { pluginId: string; versionRange: string }[]; sha256: string };
type Compatibility = { compatible: boolean; reasons: string[]; missingDependencies: unknown[] };
type Download = { downloadUrl: string; expiresAt: string; sha256: string; size: number };

export default function PluginDetail() {
  const { pluginId = '' } = useParams();
  const [plugin,setPlugin] = useState<Plugin|null>(null);
  const [versions,setVersions] = useState<VersionSummary[]>([]);
  const [version,setVersion] = useState('');
  const [release,setRelease] = useState<VersionDetail|null>(null);
  const [os,setOs] = useState<'windows'|'macos'>('windows');
  const [arch,setArch] = useState<'x64'|'arm64'>('x64');
  const [ideVersion,setIdeVersion] = useState('1.0.0');
  const [compatibility,setCompatibility] = useState<Compatibility|null>(null);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState<ApiError|null>(null);
  const [compatError,setCompatError] = useState<ApiError|null>(null);
  const [downloadError,setDownloadError] = useState<ApiError|null>(null);
  const [busy,setBusy] = useState(false);
  const [reload,setReload] = useState(0);

  useEffect(()=>{
    let active=true; setLoading(true); setError(null); setPlugin(null); setVersions([]);
    Promise.all([
      apiPublicRequest<Plugin>(`/api/v1/plugins/${encodeURIComponent(pluginId)}`),
      apiPublicRequest<VersionList>(`/api/v1/plugins/${encodeURIComponent(pluginId)}/versions?page=1&limit=20`),
    ]).then(([data,versionData])=>{
      if(!active)return; setPlugin(data); setVersions(versionData.items?.length?versionData.items:[{version:data.latestVersion,releaseNotes:'',publishedAt:''}]); setVersion(data.latestVersion);
      const initialOs=data.supportedOs?.[0]; if(initialOs==='macos'){setOs('macos');setArch('arm64')} else if(initialOs==='windows'){setOs('windows');setArch('x64')}
    }).catch(reason=>{if(active)setError(reason instanceof ApiError?reason:new ApiError('플러그인 정보를 불러오지 못했습니다.',0));})
      .finally(()=>{if(active)setLoading(false);});
    return()=>{active=false;};
  },[pluginId,reload]);

  useEffect(()=>{
    if(!plugin||!version)return;
    let active=true; setRelease(null);
    apiPublicRequest<VersionDetail>(`/api/v1/plugins/${encodeURIComponent(pluginId)}/versions/${encodeURIComponent(version)}`)
      .then(data=>{if(active)setRelease(data);})
      .catch(reason=>{if(active)setError(reason instanceof ApiError?reason:new ApiError('버전 정보를 불러오지 못했습니다.',0));});
    return()=>{active=false;};
  },[plugin,pluginId,version,reload]);

  useEffect(()=>{
    if(!plugin||!release||!ideVersion)return;
    let active=true; setCompatibility(null); setCompatError(null);
    const params=new URLSearchParams({version:release.version,ideVersion,os,arch});
    apiPublicRequest<Compatibility>(`/api/v1/plugins/${encodeURIComponent(pluginId)}/compatibility?${params}`)
      .then(data=>{if(active)setCompatibility(data);})
      .catch(reason=>{if(active)setCompatError(reason instanceof ApiError?reason:new ApiError('호환성을 확인하지 못했습니다.',0));});
    return()=>{active=false;};
  },[plugin,release,pluginId,ideVersion,os,arch,reload]);

  async function downloadPlugin() {
    if(!release||!compatibility?.compatible)return;
    setBusy(true);setDownloadError(null);
    try {
      const params=new URLSearchParams({version:release.version,ideVersion,os,arch});
      const result=await apiPublicRequest<Download>(`/api/v1/plugins/${encodeURIComponent(pluginId)}/download?${params}`);
      window.location.assign(result.downloadUrl);
    } catch(reason) {setDownloadError(reason instanceof ApiError?reason:new ApiError('다운로드를 시작하지 못했습니다.',0));}
    finally {setBusy(false);}
  }

  if(loading)return <ExtensionFrame className="detail-page"><main className="extension-main"><StatusPanel title="플러그인을 불러오는 중입니다" description="상세 정보와 버전 기록을 가져오고 있습니다."/></main></ExtensionFrame>;
  if(error)return <ExtensionFrame className="detail-page"><main className="extension-main"><ApiFailure error={error} onRetry={()=>setReload(value=>value+1)}/></main></ExtensionFrame>;
  if(!plugin)return <ExtensionFrame><main className="extension-main"><StatusPanel title="플러그인을 찾을 수 없습니다" description="주소를 확인하거나 마켓플레이스로 돌아가세요." action={<Link className="extension-button secondary" to="/marketplace">마켓플레이스</Link>}/></main></ExtensionFrame>;

  return <ExtensionFrame className="detail-page"><main className="extension-main">
    <p className="extension-breadcrumb"><Link to="/marketplace">Marketplace</Link><span>/</span>{plugin.name}</p>
    <section className="detail-summary"><div className="detail-monogram" aria-hidden="true">{plugin.name.slice(0,1)}</div><div className="detail-heading"><div className="detail-labels"><span className="category-badge">{plugin.status}</span></div><Eyebrow>AXYNE PLUGIN</Eyebrow><h1>{plugin.name}</h1><p className="detail-developer">개발자 <strong>{plugin.publisher.name}</strong></p><p className="detail-description">{plugin.description}</p></div>
      <div className="detail-actions"><button className="extension-button primary" onClick={downloadPlugin} disabled={!compatibility?.compatible||busy}>{busy?'다운로드 준비 중…':'플러그인 다운로드'}</button><span>현재 버전 <b>v{plugin.latestVersion}</b></span></div>
    </section>
    <div className="detail-layout"><div className="detail-primary">
      <section className="extension-panel"><header className="panel-heading"><div><Eyebrow>ABOUT</Eyebrow><h2>플러그인 소개</h2></div><span className="category-badge">{plugin.status}</span></header><p className="detail-long-description">{plugin.description}</p></section>
      <section className="extension-panel release-history"><header className="panel-heading"><div><Eyebrow>RELEASE NOTES</Eyebrow><h2>버전 및 변경 사항</h2></div><label className="version-picker"><span className="sr-only">릴리스 버전</span><select value={version} onChange={event=>setVersion(event.target.value)}>{versions.map(item=><option key={item.version} value={item.version}>v{item.version}</option>)}</select></label></header>
        {!release?<StatusPanel title="버전 정보를 불러오는 중입니다" description="선택한 버전의 요구 조건과 변경 사항을 가져오고 있습니다."/>:<><div className="release-meta"><strong>v{release.version}</strong><span>{versions.find(item=>item.version===release.version)?.publishedAt ?? ''}</span><span>최소 IDE {release.minIdeVersion}</span>{release.maxIdeVersion&&<span>최대 IDE {release.maxIdeVersion}</span>}</div><p className="detail-long-description">{release.releaseNotes}</p>
          {release.dependencies.length>0&&<div className="detail-tag-list">{release.dependencies.map(item=><span key={item.pluginId}>{item.pluginId} {item.versionRange}</span>)}</div>}
          <div className="checksum"><div><strong>파일 무결성</strong><span>SHA-256</span></div><code>{release.sha256}</code></div></>}
      </section>
    </div><aside className="detail-aside"><section className="extension-panel"><h2>호환성 확인</h2>
        <label className="form-field"><span>운영체제</span><select value={os} onChange={event=>{const next=event.target.value as 'windows'|'macos';setOs(next);setArch(next==='macos'?'arm64':'x64')}}><option value="windows">Windows</option><option value="macos">macOS</option></select></label>
        <label className="form-field"><span>아키텍처</span><select value={arch} onChange={event=>setArch(event.target.value as 'x64'|'arm64')}><option value="x64">x64 / Intel</option><option value="arm64">ARM64 / Apple Silicon</option></select></label>
        <label className="form-field"><span>IDE 버전</span><input value={ideVersion} onChange={event=>setIdeVersion(event.target.value)} placeholder="예: 1.0.0"/></label>
        {compatError?<ApiFailure error={compatError} onRetry={()=>setReload(value=>value+1)}/>:!compatibility?<p role="status">호환성을 확인하는 중입니다…</p>:<p className={compatibility.compatible?'compatibility-ok':'compatibility-error'}>{compatibility.compatible?'현재 환경과 호환됩니다.':compatibility.reasons.join(' ')||'현재 환경과 호환되지 않습니다.'}</p>}
        {(compatibility?.missingDependencies?.length??0)>0&&<p>필요한 의존성 플러그인을 확인해 주세요.</p>}
        {downloadError&&<ApiFailure error={downloadError} onRetry={downloadPlugin}/>}
      </section><section className="extension-panel"><h2>지원 운영체제</h2><div className="detail-facts">{plugin.supportedOs.map(item=><span key={item}>{item}</span>)}</div></section>
      <section className="extension-panel"><h2>요청 권한</h2><ul className="permission-list">{plugin.permissions.map(permission=><li key={permission}><span aria-hidden="true">✓</span>{permission}</li>)}</ul><p className="aside-help">설치 전에 플러그인이 사용하는 권한을 확인하세요.</p></section>
      <section className="extension-panel detail-developer-card"><h2>개발자</h2><strong>{plugin.publisher.name}</strong><span>플러그인 개발자</span></section>
    </aside></div>
  </main></ExtensionFrame>;
}

