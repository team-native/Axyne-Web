import { Header, Footer, Button, DocSidebar, installerUrl, handleInstallerClick } from "../components";

export default function Theme() {
  return (
    <div className="design-160" data-node-id="25:6650" data-name="Docs / theme.json">
      <Header />
      <div className="design-185" data-node-id="25:6662" data-name="Docs Layout">
        <DocSidebar />
        <div className="design-186" data-node-id="25:6694" data-name="Article">
          <p className="design-187" data-node-id="25:6695">
            설정 / theme.json
          </p>
          <h1 className="design-188" data-node-id="25:6696">
            theme.json
          </h1>
          <p className="design-189" data-node-id="25:6697">
            색상 토큰을 JSON으로 정의합니다. 기본 다크 테마의 값은 아래와 같습니다.
          </p>
          <h2 id="section-1" className="design-190" data-node-id="25:6698">색상 토큰</h2>
          <div className="design-195" data-node-id="25:6699" data-name="Table">
            <div className="design-196" data-node-id="25:6700" data-name="Text stack">
              <p className="design-231" data-node-id="25:6701">
                토큰
              </p>
              <p className="design-231" data-node-id="25:6702">
                값
              </p>
              <p className="design-232" data-node-id="25:6703">
                쓰임
              </p>
            </div>
            <div className="design-217" data-node-id="25:6704" data-name="Text stack">
              <p className="design-233" data-node-id="25:6705">
                chrome
              </p>
              <p className="design-234" data-node-id="25:6706">
                #131417
              </p>
              <p className="design-235" data-node-id="25:6707">
                창 바깥 영역
              </p>
            </div>
            <div className="design-217" data-node-id="25:6708" data-name="Text stack">
              <p className="design-233" data-node-id="25:6709">
                toolbar
              </p>
              <p className="design-234" data-node-id="25:6710">
                #1C1E22
              </p>
              <p className="design-235" data-node-id="25:6711">
                도구 모음
              </p>
            </div>
            <div className="design-217" data-node-id="25:6712" data-name="Text stack">
              <p className="design-233" data-node-id="25:6713">
                sidebar
              </p>
              <p className="design-234" data-node-id="25:6714">
                #1F2126
              </p>
              <p className="design-235" data-node-id="25:6715">
                탐색기
              </p>
            </div>
            <div className="design-217" data-node-id="25:6716" data-name="Text stack">
              <p className="design-233" data-node-id="25:6717">
                editor
              </p>
              <p className="design-234" data-node-id="25:6718">
                #1A1C20
              </p>
              <p className="design-235" data-node-id="25:6719">
                편집 영역
              </p>
            </div>
            <div className="design-217" data-node-id="25:6720" data-name="Text stack">
              <p className="design-233" data-node-id="25:6721">
                border
              </p>
              <p className="design-234" data-node-id="25:6722">
                #2A2D33
              </p>
              <p className="design-235" data-node-id="25:6723">
                구분선
              </p>
            </div>
            <div className="design-217" data-node-id="25:6724" data-name="Text stack">
              <p className="design-233" data-node-id="25:6725">
                accent
              </p>
              <p className="design-234" data-node-id="25:6726">
                #A66BF0
              </p>
              <p className="design-235" data-node-id="25:6727">
                강조색
              </p>
            </div>
          </div>
          <h2 id="section-2" className="design-190" data-node-id="25:6728">예시</h2>
          <div className="design-220" data-node-id="25:6729" data-name="Code Block">
            <p className="design-221" data-node-id="25:6730">{`{`}</p>
            <p className="design-222" data-node-id="25:6731">{`  "name": "axyne-dark",`}</p>
            <p className="design-222" data-node-id="25:6732">{`  "chrome": "#131417",`}</p>
            <p className="design-222" data-node-id="25:6733">{`  "accent": "#A66BF0"`}</p>
            <p className="design-221" data-node-id="25:6734">{`}`}</p>
          </div>
          <div className="design-204" data-node-id="25:6735" data-name="Callout">
            <p className="design-211" data-node-id="25:6736">
              참고
            </p>
            <p className="design-206" data-node-id="25:6737">
              테마 파일을 저장하면 창을 다시 열지 않아도 바로 적용됩니다.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
