import { Header, Footer, Button, DocSidebar, installerUrl, handleInstallerClick } from "../components";

export default function Terminal() {
  return (
    <div className="design-160" data-node-id="25:6497" data-name="Docs / 터미널·출력">
      <Header />
      <div className="design-185" data-node-id="25:6509" data-name="Docs Layout">
        <DocSidebar />
        <div className="design-186" data-node-id="25:6541" data-name="Article">
          <p className="design-187" data-node-id="25:6542">
            사용법 / 터미널·출력
          </p>
          <h1 className="design-188" data-node-id="25:6543">
            터미널·출력
          </h1>
          <p className="design-189" data-node-id="25:6544">
            출력과 터미널은 편집기와 같은 Scintilla 컨트롤을 사용합니다. 별도 렌더러가 없어 메모리가 늘지 않습니다.
          </p>
          <h2 id="section-1" className="design-190" data-node-id="25:6545">터미널</h2>
          <p className="design-210" data-node-id="25:6546">
            Windows 버전은 powershell.exe 또는 cmd.exe를 호스팅합니다. 스크롤백 줄 수에 상한을 두어 메모리 사용량을 고정합니다.
          </p>
          <div className="design-220" data-node-id="25:6547" data-name="Code Block">
            <p className="design-221" data-node-id="25:6548">{`{`}</p>
            <p className="design-222" data-node-id="25:6549">{`  "terminal.shell": "powershell",`}</p>
            <p className="design-222" data-node-id="25:6550">{`  "terminal.scrollback": 2000`}</p>
            <p className="design-221" data-node-id="25:6551">{`}`}</p>
          </div>
          <h2 id="section-2" className="design-190" data-node-id="25:6552">출력 패널</h2>
          <p className="design-210" data-node-id="25:6553">
            빌드 결과와 로그가 표시됩니다. 줄 수 상한은 터미널과 같은 방식으로 적용됩니다.
          </p>
        </div>
        <div className="design-207" data-node-id="25:6554" data-name="On this page">
          <p className="design-208" data-node-id="25:6555">
            이 페이지
          </p>
          <a href="#section-1" className="design-209" data-node-id="25:6556">터미널</a>
          <a href="#section-2" className="design-168" data-node-id="25:6557">출력 패널</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
