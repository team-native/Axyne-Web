import { Header, Footer, Button, DocSidebar, installerUrl, handleInstallerClick } from "../components";

export default function ServerError() {
  return (
    <div className="design-160" data-node-id="25:6163" data-name="State / 500 서버 오류">
      <Header />
      <div className="design-178" data-node-id="25:6175" data-name="Content">
        <p className="design-182" data-node-id="25:6176">
          500
        </p>
        <p className="design-180" data-node-id="25:6177">
          서버에 문제가 생겼습니다
        </p>
        <div className="design-181" data-node-id="25:6178">
          <p className="design-146">잠시 후 다시 시도해 주세요.</p>
          <p className="design-147">문제가 계속되면 다운로드 페이지를 다시 열어 보세요.</p>
        </div>
        <div className="design-86" data-node-id="25:6179" data-name="Row">
          <button type="button" onClick={() => window.location.reload()} className="design-183" data-node-id="25:6180" data-name="Button">
            <p className="design-184" data-node-id="I25:6180;20:5">
              다시 시도
            </p>
          </button>
          <Button  className="design-170" label="홈으로 가기" style="Secondary"  href="/" />
        </div>
      </div>
    </div>
  );
}
