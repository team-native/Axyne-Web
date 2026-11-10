import { useEffect, useState, type FormEvent, type ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ApiError, apiPublicRequest, jsonRequest } from '../services/api';
import { ApiFailure, StatusPanel } from './ApiFeedback';
import { Eyebrow, ExtensionFrame } from './MarketplaceLayout';

type Category={id:string;name:string};
type Categories={items:Category[]};
type CreatedPlugin={id:string;status:'draft'};

export default function PluginRegistration() {
  const [categories,setCategories]=useState<Category[]>([]);
  const [error,setError]=useState<ApiError|null>(null);
  const [submitting,setSubmitting]=useState(false);
  const [created,setCreated]=useState<CreatedPlugin|null>(null);
  const navigate=useNavigate();
  useEffect(()=>{let active=true;apiPublicRequest<Categories>('/api/v1/plugin-categories').then(result=>{if(active)setCategories(result.items??[])}).catch(reason=>{if(active)setError(reason instanceof ApiError?reason:new ApiError('카테고리를 불러오지 못했습니다.',0))});return()=>{active=false}},[]);
  async function submit(event:FormEvent<HTMLFormElement>) {
    event.preventDefault();setSubmitting(true);setError(null);
    const values=new FormData(event.currentTarget);
    try {
      const result=await jsonRequest<CreatedPlugin>('/api/v1/developer/plugins','POST',{
        name:String(values.get('name')),slug:String(values.get('slug')),summary:String(values.get('summary')),
        description:String(values.get('description')),categoryId:String(values.get('categoryId')),
        repositoryUrl:String(values.get('repositoryUrl')||'')||null,
      });
      setCreated(result);
    } catch(reason) {setError(reason instanceof ApiError?reason:new ApiError('플러그인을 등록하지 못했습니다.',0));}
    finally {setSubmitting(false);}
  }
  return <ExtensionFrame className="form-page"><main className="extension-main">
    <p className="extension-breadcrumb"><Link to="/developer">개발자 센터</Link><span>/</span>새 플러그인 등록</p>
    <div className="developer-heading"><div><Eyebrow>DEVELOPER CENTER / PLUGINS</Eyebrow><h1>새 플러그인 등록</h1></div><Link className="extension-button secondary" to="/developer">대시보드</Link></div>
    {created?<StatusPanel title="플러그인을 등록했습니다" description={`${created.id} · 상태: ${created.status}`} action={<button className="extension-button primary" onClick={()=>navigate(`/developer/plugins/${created.id}/releases/new`)}>첫 버전 업로드</button>}/>:<div className="registration-layout">
      <form className="extension-form registration-form" onSubmit={submit}>
        <div className="form-row"><Field label="플러그인 이름"><input name="name" required minLength={2} maxLength={80} placeholder="예: Git Sync"/></Field><Field label="플러그인 ID"><input name="slug" required pattern="[a-z0-9]+(?:-[a-z0-9]+)*" placeholder="예: git-sync"/><small>영문 소문자, 숫자, 하이픈만 사용할 수 있습니다.</small></Field></div>
        <Field label="짧은 설명"><input name="summary" required maxLength={160} placeholder="카드에 표시할 한 줄 소개"/></Field>
        <Field label="상세 설명"><textarea name="description" required minLength={20} maxLength={5000} rows={5} placeholder="플러그인의 기능과 사용 방법을 설명해 주세요."/></Field>
        <div className="form-row"><Field label="카테고리"><select name="categoryId" required defaultValue=""><option value="" disabled>카테고리를 선택하세요</option>{categories.map(item=><option key={item.id} value={item.id}>{item.name}</option>)}</select></Field><Field label="저장소 URL"><input name="repositoryUrl" type="url" placeholder="https://github.com/owner/repository"/></Field></div>
    {error&&<ApiFailure error={error} onRetry={()=>{setError(null);apiPublicRequest<Categories>('/api/v1/plugin-categories').then(result=>setCategories(result.items??[])).catch(reason=>setError(reason instanceof ApiError?reason:new ApiError('카테고리를 불러오지 못했습니다.',0)))}}/>}
        <div className="form-api-note">등록 규격에 맞춰 이름, ID, 요약, 설명, 카테고리, 저장소 주소를 제출합니다.</div>
        <div className="form-actions"><Link className="extension-button secondary" to="/developer">취소</Link><button className="extension-button primary" type="submit" disabled={submitting||categories.length===0}>{submitting?'등록 중…':'플러그인 등록'}</button></div>
      </form>
      <aside className="registration-aside extension-panel"><Eyebrow>BEFORE PUBLISH</Eyebrow><h2>등록 전 확인하세요</h2><ul><li>플러그인 ID는 등록 후 변경할 수 없습니다.</li><li>저장소 주소를 공개해도 되는지 확인해 주세요.</li><li>등록 후 첫 버전을 업로드하고 검수를 요청합니다.</li></ul><p>검수 결과와 게시 상태는 대시보드에서 확인할 수 있습니다.</p></aside>
    </div>}
  </main></ExtensionFrame>;
}
function Field({label,children}:{label:string;children:ReactNode}) {return <label className="form-field"><span>{label}</span>{children}</label>;}

