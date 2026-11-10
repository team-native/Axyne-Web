import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ApiError, apiPublicRequest } from '../services/api';
import { ApiFailure, StatusPanel } from './ApiFeedback';
import { Eyebrow, ExtensionFrame } from './MarketplaceLayout';
import './marketplace.css';

type Category = { id: string; name: string; count?: number };
type Plugin = { id: string; name: string; summary: string; latestVersion: string; publisher: string; categoryId?: string; iconUrl?: string; downloads?: number; publishedAt?: string; verified?: boolean; minIdeVersion?: string; maxIdeVersion?: string | null; supportedOs?: string[]; tags?: string[] };
type ListResponse = { items: Plugin[]; page: number; total: number; verifiedTotal?: number };
type CategoryResponse = { items: Category[] };

export default function Marketplace() {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<'popular'|'recent'>('popular');
  const [category, setCategory] = useState('');
  const [os, setOs] = useState('');
  const [ideVersion, setIdeVersion] = useState('');
  const [verifiedOnly,setVerifiedOnly]=useState(false);
  const [page, setPage] = useState(1);
  const [plugins, setPlugins] = useState<Plugin[]>([]);
  const [total, setTotal] = useState(0);
  const [verifiedTotal, setVerifiedTotal] = useState<number | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryError, setCategoryError] = useState<ApiError|null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);
  const [reload,setReload]=useState(0);
  const [categoriesReload,setCategoriesReload]=useState(0);

  useEffect(() => {
    let active = true;
    apiPublicRequest<CategoryResponse>('/api/v1/plugin-categories')
      .then(result => { if (active) setCategories(result.items ?? []); })
      .catch(reason => { if (active) setCategoryError(reason instanceof ApiError ? reason : new ApiError('카테고리를 불러오지 못했습니다.', 0)); });
    return () => { active = false; };
  }, [categoriesReload]);

  useEffect(() => {
    let active = true;
    const timer = window.setTimeout(() => {
      setLoading(true);
      setError(null);
      const params = new URLSearchParams({ page: String(page), limit: '20' });
      if (query.trim()) params.set('q', query.trim());
      if (category) params.set('category', category);
      if (os) params.set('os', os);
      if (ideVersion) params.set('ideVersion', ideVersion);
      apiPublicRequest<ListResponse>(`/api/v1/plugins?${params}`)
        .then(result => {
          if (!active) return;
          setPlugins(Array.isArray(result.items) ? result.items : []);
          setTotal(result.total ?? 0);
          setVerifiedTotal(typeof result.verifiedTotal === 'number' ? result.verifiedTotal : null);
        })
        .catch(reason => { if (active) setError(reason instanceof ApiError ? reason : new ApiError('플러그인 목록을 불러오지 못했습니다.', 0)); })
        .finally(() => { if (active) setLoading(false); });
    }, 250);
    return () => { active = false; window.clearTimeout(timer); };
  }, [query, category, os, ideVersion, page, reload]);

  const ordered = useMemo(() => {
    const list = plugins.filter(item=>!verifiedOnly||item.verified===true);
    if (sort === 'popular' && list.some(item=>typeof item.downloads==='number')) return list.sort((a,b)=>(b.downloads??0)-(a.downloads??0));
    if (sort === 'recent' && list.some(item=>item.publishedAt)) return list.sort((a,b)=>(b.publishedAt??'').localeCompare(a.publishedAt??''));
    return list;
  }, [plugins, sort, verifiedOnly]);
  const hasPopularity=plugins.some(item=>typeof item.downloads==='number');
  const hasRecency=plugins.some(item=>Boolean(item.publishedAt));
  const hasVerification=plugins.some(item=>typeof item.verified==='boolean');
  function reset() { setQuery(''); setCategory(''); setOs(''); setIdeVersion(''); setVerifiedOnly(false); setSort('popular'); setPage(1); }
  const verifiedCount = verifiedTotal;

  return <ExtensionFrame className="marketplace-page"><main className="extension-main">
    <p className="extension-breadcrumb">Axyne <span>/</span> Marketplace</p>
    <div className="extension-heading"><div><Eyebrow>EXTENSIONS / AXYNE IDE</Eyebrow><h1>플러그인 마켓플레이스</h1></div><div className="market-count"><strong>{total.toLocaleString()}개 플러그인</strong>{verifiedCount !== null && <span>검증 완료 {verifiedCount.toLocaleString()}개</span>}</div></div>
    <div className="market-search-row"><label className="market-search"><span aria-hidden="true">⌕</span><input value={query} onChange={event=>{setQuery(event.target.value);setPage(1)}} placeholder="이름, 설명, 태그 또는 개발자로 검색" aria-label="플러그인 검색"/></label>
      <div className="market-sort" role="group" aria-label="정렬"><button className={sort==='popular'?'selected':''} disabled={!hasPopularity} title={!hasPopularity?'현재 목록 응답에 다운로드 순위가 없습니다.':''} onClick={()=>setSort('popular')}>인기순</button><button className={sort==='recent'?'selected':''} disabled={!hasRecency} title={!hasRecency?'현재 목록 응답에 게시일 정보가 없습니다.':''} onClick={()=>setSort('recent')}>최신순</button></div>
    </div>
    <div className="market-category-chips" aria-label="카테고리"><button className={!category?'selected':''} onClick={()=>{setCategory('');setPage(1)}}>전체</button>{categories.map(item=><button key={item.id} className={category===item.id?'selected':''} onClick={()=>{setCategory(category===item.id?'':item.id);setPage(1)}}>{item.name}</button>)}</div>
    <div className="market-layout"><aside className="market-filter" aria-label="플러그인 필터"><h2>필터</h2>
      <FilterGroup title="카테고리">{categories.map(item=><CheckFilter key={item.id} label={item.name} count={item.count} checked={category===item.id} onChange={()=>{setCategory(category===item.id?'':item.id);setPage(1)}}/>)}</FilterGroup>
      <FilterGroup title="플랫폼">{[['windows','Windows'],['macos','macOS']].map(([value,label])=><CheckFilter key={value} label={label} checked={os===value} onChange={()=>{setOs(os===value?'':value);setPage(1)}}/>)}</FilterGroup>
      <FilterGroup title="IDE 호환성">{[['1.0.0','Axyne IDE 1.0+'],['1.2.0','Axyne IDE 1.2+']].map(([value,label])=><CheckFilter key={value} label={label} checked={ideVersion===value} onChange={()=>{setIdeVersion(ideVersion===value?'':value);setPage(1)}}/>)}</FilterGroup>
      <label className="market-check" title={!hasVerification?'현재 API 목록 응답에 검증 필드가 없습니다.':''}><input type="checkbox" disabled={!hasVerification} checked={verifiedOnly} onChange={event=>setVerifiedOnly(event.target.checked)}/><span>검증된 플러그인만</span></label>
      <button className="market-reset" onClick={reset}>필터 초기화</button>
    </aside><section className="market-results" aria-live="polite"><div className="market-results-heading"><h2>추천 플러그인</h2><label className="market-sort-select"><span className="sr-only">정렬 기준</span><select value={sort} onChange={event=>setSort(event.target.value as 'popular'|'recent')}><option value="popular" disabled={!hasPopularity}>인기순</option><option value="recent" disabled={!hasRecency}>최신순</option></select><span aria-hidden="true">▾</span></label></div>
      {categoryError&&<ApiFailure error={categoryError} onRetry={()=>{setCategoryError(null);setCategoriesReload(value=>value+1)}}/>}
      {loading ? <StatusPanel title="플러그인을 불러오는 중입니다" description="서버에서 마켓플레이스 목록을 가져오고 있습니다."/> : error ? <ApiFailure error={error} onRetry={()=>setReload(value=>value+1)}/> : ordered.length ? <div className="plugin-grid">{ordered.map(plugin=><Link className="plugin-card" to={`/marketplace/${plugin.id}`} key={plugin.id}>
        <div className="plugin-card-top"><span className="plugin-monogram">{plugin.iconUrl?<img src={plugin.iconUrl} alt=""/>:pluginInitials(plugin.name)}</span><span className="plugin-names"><strong>{plugin.name}</strong><small>by {plugin.publisher}</small></span>{plugin.verified&&<span className="verified-badge">검증됨</span>}</div>
        <p className="plugin-description">{plugin.summary}</p><div className="plugin-category-version"><span className="category-badge">{categories.find(item=>item.id===plugin.categoryId)?.name ?? '플러그인'}</span><code>v{plugin.latestVersion}</code></div>
        <div className="plugin-compatibility-block"><strong>지원 IDE · OS</strong><span>{plugin.minIdeVersion ? `Axyne IDE ${plugin.minIdeVersion}+` : '버전별 호환성은 상세에서 확인'}{plugin.supportedOs?.length ? <><i>/</i>{plugin.supportedOs.map(osLabel).join(' · ')}</> : null}</span></div>
        <div className="plugin-card-meta"><span>{typeof plugin.downloads==='number'?`↓ ${formatDownloads(plugin.downloads)}`:''}</span><span>최신 v{plugin.latestVersion}</span></div>
      </Link>)}</div> : <div className="market-empty"><span aria-hidden="true">⌕</span><h3>검색 결과가 없습니다</h3><p>검색어나 필터를 바꿔 다시 찾아보세요.</p><button onClick={reset}>필터 초기화</button></div>}
      {!loading && !error && total>20&&<div className="market-pagination"><button disabled={page<=1} onClick={()=>setPage(page-1)}>이전</button><span>{page} 페이지</span><button disabled={page*20>=total} onClick={()=>setPage(page+1)}>다음</button></div>}
    </section></div>
  </main></ExtensionFrame>;
}

function FilterGroup({title,children}:{title:string;children:ReactNode}) { return <fieldset className="filter-group"><legend>{title}</legend>{children}</fieldset>; }
function CheckFilter({label,count,checked,onChange}:{label:string;count?:number;checked:boolean;onChange:()=>void}) {return <label className="market-check"><input type="checkbox" checked={checked} onChange={onChange}/><span>{label}{typeof count==='number'&&<small> · {count}</small>}</span></label>;}
function pluginInitials(name:string) { return name.split(/\s+/).filter(Boolean).slice(0,2).map(part=>part[0]).join('').toUpperCase(); }
function osLabel(value:string) { return value.toLowerCase()==='macos'?'macOS':value.toLowerCase()==='windows'?'Windows':value; }
function formatDownloads(value:number) { return value>=1000?`${(value/1000).toFixed(1).replace(/\.0$/,'')}k`:value.toLocaleString(); }

