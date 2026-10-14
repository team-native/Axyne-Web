import { Header, Footer, Button, DocSidebar, installerUrl, handleInstallerClick } from "../components";
import imgContainer from "../assets/9c07c.svg";

export default function MacComplete() {
  return (
    <div className="design-160" data-node-id="25:7357" data-name="Page / 다운로드 완료 (macOS)">
      <Header />
      <div className="design-141" data-node-id="25:7369" data-name="Content">
        <div className="design-161" data-node-id="25:7370" data-name="Success Icon">
          <div className="design-143" data-node-id="25:7371" data-name="Container">
            <img alt="" className="design-21" src={imgContainer} />
          </div>
        </div>
        <h1 className="design-162" data-node-id="25:7373">
          다운로드해 주셔서 감사합니다
        </h1>
        <div className="design-163" data-node-id="25:7374">
          <p className="design-146">잠시 후 다운로드가 자동으로 시작됩니다.</p>
          <p className="design-147">시작되지 않으면 아래 버튼을 눌러 주세요.</p>
        </div>
        <div className="design-164" data-node-id="25:7375" data-name="File Info">
          <p className="design-165" data-node-id="25:7376">
            Axyne-macOS.pkg
          </p>
          <p className="design-166" data-node-id="25:7377">
            v0.1
          </p>
          <p className="design-167" data-node-id="25:7378">
            .pkg
          </p>
          <p className="design-168" data-node-id="25:7379">
            macOS 13 이상 (Apple Silicon · Intel)
          </p>
        </div>
        <div className="design-86" data-node-id="25:7380" data-name="Row">
          <Button  className="design-169" label="다시 다운로드"  href="download" />
          <Button  className="design-170" label="포터블 ZIP 받기" style="Secondary"  href="/download?platform=portable" />
        </div>
        <div className="design-152" data-node-id="25:7383" data-name="Next Steps">
          <p className="design-171" data-node-id="25:7384">
            다음 단계
          </p>
          <div className="design-30" data-node-id="25:7385" data-name="Row">
            <div className="design-172" data-node-id="25:7386" data-name="Step 1">
              <div className="design-173" data-node-id="25:7387" data-name="Text wrap">
                <p className="design-174" data-node-id="25:7388">
                  1
                </p>
              </div>
              <p className="design-175" data-node-id="25:7389">
                .pkg 파일 열기
              </p>
              <p className="design-176" data-node-id="25:7390">
                내려받은 Axyne-macOS.pkg를 더블클릭하세요.
              </p>
            </div>
            <div className="design-172" data-node-id="25:7391" data-name="Step 2">
              <div className="design-173" data-node-id="25:7392" data-name="Text wrap">
                <p className="design-174" data-node-id="25:7393">
                  2
                </p>
              </div>
              <p className="design-175" data-node-id="25:7394">
                설치 안내 따라가기
              </p>
              <p className="design-176" data-node-id="25:7395">
                안내에 따라 “계속”을 눌러 설치를 마치세요.
              </p>
            </div>
            <div className="design-172" data-node-id="25:7396" data-name="Step 3">
              <div className="design-173" data-node-id="25:7397" data-name="Text wrap">
                <p className="design-174" data-node-id="25:7398">
                  3
                </p>
              </div>
              <p className="design-175" data-node-id="25:7399">
                Axyne 시작
              </p>
              <p className="design-176" data-node-id="25:7400">
                응용 프로그램 폴더에서 Axyne를 열고 폴더를 불러오세요.
              </p>
            </div>
          </div>
          <div className="design-177" data-node-id="25:7401" data-name="Text stack">
            <a href="/docs/macos" className="design-41" data-node-id="25:7402">설치 문서 보기</a>
            <a href="/memory-budget" className="design-41" data-node-id="25:7403">메모리 예산 보기</a>
            <a href="/" className="design-41" data-node-id="25:7404">홈으로</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
