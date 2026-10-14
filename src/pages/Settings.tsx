import { Header, Footer, Button, DocSidebar, installerUrl, handleInstallerClick } from "../components";

export default function Settings() {
  return (
    <div className="design-160" data-node-id="25:6562" data-name="Docs / settings.json">
      <Header />
      <div className="design-185" data-node-id="25:6574" data-name="Docs Layout">
        <DocSidebar />
        <div className="design-186" data-node-id="25:6606" data-name="Article">
          <p className="design-187" data-node-id="25:6607">
            설정 / settings.json
          </p>
          <h1 className="design-188" data-node-id="25:6608">
            settings.json
          </h1>
          <p className="design-189" data-node-id="25:6609">
            설정 화면은 settings.json을 여는 편집기일 뿐입니다. 저장하면 즉시 반영됩니다.
          </p>
          <h2 id="section-1" className="design-190" data-node-id="25:6610">주요 설정</h2>
          <div className="design-195" data-node-id="25:6611" data-name="Table">
            <div className="design-196" data-node-id="25:6612" data-name="Text stack">
              <p className="design-199" data-node-id="25:6613">
                키
              </p>
              <p className="design-223" data-node-id="25:6614">
                기본값
              </p>
              <p className="design-224" data-node-id="25:6615">
                설명
              </p>
            </div>
            <div className="design-217" data-node-id="25:6616" data-name="Text stack">
              <p className="design-225" data-node-id="25:6617">
                editor.fontSize
              </p>
              <p className="design-226" data-node-id="25:6618">
                14
              </p>
              <p className="design-227" data-node-id="25:6619">
                글꼴 크기(px)
              </p>
            </div>
            <div className="design-217" data-node-id="25:6620" data-name="Text stack">
              <p className="design-225" data-node-id="25:6621">
                editor.tabSize
              </p>
              <p className="design-226" data-node-id="25:6622">
                4
              </p>
              <p className="design-227" data-node-id="25:6623">
                탭 너비
              </p>
            </div>
            <div className="design-217" data-node-id="25:6624" data-name="Text stack">
              <p className="design-225" data-node-id="25:6625">
                terminal.scrollback
              </p>
              <p className="design-226" data-node-id="25:6626">
                2000
              </p>
              <p className="design-227" data-node-id="25:6627">
                터미널 최대 줄 수
              </p>
            </div>
            <div className="design-200" data-node-id="25:6628" data-name="Text stack">
              <p className="design-228" data-node-id="25:6629">
                theme
              </p>
              <p className="design-229" data-node-id="25:6630">
                axyne-dark
              </p>
              <p className="design-230" data-node-id="25:6631">
                사용할 테마 이름
              </p>
            </div>
          </div>
          <h2 id="section-2" className="design-190" data-node-id="25:6632">예시</h2>
          <div className="design-220" data-node-id="25:6633" data-name="Code Block">
            <p className="design-221" data-node-id="25:6634">{`{`}</p>
            <p className="design-222" data-node-id="25:6635">{`  "editor.fontSize": 14,`}</p>
            <p className="design-222" data-node-id="25:6636">{`  "editor.tabSize": 4,`}</p>
            <p className="design-222" data-node-id="25:6637">{`  "theme": "axyne-dark"`}</p>
            <p className="design-221" data-node-id="25:6638">{`}`}</p>
          </div>
          <div className="design-204" data-node-id="25:6639" data-name="Callout">
            <p className="design-211" data-node-id="25:6640">
              TIP
            </p>
            <p className="design-206" data-node-id="25:6641">
              잘못된 값은 무시되고 기본값이 쓰입니다.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
