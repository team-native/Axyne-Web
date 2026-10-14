import { Header, Footer, Button, DocSidebar, installerUrl, handleInstallerClick } from "../components";

export default function Search() {
  return (
    <div className="design-160" data-node-id="25:6419" data-name="Docs / 검색과 이동">
      <Header />
      <div className="design-185" data-node-id="25:6431" data-name="Docs Layout">
        <DocSidebar />
        <div className="design-186" data-node-id="25:6463" data-name="Article">
          <p className="design-187" data-node-id="25:6464">
            사용법 / 검색과 이동
          </p>
          <h1 className="design-188" data-node-id="25:6465">
            검색과 이동
          </h1>
          <p className="design-189" data-node-id="25:6466">
            명령 검색 하나로 파일, 명령, 줄 이동을 모두 처리합니다.
          </p>
          <h2 id="section-1" className="design-190" data-node-id="25:6467">명령 검색</h2>
          <p className="design-210" data-node-id="25:6468">{`Ctrl K를 누르면 검색창이 열립니다. 파일 이름을 입력하면 파일을, 앞에 > 를 붙이면 명령을 찾습니다.`}</p>
          <h2 id="section-2" className="design-190" data-node-id="25:6469">자주 쓰는 동작</h2>
          <div className="design-195" data-node-id="25:6470" data-name="Table">
            <div className="design-196" data-node-id="25:6471" data-name="Text stack">
              <p className="design-215" data-node-id="25:6472">
                동작
              </p>
              <p className="design-216" data-node-id="25:6473">
                단축키
              </p>
            </div>
            <div className="design-217" data-node-id="25:6474" data-name="Text stack">
              <p className="design-218" data-node-id="25:6475">
                명령 검색
              </p>
              <p className="design-219" data-node-id="25:6476">
                Ctrl K
              </p>
            </div>
            <div className="design-217" data-node-id="25:6477" data-name="Text stack">
              <p className="design-218" data-node-id="25:6478">
                파일 안에서 찾기
              </p>
              <p className="design-219" data-node-id="25:6479">
                Ctrl F
              </p>
            </div>
            <div className="design-217" data-node-id="25:6480" data-name="Text stack">
              <p className="design-218" data-node-id="25:6481">
                바꾸기
              </p>
              <p className="design-219" data-node-id="25:6482">
                Ctrl H
              </p>
            </div>
            <div className="design-217" data-node-id="25:6483" data-name="Text stack">
              <p className="design-218" data-node-id="25:6484">
                줄 이동
              </p>
              <p className="design-219" data-node-id="25:6485">
                Ctrl G
              </p>
            </div>
          </div>
          <div className="design-204" data-node-id="25:6486" data-name="Callout">
            <p className="design-211" data-node-id="25:6487">
              참고
            </p>
            <p className="design-206" data-node-id="25:6488">
              단축키는 “단축키” 문서에서 확인할 수 있습니다.
            </p>
          </div>
        </div>
        <div className="design-207" data-node-id="25:6489" data-name="On this page">
          <p className="design-208" data-node-id="25:6490">
            이 페이지
          </p>
          <a href="#section-1" className="design-209" data-node-id="25:6491">명령 검색</a>
          <a href="#section-2" className="design-168" data-node-id="25:6492">자주 쓰는 동작</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
