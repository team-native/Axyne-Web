import { Header, Footer, Button, DocSidebar, installerUrl, handleInstallerClick } from "../components";

export default function MemoryDoc() {
  return (
    <div className="design-160" data-node-id="25:6827" data-name="Docs / 메모리 예산">
      <Header />
      <div className="design-185" data-node-id="25:6839" data-name="Docs Layout">
        <DocSidebar />
        <div className="design-186" data-node-id="25:6871" data-name="Article">
          <p className="design-187" data-node-id="25:6872">
            설계 / 메모리 예산
          </p>
          <h1 className="design-188" data-node-id="25:6873">
            메모리 예산
          </h1>
          <p className="design-189" data-node-id="25:6874">
            목표는 합계 100 MB입니다. 아래는 설계 목표치이며 실측값이 아닙니다.
          </p>
          <h2 id="section-1" className="design-190" data-node-id="25:6875">항목별 목표</h2>
          <div className="design-195" data-node-id="25:6876" data-name="Table">
            <div className="design-196" data-node-id="25:6877" data-name="Text stack">
              <p className="design-236" data-node-id="25:6878">
                항목
              </p>
              <p className="design-237" data-node-id="25:6879">
                목표(MB)
              </p>
            </div>
            <div className="design-217" data-node-id="25:6880" data-name="Text stack">
              <p className="design-238" data-node-id="25:6881">
                실행 파일 + CRT
              </p>
              <p className="design-239" data-node-id="25:6882">
                8
              </p>
            </div>
            <div className="design-217" data-node-id="25:6883" data-name="Text stack">
              <p className="design-238" data-node-id="25:6884">
                Win32 창 · Common Controls
              </p>
              <p className="design-239" data-node-id="25:6885">
                6
              </p>
            </div>
            <div className="design-217" data-node-id="25:6886" data-name="Text stack">
              <p className="design-238" data-node-id="25:6887">
                Direct2D / DirectWrite
              </p>
              <p className="design-239" data-node-id="25:6888">
                18
              </p>
            </div>
            <div className="design-217" data-node-id="25:6889" data-name="Text stack">
              <p className="design-238" data-node-id="25:6890">
                Scintilla + Lexilla
              </p>
              <p className="design-239" data-node-id="25:6891">
                6
              </p>
            </div>
            <div className="design-217" data-node-id="25:6892" data-name="Text stack">
              <p className="design-238" data-node-id="25:6893">
                열린 문서 + 실행 취소 기록
              </p>
              <p className="design-239" data-node-id="25:6894">
                24
              </p>
            </div>
            <div className="design-217" data-node-id="25:6895" data-name="Text stack">
              <p className="design-238" data-node-id="25:6896">
                출력 · 터미널 버퍼
              </p>
              <p className="design-239" data-node-id="25:6897">
                10
              </p>
            </div>
            <div className="design-217" data-node-id="25:6898" data-name="Text stack">
              <p className="design-238" data-node-id="25:6899">
                설정 · 세션 JSON
              </p>
              <p className="design-239" data-node-id="25:6900">
                2
              </p>
            </div>
            <div className="design-217" data-node-id="25:6901" data-name="Text stack">
              <p className="design-238" data-node-id="25:6902">
                여유
              </p>
              <p className="design-239" data-node-id="25:6903">
                26
              </p>
            </div>
            <div className="design-217" data-node-id="25:6904" data-name="Text stack">
              <p className="design-240" data-node-id="25:6905">
                합계
              </p>
              <p className="design-241" data-node-id="25:6906">
                100
              </p>
            </div>
          </div>
          <h2 id="section-2" className="design-190" data-node-id="25:6907">실측 확인</h2>
          <p className="design-210" data-node-id="25:6908">
            작업 집합(Working Set)을 GetProcessMemoryInfo로 1초마다 읽어 상태 표시줄에 표시하고, 90 MB를 넘으면 경고색으로 바꿉니다.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
