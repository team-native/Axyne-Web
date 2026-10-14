import { Header, Footer, Button, DocSidebar, installerUrl, handleInstallerClick } from "../components";

export default function MacInstall() {
  return (
    <div className="design-160" data-node-id="25:7409" data-name="Docs / macOS 설치">
      <Header />
      <div className="design-185" data-node-id="25:7421" data-name="Docs Layout">
        <DocSidebar />
        <div className="design-186" data-node-id="25:7453" data-name="Article">
          <p className="design-187" data-node-id="25:7454">
            시작하기 / macOS 설치
          </p>
          <h1 className="design-188" data-node-id="25:7455">
            macOS 설치
          </h1>
          <p className="design-189" data-node-id="25:7456">
            macOS용 설치 파일(.pkg)로 설치합니다. Apple Silicon과 Intel Mac을 모두 지원합니다.
          </p>
          <h2 id="section-1" className="design-190" data-node-id="25:7457">.pkg로 설치</h2>
          <div className="design-191" data-node-id="25:7458" data-name="Stack">
            <div className="design-192" data-node-id="25:7459" data-name="Text stack">
              <p className="design-193" data-node-id="25:7460">
                •
              </p>
              <p className="design-194" data-node-id="25:7461">
                Axyne-macOS.pkg를 내려받아 엽니다.
              </p>
            </div>
            <div className="design-192" data-node-id="25:7462" data-name="Text stack">
              <p className="design-193" data-node-id="25:7463">
                •
              </p>
              <p className="design-194" data-node-id="25:7464">
                설치 안내에 따라 “계속”을 누릅니다.
              </p>
            </div>
            <div className="design-192" data-node-id="25:7465" data-name="Text stack">
              <p className="design-193" data-node-id="25:7466">
                •
              </p>
              <p className="design-194" data-node-id="25:7467">
                설치가 끝나면 응용 프로그램 폴더에서 Axyne를 실행합니다.
              </p>
            </div>
          </div>
          <h2 id="section-2" className="design-190" data-node-id="25:7468">처음 실행할 때</h2>
          <p className="design-210" data-node-id="25:7469">
            확인되지 않은 개발자 경고가 나오면 시스템 설정 → 개인정보 보호 및 보안에서 “확인 없이 열기”를 선택하세요.
          </p>
          <h2 id="section-3" className="design-190" data-node-id="25:7470">제거</h2>
          <p className="design-210" data-node-id="25:7471">
            응용 프로그램 폴더에서 Axyne를 휴지통으로 옮기면 됩니다. settings.json과 theme.json은 사용자 폴더에 남으므로 필요하면 직접 삭제하세요.
          </p>
          <div className="design-204" data-node-id="25:7472" data-name="Callout">
            <p className="design-211" data-node-id="25:7473">
              참고
            </p>
            <p className="design-206" data-node-id="25:7474">
              시스템 요구사항: macOS 13 이상, 설치 공간 약 10 MB.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
