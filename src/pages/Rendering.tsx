import { Header, Footer, Button, DocSidebar, installerUrl, handleInstallerClick } from "../components";

export default function Rendering() {
  return (
    <div className="design-160" data-node-id="25:6917" data-name="Docs / 렌더링">
      <Header />
      <div className="design-185" data-node-id="25:6929" data-name="Docs Layout">
        <DocSidebar />
        <div className="design-186" data-node-id="25:6961" data-name="Article">
          <p className="design-187" data-node-id="25:6962">
            설계 / 렌더링
          </p>
          <h1 className="design-188" data-node-id="25:6963">
            렌더링
          </h1>
          <p className="design-189" data-node-id="25:6964">
            필요한 영역만, 필요할 때만 그립니다.
          </p>
          <h2 id="section-1" className="design-190" data-node-id="25:6965">그리기 규칙</h2>
          <div className="design-191" data-node-id="25:6966" data-name="Stack">
            <div className="design-192" data-node-id="25:6967" data-name="Text stack">
              <p className="design-193" data-node-id="25:6968">
                •
              </p>
              <p className="design-194" data-node-id="25:6969">
                Direct2D / DirectWrite로 텍스트를 그립니다.
              </p>
            </div>
            <div className="design-192" data-node-id="25:6970" data-name="Text stack">
              <p className="design-193" data-node-id="25:6971">
                •
              </p>
              <p className="design-194" data-node-id="25:6972">
                무효화된 영역만 다시 그립니다.
              </p>
            </div>
            <div className="design-192" data-node-id="25:6973" data-name="Text stack">
              <p className="design-193" data-node-id="25:6974">
                •
              </p>
              <p className="design-194" data-node-id="25:6975">
                미니맵·애니메이션·그림자를 쓰지 않습니다.
              </p>
            </div>
          </div>
          <div className="design-212" data-node-id="25:6976" data-name="Code Block">
            <p className="design-213" data-node-id="25:6977">{`// 무효화된 영역만 다시 그린다`}</p>
            <p className="design-214" data-node-id="25:6978">{`InvalidateRect(hwnd, &dirty, FALSE);`}</p>
          </div>
          <div className="design-204" data-node-id="25:6979" data-name="Callout">
            <p className="design-211" data-node-id="25:6980">
              TIP
            </p>
            <p className="design-206" data-node-id="25:6981">
              렌더링 비용이 낮아야 배터리와 메모리를 함께 아낄 수 있습니다.
            </p>
          </div>
        </div>
        <div className="design-207" data-node-id="25:6982" data-name="On this page">
          <p className="design-208" data-node-id="25:6983">
            이 페이지
          </p>
          <a href="#section-1" className="design-209" data-node-id="25:6984">그리기 규칙</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
