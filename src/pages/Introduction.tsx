import { Header, Footer, Button, DocSidebar, installerUrl, handleInstallerClick } from "../components";

export default function Introduction() {
  return (
    <div className="design-160" data-node-id="25:6183" data-name="Docs / 소개">
      <Header />
      <div className="design-185" data-node-id="25:6195" data-name="Docs Layout">
        <DocSidebar />
        <div className="design-186" data-node-id="25:6227" data-name="Article">
          <p className="design-187" data-node-id="25:6228">
            시작하기 / 소개
          </p>
          <h1 className="design-188" data-node-id="25:6229">
            소개
          </h1>
          <p className="design-189" data-node-id="25:6230">
            Axyne는 메모리 100 MB 이하를 목표로 만든 초경량 코드 편집기입니다. Windows에서 Win32 네이티브로 실행됩니다.
          </p>
          <h2 id="section-1" className="design-190" data-node-id="25:6231">설계 원칙</h2>
          <div className="design-191" data-node-id="25:6232" data-name="Stack">
            <div className="design-192" data-node-id="25:6233" data-name="Text stack">
              <p className="design-193" data-node-id="25:6234">
                •
              </p>
              <p className="design-194" data-node-id="25:6235">
                네이티브 우선 — 웹뷰·스크립트 런타임 없이 Win32 + comctl32 v6
              </p>
            </div>
            <div className="design-192" data-node-id="25:6236" data-name="Text stack">
              <p className="design-193" data-node-id="25:6237">
                •
              </p>
              <p className="design-194" data-node-id="25:6238">
                필요한 것만 그린다 — 미니맵·애니메이션·그림자 없음
              </p>
            </div>
            <div className="design-192" data-node-id="25:6239" data-name="Text stack">
              <p className="design-193" data-node-id="25:6240">
                •
              </p>
              <p className="design-194" data-node-id="25:6241">
                텍스트는 Scintilla 하나 — 편집기·출력·터미널이 같은 컨트롤
              </p>
            </div>
            <div className="design-192" data-node-id="25:6242" data-name="Text stack">
              <p className="design-193" data-node-id="25:6243">
                •
              </p>
              <p className="design-194" data-node-id="25:6244">
                설정은 JSON 파일 — settings.json · theme.json이 원본
              </p>
            </div>
          </div>
          <h2 id="section-2" className="design-190" data-node-id="25:6245">지원 환경</h2>
          <div className="design-195" data-node-id="25:6246" data-name="Table">
            <div className="design-196" data-node-id="25:6247" data-name="Text stack">
              <p className="design-197" data-node-id="25:6248">
                버전
              </p>
              <p className="design-198" data-node-id="25:6249">
                환경
              </p>
              <p className="design-199" data-node-id="25:6250">
                설치
              </p>
            </div>
            <div className="design-200" data-node-id="25:6251" data-name="Text stack">
              <p className="design-201" data-node-id="25:6252">
                Windows
              </p>
              <p className="design-202" data-node-id="25:6253">
                Windows 10 / 11 (64비트)
              </p>
              <p className="design-203" data-node-id="25:6254">
                설치 파일 · 포터블 ZIP
              </p>
            </div>
            <div className="design-200" data-node-id="25:6255" data-name="Text stack">
              <p className="design-201" data-node-id="25:6256">
                macOS
              </p>
              <p className="design-202" data-node-id="25:6257">
                macOS 13 이상 (Apple Silicon · Intel)
              </p>
              <p className="design-203" data-node-id="25:6258">
                설치 파일 (.pkg)
              </p>
            </div>
          </div>
          <div className="design-204" data-node-id="25:6259" data-name="Callout">
            <p className="design-205" data-node-id="25:6260">
              TIP
            </p>
            <p className="design-206" data-node-id="25:6261">
              처음이라면 설치 파일로 시작하세요. 포터블 ZIP은 설치 없이 폴더째 실행할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
