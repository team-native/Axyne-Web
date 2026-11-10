import { useRef, useState, type FormEvent, type ReactNode } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ApiError, apiRequest, jsonRequest } from '../services/api';
import { ApiFailure } from './ApiFeedback';
import { Eyebrow, ExtensionFrame } from './MarketplaceLayout';

type UploadUrl={uploadUrl:string;objectKey:string;expiresAt:string};
type Published={status:'review'|'published';validation:{valid:boolean;warnings:string[]}};
const choices=[{os:'windows',label:'Windows'},{os:'macos',label:'macOS'}] as const;
const architectures=[{arch:'x64',label:'x64 / Intel'},{arch:'arm64',label:'ARM64 / Apple Silicon'}] as const;
const noteKinds=['기능','개선','수정','호환성','알려진 문제'];

export default function VersionUpload() {
  const {pluginId=''}=useParams();
  const formRef=useRef<HTMLFormElement>(null);
  const [fileName,setFileName]=useState('');
  const [loading,setLoading]=useState(false);
  const [draftCreated,setDraftCreated]=useState(false);
  const [result,setResult]=useState<Published|null>(null);
  const [error,setError]=useState<ApiError|null>(null);
  const [message,setMessage]=useState('');

  async function submit(event?:FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    const form=formRef.current;
    if(!form||!form.reportValidity())return;
    setLoading(true);setError(null);setMessage('');
    const values=new FormData(form);
    const file=values.get('package') as File|null;
    if(!file||!file.size){setLoading(false);setError(new ApiError('업로드할 패키지 파일을 선택해 주세요.',422));return;}
    const supportedOs=values.getAll('supportedOs').map(String);
    const supportedArch=values.getAll('supportedArch').map(String);
    if(!supportedOs.length||!supportedArch.length){setLoading(false);setError(new ApiError('운영체제와 아키텍처를 각각 하나 이상 선택해 주세요.',422));return;}
    let dependencies:unknown[]=[];
    try {const raw=String(values.get('dependencies')||'[]');dependencies=JSON.parse(raw);if(!Array.isArray(dependencies))throw new Error();}
    catch {setLoading(false);setError(new ApiError('의존성은 JSON 배열 형식으로 입력해 주세요.',422));return;}
    const version=String(values.get('version'));
    const releaseNotes=noteKinds.map(kind=>{const text=String(values.get(`note:${kind}`)||'').trim();return text?`## ${kind}\n${text}`:''}).filter(Boolean).join('\n\n');
    if(!releaseNotes){setLoading(false);setError(new ApiError('릴리스 노트를 하나 이상 작성해 주세요.',422));return;}
    try {
      if(!draftCreated){
        await jsonRequest(`/api/v1/developer/plugins/${encodeURIComponent(pluginId)}/versions`,'POST',{
          version,releaseNotes,minIdeVersion:String(values.get('minIdeVersion')),
          maxIdeVersion:String(values.get('maxIdeVersion')||'')||null,supportedOs,supportedArch,
          permissions:String(values.get('permissions')||'').split('\n').map(item=>item.trim()).filter(Boolean),dependencies,
        });
        setDraftCreated(true);
      }
      setMessage('업로드 주소를 요청하고 있습니다…');
      const signed=await jsonRequest<UploadUrl>(`/api/v1/developer/plugins/${encodeURIComponent(pluginId)}/versions/${encodeURIComponent(version)}/upload-url`,'POST',{
        fileName:file.name,size:file.size,contentType:file.type||'application/octet-stream',
      });
      const hash=await crypto.subtle.digest('SHA-256',await file.arrayBuffer());
      const sha256=Array.from(new Uint8Array(hash),byte=>byte.toString(16).padStart(2,'0')).join('');
      setMessage('패키지 파일을 저장소에 업로드하고 있습니다…');
      const upload=await fetch(signed.uploadUrl,{method:'PUT',headers:{'Content-Type':file.type||'application/octet-stream'},body:file});
      if(!upload.ok)throw new ApiError('패키지 업로드에 실패했습니다. 다시 시도해 주세요.',upload.status);
      setMessage('패키지 검증과 게시를 요청하고 있습니다…');
      const published=await jsonRequest<Published>(`/api/v1/developer/plugins/${encodeURIComponent(pluginId)}/versions/${encodeURIComponent(version)}/publish`,'POST',{objectKey:signed.objectKey,sha256});
      setResult(published);setMessage('');
    } catch(reason) {
      setError(reason instanceof ApiError?reason:new ApiError('버전 업로드 중 오류가 발생했습니다.',0));
    } finally {setLoading(false);}
  }

  return <ExtensionFrame className="form-page"><main className="extension-main">
    <p className="extension-breadcrumb"><Link to="/developer">개발자 센터</Link><span>/</span>{pluginId}<span>/</span>새 버전</p>
    <div className="developer-heading"><div><Eyebrow>DEVELOPER CENTER / RELEASE</Eyebrow><h1>새 버전 업로드</h1></div><Link className="extension-button secondary" to="/developer">대시보드</Link></div>
    {result?<section className="extension-panel"><Eyebrow>RELEASE VALIDATION</Eyebrow><h2>{result.status==='published'?'버전이 게시되었습니다':'검수 요청이 접수되었습니다'}</h2><p>{result.validation.valid?'패키지 검증을 완료했습니다.':'검증 결과를 확인해 주세요.'}</p>{result.validation.warnings.length>0&&<ul>{result.validation.warnings.map((warning,index)=><li key={index}>{warning}</li>)}</ul>}<Link className="extension-button primary" to="/developer">대시보드 보기</Link></section>:<div className="registration-layout upload-layout">
      <form ref={formRef} className="extension-form registration-form" onSubmit={submit}>
        <div className="form-row"><Field label="버전"><input name="version" required pattern="[0-9]+\.[0-9]+\.[0-9]+(?:[-+][a-zA-Z0-9.-]+)?" placeholder="예: 1.2.0"/></Field><Field label="최소 IDE 버전"><input name="minIdeVersion" required pattern="[0-9]+\.[0-9]+(?:\.[0-9]+)?" placeholder="예: 1.0.0"/></Field></div>
        <Field label="최대 IDE 버전 (선택)"><input name="maxIdeVersion" pattern="[0-9]+\.[0-9]+(?:\.[0-9]+)?" placeholder="제한이 없으면 비워 두세요"/></Field>
        <div className="release-editor-heading"><strong>릴리스 노트</strong><small>입력한 항목은 API의 releaseNotes 문자열에 분류 제목과 함께 저장됩니다.</small></div>
        {noteKinds.map(kind=><Field key={kind} label={kind}><textarea name={`note:${kind}`} rows={2} placeholder={`${kind} 사항을 입력하세요 (선택)`}/></Field>)}
        <fieldset className="platform-picker"><legend>지원 운영체제</legend><div>{choices.map(item=><label key={item.os}><input type="checkbox" name="supportedOs" value={item.os}/>{item.label}</label>)}</div></fieldset>
        <fieldset className="platform-picker"><legend>지원 아키텍처</legend><div>{architectures.map(item=><label key={item.arch}><input type="checkbox" name="supportedArch" value={item.arch}/>{item.label}</label>)}</div></fieldset>
        <Field label="요청 권한 (한 줄에 하나씩)"><textarea name="permissions" rows={3} placeholder={'예: process.spawn\nfilesystem.read'}/></Field>
        <Field label="의존성 JSON"><textarea name="dependencies" rows={3} defaultValue="[]" placeholder={'[{"pluginId":"example","versionRange":"^1.0.0"}]'}/></Field>
        <Field label="플러그인 패키지"><label className="file-drop"><input name="package" type="file" required onChange={event=>{setFileName(event.target.files?.[0]?.name||'');setError(null)}}/><span className="file-drop-icon" aria-hidden="true">↑</span><strong>{fileName||'패키지 파일을 선택하세요'}</strong><small>파일 크기 제한은 서버가 검사하고, SHA-256을 계산해 게시 요청에 포함합니다.</small></label></Field>
        {error&&<ApiFailure error={error} onRetry={()=>formRef.current?.requestSubmit()}/>}{message&&<p className="form-success" role="status">{message}</p>}
        <div className="form-actions"><Link className="extension-button secondary" to="/developer">취소</Link><button className="extension-button primary" type="submit" disabled={loading}>{loading?'처리 중…':'업로드 및 게시 요청'}</button></div>
      </form>
      <aside className="registration-aside extension-panel"><Eyebrow>RELEASE CHECKLIST</Eyebrow><h2>게시 전에 확인하세요</h2><ul><li>버전 번호와 IDE 호환 범위를 확인합니다.</li><li>지원 운영체제와 아키텍처를 선택합니다.</li><li>권한과 의존성은 패키지 내용과 일치해야 합니다.</li><li>업로드 URL은 만료되면 다시 발급됩니다.</li></ul><p>서버가 패키지 해시와 구조, 권한, 호환성을 검증한 뒤 게시 또는 검수를 결정합니다.</p></aside>
    </div>}
  </main></ExtensionFrame>;
}
function Field({label,children}:{label:string;children?:ReactNode}) {return <label className="form-field"><span>{label}</span>{children}</label>;}

