import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ApiError, apiPublicRequest } from '../services/api';
import { ApiFailure, StatusPanel } from './ApiFeedback';
import { Eyebrow, ExtensionFrame } from './MarketplaceLayout';

type Target={key:string;os:'windows'|'macos';arch:'x64'|'arm64';label:string};
const targets:Target[]=[
  {key:'windows',os:'windows',arch:'x64',label:'Windows · x64'},
  {key:'windows-arm64',os:'windows',arch:'arm64',label:'Windows · ARM64'},
  {key:'macos-intel',os:'macos',arch:'x64',label:'macOS · Intel'},
  {key:'macos',os:'macos',arch:'arm64',label:'macOS · Apple Silicon'},
];
type Latest={version:string;channel:string;publishedAt:string;releaseNotes:string;minSupportedVersion:string|null};
type Release={version:string;channel:string;releaseNotes:string;publishedAt:string;artifacts:{os:string;arch:string;size:number;sha256:string}[]};
type Download={downloadUrl:string;expiresAt:string;sha256:string;size:number};
const bytes=(size:number)=>size<1024*1024?`${(size/1024).toFixed(0)} KB`:`${(size/1024/1024).toFixed(1)} MB`;

export default function Releases() {
  const [searchParams]=useSearchParams();
  const [selected,setSelected]=useState(()=>{const target=searchParams.get('target');return Math.max(0,targets.findIndex(item=>item.key===target||(target==='portable'&&item.key==='windows')))});
  const [latest,setLatest]=useState<Latest|null>(null);
  const [release,setRelease]=useState<Release|null>(null);
  const [download,setDownload]=useState<Download|null>(null);
  const [loading,setLoading]=useState(true);
  const [requesting,setRequesting]=useState(false);
  const [error,setError]=useState<ApiError|null>(null);
  const [downloadError,setDownloadError]=useState<ApiError|null>(null);
  const [reload,setReload]=useState(0);
  const target=targets[selected];

  useEffect(()=>{
    let active=true;setLoading(true);setError(null);setDownload(null);setDownloadError(null);
    const params=new URLSearchParams({os:target.os,arch:target.arch,channel:'stable'});
    apiPublicRequest<Latest>(`/api/v1/releases/latest?${params}`).then(async current=>{
      if(!active)return;setLatest(current);
      const detail=await apiPublicRequest<Release>(`/api/v1/releases/${encodeURIComponent(current.version)}`);
      if(active)setRelease(detail);
    }).catch(reason=>{if(active)setError(reason instanceof ApiError?reason:new ApiError('릴리스 정보를 불러오지 못했습니다.',0));})
      .finally(()=>{if(active)setLoading(false);});
    return()=>{active=false;};
  },[target.os,target.arch,reload]);

  async function requestDownload() {
    if(!latest)return;
    setRequesting(true);setDownloadError(null);setDownload(null);
    try {const params=new URLSearchParams({os:target.os,arch:target.arch});setDownload(await apiPublicRequest<Download>(`/api/v1/releases/${encodeURIComponent(latest.version)}/download?${params}`));}
    catch(reason){setDownloadError(reason instanceof ApiError?reason:new ApiError('다운로드 정보를 불러오지 못했습니다.',0));}
    finally{setRequesting(false);}
  }

  return <ExtensionFrame className="release-page"><main className="extension-main">
    <p className="extension-breadcrumb">Axyne <span>/</span> IDE Releases</p>
    <div className="extension-heading"><div><Eyebrow>AXYNE IDE / RELEASES</Eyebrow><h1>IDE 다운로드</h1></div><span className="stable-release"><i/>안정 버전 <strong>{loading?'확인 중':latest?`v${latest.version}`:'—'}</strong></span></div>
    {error?<ApiFailure error={error} onRetry={()=>setReload(value=>value+1)}/>:<>
      <section className="release-download-panel extension-panel"><div className="release-download-copy"><span className="release-icon">A</span><div><Eyebrow>LATEST STABLE</Eyebrow><h2>Axyne IDE {latest&&<code>v{latest.version}</code>}</h2><p>운영체제와 아키텍처를 선택해 다운로드 정보를 확인하세요.</p></div></div>
        <div className="release-target-grid">{targets.map((item,index)=><button key={item.key} className={`release-target ${selected===index?'selected':''}`} onClick={()=>{setSelected(index);setLatest(null);setRelease(null);setDownload(null)}}><span className="target-check">{selected===index?'✓':'○'}</span><span><strong>{item.os==='windows'?'Windows':'macOS'}</strong><small>{item.arch==='x64'?'x64 / Intel':'ARM64 / Apple Silicon'}</small></span><small>{loading&&selected===index?'확인 중…':release?.artifacts.find(artifact=>artifact.os===item.os&&artifact.arch===item.arch)?.size?bytes(release.artifacts.find(artifact=>artifact.os===item.os&&artifact.arch===item.arch)!.size):'파일 정보 확인'}</small></button>)}</div>
        <div className="release-download-actions"><div><span>선택한 파일</span><strong>{target.label}</strong></div><button className="extension-button primary" onClick={requestDownload} disabled={!latest||loading||requesting}>{requesting?'확인 중…':'다운로드 정보 확인'}</button></div>
        {downloadError&&<ApiFailure error={downloadError} onRetry={requestDownload}/>}
        {download&&<div className="release-download-ready"><div><strong>SHA-256</strong><code>{download.sha256}</code><span>{bytes(download.size)} · 링크 만료 {new Date(download.expiresAt).toLocaleString('ko-KR')}</span></div><a className="extension-button primary" href={download.downloadUrl}>파일 다운로드</a></div>}
      </section>
      {release&&<section className="release-integrity extension-panel"><div><Eyebrow>INTEGRITY</Eyebrow><h2>파일 무결성 확인</h2><p>다운로드 전에 발급된 SHA-256 값과 받은 파일의 해시를 비교하세요.</p></div><div className="release-hash"><span>게시 일시 · {new Date(release.publishedAt).toLocaleDateString('ko-KR')}</span><span>릴리스 채널 · {release.channel}</span>{latest?.minSupportedVersion&&<span>최소 지원 버전 · {latest.minSupportedVersion}</span>}</div></section>}
      {release&&<section className="release-notes extension-panel"><header className="panel-heading"><div><Eyebrow>CHANGELOG</Eyebrow><h2>릴리스 노트</h2></div><span>v{release.version}</span></header><p className="detail-long-description release-server-notes">{release.releaseNotes||latest?.releaseNotes}</p></section>}
      {!loading&&!release&&!error&&<StatusPanel title="릴리스가 없습니다" description="선택한 운영체제와 아키텍처의 안정 릴리스를 찾지 못했습니다."/>}
    </>}
  </main></ExtensionFrame>;
}

