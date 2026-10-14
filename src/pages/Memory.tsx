import { Header, Footer, Button, DocSidebar, installerUrl, handleInstallerClick } from "../components";
import imgDot from "../assets/e9ecc.svg";
import imgDot1 from "../assets/f3b91.svg";
import imgDot2 from "../assets/96285.svg";
import imgDot3 from "../assets/15b85.svg";
import imgDot4 from "../assets/1b813.svg";
import imgDot5 from "../assets/0f2aa.svg";
import imgDot6 from "../assets/edd1c.svg";
import imgDot7 from "../assets/9f5c9.svg";

export default function Memory() {
  return (
    <div className="design-1" data-node-id="25:7739" data-name="Page / 메모리 예산 / Light">
      <Header />
      <div className="design-90" data-node-id="25:7750" data-name="Page Header">
        <p className="design-91" data-node-id="25:7751">
          MEMORY BUDGET
        </p>
        <h1 className="design-92" data-node-id="25:7752">
          합계 100 MB, 항목별로 정해 둡니다
        </h1>
        <p className="design-93" data-node-id="25:7753">
          설계 목표치입니다. 실측값은 상태 표시줄의 작업 집합(Working Set)으로 직접 확인할 수 있습니다.
        </p>
      </div>
      <div className="design-104" data-node-id="25:7754" data-name="Budget">
        <div className="design-105" data-node-id="25:7755" data-name="Stacked Bar">
          <div className="design-106" data-node-id="25:7756" data-name="실행 파일 + CRT" />
          <div className="design-107" data-node-id="25:7757" data-name="Win32 창 · Common Controls" />
          <div className="design-108" data-node-id="25:7758" data-name="Direct2D / DirectWrite" />
          <div className="design-109" data-node-id="25:7759" data-name="Scintilla + Lexilla" />
          <div className="design-110" data-node-id="25:7760" data-name="열린 문서 + 실행 취소 기록" />
          <div className="design-111" data-node-id="25:7761" data-name="출력 · 터미널 버퍼" />
          <div className="design-112" data-node-id="25:7762" data-name="설정 · 세션 JSON" />
          <div className="design-113" data-node-id="25:7763" data-name="여유" />
        </div>
        <div className="design-114" data-node-id="25:7764" data-name="Table">
          <div className="design-115" data-node-id="25:7765" data-name="Row">
            <p className="design-22" data-node-id="25:7766">
              항목
            </p>
            <div className="design-116" data-node-id="25:7767" data-name="Container" />
            <p className="design-22" data-node-id="25:7768">
              목표 (MB)
            </p>
          </div>
          <div className="design-117" data-node-id="25:7769" data-name="Row / 실행 파일 + CRT">
            <div className="design-118" data-node-id="25:7770" data-name="Dot">
              <img alt="" className="design-21" src={imgDot} />
            </div>
            <p className="design-119" data-node-id="25:7771">
              실행 파일 + CRT
            </p>
            <div className="design-116" data-node-id="25:7772" data-name="Container" />
            <p className="design-120" data-node-id="25:7773">
              8
            </p>
          </div>
          <div className="design-117" data-node-id="25:7774" data-name="Row / Win32 창 · Common Controls">
            <div className="design-118" data-node-id="25:7775" data-name="Dot">
              <img alt="" className="design-21" src={imgDot1} />
            </div>
            <p className="design-119" data-node-id="25:7776">
              Win32 창 · Common Controls
            </p>
            <div className="design-116" data-node-id="25:7777" data-name="Container" />
            <p className="design-120" data-node-id="25:7778">
              6
            </p>
          </div>
          <div className="design-117" data-node-id="25:7779" data-name="Row / Direct2D / DirectWrite">
            <div className="design-118" data-node-id="25:7780" data-name="Dot">
              <img alt="" className="design-21" src={imgDot2} />
            </div>
            <p className="design-119" data-node-id="25:7781">
              Direct2D / DirectWrite
            </p>
            <div className="design-116" data-node-id="25:7782" data-name="Container" />
            <p className="design-120" data-node-id="25:7783">
              18
            </p>
          </div>
          <div className="design-117" data-node-id="25:7784" data-name="Row / Scintilla + Lexilla">
            <div className="design-118" data-node-id="25:7785" data-name="Dot">
              <img alt="" className="design-21" src={imgDot3} />
            </div>
            <p className="design-119" data-node-id="25:7786">
              Scintilla + Lexilla
            </p>
            <div className="design-116" data-node-id="25:7787" data-name="Container" />
            <p className="design-120" data-node-id="25:7788">
              6
            </p>
          </div>
          <div className="design-117" data-node-id="25:7789" data-name="Row / 열린 문서 + 실행 취소 기록">
            <div className="design-118" data-node-id="25:7790" data-name="Dot">
              <img alt="" className="design-21" src={imgDot4} />
            </div>
            <p className="design-119" data-node-id="25:7791">
              열린 문서 + 실행 취소 기록
            </p>
            <div className="design-116" data-node-id="25:7792" data-name="Container" />
            <p className="design-120" data-node-id="25:7793">
              24
            </p>
          </div>
          <div className="design-117" data-node-id="25:7794" data-name="Row / 출력 · 터미널 버퍼">
            <div className="design-118" data-node-id="25:7795" data-name="Dot">
              <img alt="" className="design-21" src={imgDot5} />
            </div>
            <p className="design-119" data-node-id="25:7796">
              출력 · 터미널 버퍼
            </p>
            <div className="design-116" data-node-id="25:7797" data-name="Container" />
            <p className="design-120" data-node-id="25:7798">
              10
            </p>
          </div>
          <div className="design-117" data-node-id="25:7799" data-name="Row / 설정 · 세션 JSON">
            <div className="design-118" data-node-id="25:7800" data-name="Dot">
              <img alt="" className="design-21" src={imgDot6} />
            </div>
            <p className="design-119" data-node-id="25:7801">
              설정 · 세션 JSON
            </p>
            <div className="design-116" data-node-id="25:7802" data-name="Container" />
            <p className="design-120" data-node-id="25:7803">
              2
            </p>
          </div>
          <div className="design-117" data-node-id="25:7804" data-name="Row / 여유">
            <div className="design-118" data-node-id="25:7805" data-name="Dot">
              <img alt="" className="design-21" src={imgDot7} />
            </div>
            <p className="design-119" data-node-id="25:7806">
              여유
            </p>
            <div className="design-116" data-node-id="25:7807" data-name="Container" />
            <p className="design-120" data-node-id="25:7808">
              26
            </p>
          </div>
          <div className="design-121" data-node-id="25:7809" data-name="Row">
            <p className="design-122" data-node-id="25:7810">
              합계
            </p>
            <div className="design-116" data-node-id="25:7811" data-name="Container" />
            <p className="design-123" data-node-id="25:7812">
              100
            </p>
          </div>
        </div>
        <div className="design-124" data-node-id="25:7813" data-name="Note">
          <p className="design-125" data-node-id="25:7814">
            i
          </p>
          <p className="design-126" data-node-id="25:7815">
            수치는 설계 목표이며 실측값이 아닙니다. 실제 사용량은 상태 표시줄의 작업 집합 값으로 확인하세요.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
