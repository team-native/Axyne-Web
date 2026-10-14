import { Header, Footer, Button, DocSidebar, installerUrl, handleInstallerClick } from "../components";
import imgContainer from "../assets/43cf6.svg";

export default function DownloadComplete() {
  return (
    <div className="design-1" data-node-id="25:7872" data-name="Page / 다운로드 완료 / Light">
      <Header />
      <div className="design-141" data-node-id="25:7884" data-name="Content">
        <div className="design-142" data-node-id="25:7885" data-name="Success Icon">
          <div className="design-143" data-node-id="25:7886" data-name="Container">
            <img alt="" className="design-21" src={imgContainer} />
          </div>
        </div>
        <h1 className="design-144" data-node-id="25:7888">
          다운로드해 주셔서 감사합니다
        </h1>
        <div className="design-145" data-node-id="25:7889">
          <p className="design-146">아래 버튼을 눌러 다운로드하세요.</p>
          <p className="design-147">다시 받으려면 다운로드 버튼을 눌러 주세요.</p>
        </div>
        <div className="design-148" data-node-id="25:7890" data-name="File Info">
          <p className="design-149" data-node-id="25:7891">
            Axyne-setup.exe
          </p>
          <p className="design-64" data-node-id="25:7892">
            v0.1
          </p>
          <p className="design-150" data-node-id="25:7893">
            4.2 MB
          </p>
          <p className="design-151" data-node-id="25:7894">
            Windows 10 / 11 (64비트)
          </p>
        </div>
        <div className="design-86" data-node-id="25:7895" data-name="Row">
          <a href={installerUrl()} onClick={handleInstallerClick} className="design-133" data-node-id="25:7896" data-name="Button">
            <p className="design-67" data-node-id="I25:7896;20:5">
              다시 다운로드
            </p>
          </a>
          <a href="/download?platform=portable" className="design-103" data-node-id="25:7897" data-name="Button">
            <p className="design-72" data-node-id="I25:7897;20:11">
              포터블 ZIP 받기
            </p>
          </a>
        </div>
        <div className="design-152" data-node-id="25:7898" data-name="Next Steps">
          <p className="design-153" data-node-id="25:7899">
            다음 단계
          </p>
          <div className="design-30" data-node-id="25:7900" data-name="Row">
            <div className="design-154" data-node-id="25:7901" data-name="Step 1">
              <div className="design-155" data-node-id="25:7902" data-name="Text wrap">
                <p className="design-156" data-node-id="25:7903">
                  1
                </p>
              </div>
              <p className="design-157" data-node-id="25:7904">
                설치 파일 실행
              </p>
              <p className="design-158" data-node-id="25:7905">
                내려받은 Axyne-setup.exe를 더블클릭하세요.
              </p>
            </div>
            <div className="design-154" data-node-id="25:7906" data-name="Step 2">
              <div className="design-155" data-node-id="25:7907" data-name="Text wrap">
                <p className="design-156" data-node-id="25:7908">
                  2
                </p>
              </div>
              <p className="design-157" data-node-id="25:7909">
                설치 마법사 따라가기
              </p>
              <p className="design-158" data-node-id="25:7910">
                설치 경로를 고르고 “설치”를 누르면 끝납니다.
              </p>
            </div>
            <div className="design-154" data-node-id="25:7911" data-name="Step 3">
              <div className="design-155" data-node-id="25:7912" data-name="Text wrap">
                <p className="design-156" data-node-id="25:7913">
                  3
                </p>
              </div>
              <p className="design-157" data-node-id="25:7914">
                Axyne 시작
              </p>
              <p className="design-158" data-node-id="25:7915">
                시작 메뉴에서 Axyne를 열고 폴더를 불러오세요.
              </p>
            </div>
          </div>
          <div className="design-159" data-node-id="25:7916" data-name="Text stack">
            <a href="/docs/windows" className="design-41" data-node-id="25:7917">설치 문서 보기</a>
            <a href="/memory-budget" className="design-41" data-node-id="25:7918">메모리 예산 보기</a>
            <a href="/" className="design-41" data-node-id="25:7919">홈으로</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
