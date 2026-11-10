import { useEffect, useState, type ReactNode } from 'react';
import type { ApiError } from '../services/api';

export function ApiFailure({error,onRetry}:{error:ApiError;onRetry:()=>void}) {
  const initial = error.retryAfterSeconds;
  const [remaining,setRemaining] = useState(initial ?? 0);
  useEffect(()=>{
    setRemaining(initial ?? 0);
    if (error.status !== 429 || initial === undefined || initial <= 0) return;
    const started = Date.now();
    const timer = window.setInterval(()=>setRemaining(Math.max(0,initial-Math.floor((Date.now()-started)/1000))),1000);
    return ()=>window.clearInterval(timer);
  },[error,initial]);
  return <div className="api-failure" role="alert">
    <span className="api-failure-icon" aria-hidden="true">!</span>
    <div><strong>{error.status===429?'요청이 잠시 제한됐어요':error.status===403?'접근 권한이 없습니다':'요청을 처리하지 못했습니다'}</strong>
      <p>{error.status===429&&remaining>0?`${remaining}초 후 다시 요청할 수 있습니다.`:error.message}</p>
      {error.body?.errors&&Array.isArray(error.body.errors)&&<ul>{error.body.errors.map((item,index)=><li key={index}>{typeof item==='string'?item:JSON.stringify(item)}</li>)}</ul>}
      {error.body?.requestId&&<small>요청 ID · {String(error.body.requestId)}</small>}
    </div>
    <button className="extension-button secondary" disabled={error.status===429&&remaining>0} onClick={onRetry}>다시 요청</button>
  </div>;
}

export function StatusPanel({title,description,action}:{title:string;description:string;action?:ReactNode}) {
  return <section className="status-panel" role="status"><span aria-hidden="true">○</span><h2>{title}</h2><p>{description}</p>{action}</section>;
}

