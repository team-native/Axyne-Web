import { Header, Footer, Button, DocSidebar, installerUrl, handleInstallerClick } from "../components";

export default function Editor() {
  return (
    <div className="design-160" data-node-id="25:6345" data-name="Docs / 편집기와 탭">
      <Header />
      <div className="design-185" data-node-id="25:6357" data-name="Docs Layout">
        <DocSidebar />
        <div className="design-186" data-node-id="25:6389" data-name="Article">
          <p className="design-187" data-node-id="25:6390">
            사용법 / 편집기와 탭
          </p>
          <h1 className="design-188" data-node-id="25:6391">
            편집기와 탭
          </h1>
          <p className="design-189" data-node-id="25:6392">
            탭은 문서만 바꾸고 편집기 창은 하나를 공유합니다. 그래서 파일을 많이 열어도 창 수가 늘지 않습니다.
          </p>
          <h2 id="section-1" className="design-190" data-node-id="25:6393">탭의 동작</h2>
          <div className="design-191" data-node-id="25:6394" data-name="Stack">
            <div className="design-192" data-node-id="25:6395" data-name="Text stack">
              <p className="design-193" data-node-id="25:6396">
                •
              </p>
              <p className="design-194" data-node-id="25:6397">
                탭마다 Scintilla 문서가 1개씩 있습니다.
              </p>
            </div>
            <div className="design-192" data-node-id="25:6398" data-name="Text stack">
              <p className="design-193" data-node-id="25:6399">
                •
              </p>
              <p className="design-194" data-node-id="25:6400">
                탭을 전환하면 편집기 창이 해당 문서를 가리킵니다.
              </p>
            </div>
            <div className="design-192" data-node-id="25:6401" data-name="Text stack">
              <p className="design-193" data-node-id="25:6402">
                •
              </p>
              <p className="design-194" data-node-id="25:6403">
                실행 취소 기록은 문서별로 보관됩니다.
              </p>
            </div>
          </div>
          <h2 id="section-2" className="design-190" data-node-id="25:6404">내부 동작</h2>
          <div className="design-212" data-node-id="25:6405" data-name="Code Block">
            <p className="design-213" data-node-id="25:6406">{`// 탭 전환 시 문서 포인터만 교체`}</p>
            <p className="design-214" data-node-id="25:6407">
              SCI_SETDOCPOINTER(editor, doc[tab]);
            </p>
          </div>
          <div className="design-204" data-node-id="25:6408" data-name="Callout">
            <p className="design-211" data-node-id="25:6409">
              TIP
            </p>
            <p className="design-206" data-node-id="25:6410">
              열린 문서와 실행 취소 기록이 메모리 예산에서 가장 큰 항목(24 MB)입니다. 안 쓰는 탭은 닫아 두세요.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
