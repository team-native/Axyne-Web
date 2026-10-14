import { Header, Footer, Button, DocSidebar, installerUrl, handleInstallerClick } from "../components";

export default function Download() {
  return (
    <div className="design-1" data-node-id="25:7820" data-name="Page / 다운로드 / Light">
      <Header />
      <div className="design-90" data-node-id="25:7831" data-name="Page Header">
        <p className="design-91" data-node-id="25:7832">
          DOWNLOAD
        </p>
        <h1 className="design-92" data-node-id="25:7833">
          원하는 방식으로 시작하세요
        </h1>
        <p className="design-93" data-node-id="25:7834">
          Windows 설치 파일, macOS 설치 파일(.pkg), 포터블 ZIP 중 편한 방식을 고르세요. 현재 버전 v0.1
        </p>
      </div>
      <div className="design-127" data-node-id="25:7835" data-name="Download Cards">
        <div className="design-128" data-node-id="25:7836" data-name="Download Card">
          <div className="design-129" data-node-id="I25:7836;21:3" data-name="Badge">
            <p className="design-97" data-node-id="I25:7836;21:3;20:21">
              WINDOWS
            </p>
          </div>
          <p className="design-130" data-node-id="I25:7836;21:5">
            설치 파일 (.exe)
          </p>
          <p className="design-131" data-node-id="I25:7836;21:6">
            Axyne-setup.exe · 4.2 MB
          </p>
          <p className="design-132" data-node-id="I25:7836;21:7">
            Windows 10 / 11 (64비트)
          </p>
          <a href="/download/complete" className="design-133" data-node-id="I25:7836;21:8" data-name="Button">
            <p className="design-67" data-node-id="I25:7836;21:8;20:5">
              Windows용 다운로드
            </p>
          </a>
        </div>
        <div className="design-134" data-node-id="25:7837" data-name="Download Card">
          <div className="design-135" data-node-id="I25:7837;21:35" data-name="Badge">
            <p className="design-70" data-node-id="I25:7837;21:35;20:25">
              MACOS
            </p>
          </div>
          <p className="design-130" data-node-id="I25:7837;21:37">
            macOS 설치 파일 (.pkg)
          </p>
          <p className="design-131" data-node-id="I25:7837;21:38">
            Axyne-macOS.pkg
          </p>
          <p className="design-132" data-node-id="I25:7837;21:39">
            macOS 13 이상 · Apple Silicon / Intel
          </p>
          <a href="/download/complete/macos" className="design-103" data-node-id="I25:7837;21:40" data-name="Button">
            <p className="design-72" data-node-id="I25:7837;21:40;20:11">
              macOS용 다운로드
            </p>
          </a>
        </div>
        <div className="design-134" data-node-id="25:7838" data-name="Download Card">
          <div className="design-135" data-node-id="I25:7838;21:43" data-name="Badge">
            <p className="design-70" data-node-id="I25:7838;21:43;20:25">
              PORTABLE
            </p>
          </div>
          <p className="design-130" data-node-id="I25:7838;21:45">
            포터블 ZIP
          </p>
          <p className="design-131" data-node-id="I25:7838;21:46">
            Axyne-portable.zip
          </p>
          <p className="design-132" data-node-id="I25:7838;21:47">
            설치 없이 폴더째 실행, 레지스트리 변경 없음
          </p>
          <a href="/download?platform=portable" className="design-103" data-node-id="I25:7838;21:48" data-name="Button">
            <p className="design-72" data-node-id="I25:7838;21:48;20:11">
              포터블 ZIP 다운로드
            </p>
          </a>
        </div>
      </div>
      <div className="design-136" data-node-id="25:7839" data-name="Details">
        <div className="design-95" data-node-id="25:7840" data-name="Stack">
          <p className="design-137" data-node-id="25:7841">
            시스템 요구사항
          </p>
          <div className="design-138" data-node-id="25:7842" data-name="Text stack">
            <p className="design-139" data-node-id="25:7843">
              Windows
            </p>
            <p className="design-140" data-node-id="25:7844">
              Windows 10 / 11 (64비트)
            </p>
          </div>
          <div className="design-138" data-node-id="25:7845" data-name="Text stack">
            <p className="design-139" data-node-id="25:7846">
              macOS
            </p>
            <p className="design-140" data-node-id="25:7847">
              macOS 13 이상 (Apple Silicon · Intel)
            </p>
          </div>
          <div className="design-138" data-node-id="25:7848" data-name="Text stack">
            <p className="design-139" data-node-id="25:7849">
              메모리
            </p>
            <p className="design-140" data-node-id="25:7850">
              권장 4 GB 이상
            </p>
          </div>
          <div className="design-138" data-node-id="25:7851" data-name="Text stack">
            <p className="design-139" data-node-id="25:7852">
              디스크
            </p>
            <p className="design-140" data-node-id="25:7853">
              설치 10 MB
            </p>
          </div>
        </div>
        <div className="design-95" data-node-id="25:7854" data-name="Stack">
          <p className="design-137" data-node-id="25:7855">
            v0.1 릴리스 노트
          </p>
          <div className="design-138" data-node-id="25:7856" data-name="Text stack">
            <p className="design-139" data-node-id="25:7857">
              편집기
            </p>
            <p className="design-140" data-node-id="25:7858">
              Scintilla 기반 단일 편집창, 탭별 문서
            </p>
          </div>
          <div className="design-138" data-node-id="25:7859" data-name="Text stack">
            <p className="design-139" data-node-id="25:7860">
              터미널
            </p>
            <p className="design-140" data-node-id="25:7861">
              PowerShell / cmd 호스팅, 스크롤백 상한
            </p>
          </div>
          <div className="design-138" data-node-id="25:7862" data-name="Text stack">
            <p className="design-139" data-node-id="25:7863">
              설정
            </p>
            <p className="design-140" data-node-id="25:7864">
              settings.json · theme.json
            </p>
          </div>
          <div className="design-138" data-node-id="25:7865" data-name="Text stack">
            <p className="design-139" data-node-id="25:7866">
              macOS
            </p>
            <p className="design-140" data-node-id="25:7867">
              .pkg 설치 파일 추가
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
