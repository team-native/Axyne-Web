import { Header, Footer, Button, DocSidebar, installerUrl, handleInstallerClick } from "../components";

export default function WindowsInstall() {
  return (
    <div className="design-160" data-node-id="25:6270" data-name="Docs / Windows 설치">
      <Header />
      <div className="design-185" data-node-id="25:6282" data-name="Docs Layout">
        <DocSidebar />
        <div className="design-186" data-node-id="25:6314" data-name="Article">
          <p className="design-187" data-node-id="25:6315">
            시작하기 / Windows 설치
          </p>
          <h1 className="design-188" data-node-id="25:6316">
            Windows 설치
          </h1>
          <p className="design-189" data-node-id="25:6317">
            설치 파일 또는 포터블 ZIP 중 하나를 고르세요. 둘 다 같은 실행 파일을 사용하며 성능 차이는 없습니다.
          </p>
          <h2 id="section-1" className="design-190" data-node-id="25:6318">설치 파일로 설치</h2>
          <div className="design-191" data-node-id="25:6319" data-name="Stack">
            <div className="design-192" data-node-id="25:6320" data-name="Text stack">
              <p className="design-193" data-node-id="25:6321">
                •
              </p>
              <p className="design-194" data-node-id="25:6322">
                Axyne-setup.exe를 내려받아 실행합니다.
              </p>
            </div>
            <div className="design-192" data-node-id="25:6323" data-name="Text stack">
              <p className="design-193" data-node-id="25:6324">
                •
              </p>
              <p className="design-194" data-node-id="25:6325">
                설치 경로를 고르고 “설치”를 누릅니다.
              </p>
            </div>
            <div className="design-192" data-node-id="25:6326" data-name="Text stack">
              <p className="design-193" data-node-id="25:6327">
                •
              </p>
              <p className="design-194" data-node-id="25:6328">
                설치가 끝나면 시작 메뉴에서 Axyne를 실행합니다.
              </p>
            </div>
          </div>
          <h2 id="section-2" className="design-190" data-node-id="25:6329">포터블 ZIP</h2>
          <p className="design-210" data-node-id="25:6330">
            Axyne-portable.zip을 원하는 폴더에 풀고 axyne.exe를 실행하세요. 레지스트리를 바꾸지 않으며, 폴더를 지우면 제거가 끝납니다.
          </p>
          <h2 id="section-3" className="design-190" data-node-id="25:6331">제거</h2>
          <p className="design-210" data-node-id="25:6332">
            설정 → 앱에서 Axyne를 제거하면 됩니다. settings.json과 theme.json은 사용자 폴더에 남으므로 필요하면 직접 삭제하세요.
          </p>
          <div className="design-204" data-node-id="25:6333" data-name="Callout">
            <p className="design-211" data-node-id="25:6334">
              참고
            </p>
            <p className="design-206" data-node-id="25:6335">
              시스템 요구사항: Windows 10 / 11 (64비트), 설치 공간 약 10 MB.
            </p>
          </div>
        </div>
        <div className="design-207" data-node-id="25:6336" data-name="On this page">
          <p className="design-208" data-node-id="25:6337">
            이 페이지
          </p>
          <a href="#section-1" className="design-209" data-node-id="25:6338">설치 파일로 설치</a>
          <a href="#section-2" className="design-168" data-node-id="25:6339">포터블 ZIP</a>
          <a href="#section-3" className="design-168" data-node-id="25:6340">제거</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
