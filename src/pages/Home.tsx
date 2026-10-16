import { Header, Footer, Button, DocSidebar, installerUrl, handleInstallerClick } from "../components";

export default function Home() {
  return (
    <div className="design-1" data-node-id="25:7484" data-name="Axyne web / Light">
      <Header />
      <div className="design-2" data-node-id="25:7495" data-name="Hero">
        <div className="design-3" data-node-id="25:7496" data-name="Badge">
          <p className="design-4" data-node-id="25:7497">
            v0.1 · Windows 10/11 · macOS (.pkg)
          </p>
        </div>
        <div className="design-5" data-node-id="25:7498">
          <p className="design-6">메모리 100 MB 이하로</p>
          <p className="design-7">돌아가는 IDE</p>
        </div>
        <div className="design-8" data-node-id="25:7499">
          <p className="design-9">웹뷰도, 스크립트 런타임도 없습니다. C와 Scintilla로 만든</p>
          <p className="design-10">가볍고 즉시 켜지는 IDE.</p>
        </div>
        <div className="design-11" data-node-id="25:7500" data-name="CTA">
          <a href="/download/complete" className="design-12" data-node-id="25:7501" data-name="Button">
            <p className="design-13" data-node-id="I25:7501;20:7">
              Windows용 다운로드
            </p>
          </a>
          <a href="/download/complete/macos" className="design-14" data-node-id="25:7502" data-name="Button">
            <p className="design-15" data-node-id="I25:7502;20:13">
              macOS용 다운로드
            </p>
          </a>
        </div>
        <p className="design-16" data-node-id="25:7503">
          Windows 설치 파일 4.2 MB · macOS .pkg · 포터블 ZIP
        </p>
      </div>
      <div className="design-17" data-node-id="25:7504" data-name="Product Shot">
        <div className="design-18" data-node-id="25:7505" data-name="IDE Window">
          <div className="design-19" data-node-id="25:7506" data-name="Titlebar">
            <div className="design-20" data-node-id="25:7507" data-name="Dot" aria-hidden="true" />
            <div className="design-20" data-node-id="25:7508" data-name="Dot" aria-hidden="true" />
            <div className="design-20" data-node-id="25:7509" data-name="Dot" aria-hidden="true" />
            <p className="design-22" data-node-id="25:7510">
              main.c — Axyne
            </p>
          </div>
          <div className="design-23" data-node-id="25:7511" data-name="Body">
            <div className="design-24" data-node-id="25:7512" data-name="Sidebar">
              <p className="design-25" data-node-id="25:7513">
                EXPLORER
              </p>
              <p className="design-26" data-node-id="25:7514">
                ▾ src
              </p>
              <p className="design-27" data-node-id="25:7515">{`   main.c`}</p>
              <p className="design-28" data-node-id="25:7516">{`   editor.c`}</p>
              <p className="design-28" data-node-id="25:7517">{`   theme.c`}</p>
              <p className="design-26" data-node-id="25:7518">
                ▸ include
              </p>
              <p className="design-28" data-node-id="25:7519">{`   settings.json`}</p>
            </div>
            <div className="design-29" data-node-id="25:7520" data-name="Editor">
              <div className="design-30" data-node-id="25:7521" data-name="Text stack">
                <p className="design-31" data-node-id="25:7522">
                  1
                </p>
                <p className="design-32" data-node-id="25:7523">{`#include <windows.h>`}</p>
              </div>
              <div className="design-30" data-node-id="25:7524" data-name="Text stack">
                <p className="design-31" data-node-id="25:7525">
                  2
                </p>
                <p className="design-33" data-node-id="25:7526">{` `}</p>
              </div>
              <div className="design-34" data-node-id="25:7527" data-name="Text stack">
                <p className="design-35" data-node-id="25:7528">
                  3
                </p>
                <p className="design-36" data-node-id="25:7529">{`// 무효화된 영역만 다시 그립니다`}</p>
              </div>
              <div className="design-30" data-node-id="25:7530" data-name="Text stack">
                <p className="design-31" data-node-id="25:7531">
                  4
                </p>
                <p className="design-37" data-node-id="25:7532">{`LRESULT CALLBACK WndProc(HWND h, UINT m, ...) {`}</p>
              </div>
              <div className="design-30" data-node-id="25:7533" data-name="Text stack">
                <p className="design-31" data-node-id="25:7534">
                  5
                </p>
                <p className="design-38" data-node-id="25:7535">{`    switch (m) {`}</p>
              </div>
              <div className="design-30" data-node-id="25:7536" data-name="Text stack">
                <p className="design-31" data-node-id="25:7537">
                  6
                </p>
                <p className="design-39" data-node-id="25:7538">{`    case WM_PAINT:`}</p>
              </div>
              <div className="design-30" data-node-id="25:7539" data-name="Text stack">
                <p className="design-31" data-node-id="25:7540">
                  7
                </p>
                <p className="design-38" data-node-id="25:7541">{`        PaintInvalidRect(h);`}</p>
              </div>
              <div className="design-30" data-node-id="25:7542" data-name="Text stack">
                <p className="design-31" data-node-id="25:7543">
                  8
                </p>
                <p className="design-38" data-node-id="25:7544">{`        return 0;`}</p>
              </div>
              <div className="design-30" data-node-id="25:7545" data-name="Text stack">
                <p className="design-31" data-node-id="25:7546">
                  9
                </p>
                <p className="design-38" data-node-id="25:7547">{`    }`}</p>
              </div>
              <div className="design-30" data-node-id="25:7548" data-name="Text stack">
                <p className="design-31" data-node-id="25:7549">
                  10
                </p>
                <p className="design-37" data-node-id="25:7550">{`}`}</p>
              </div>
            </div>
          </div>
          <div className="design-40" data-node-id="25:7551" data-name="Statusbar">
            <p className="design-41" data-node-id="25:7552">
              Ln 7, Col 9
            </p>
            <p className="design-41" data-node-id="25:7553">
              UTF-8
            </p>
            <p className="design-41" data-node-id="25:7554">
              C
            </p>
            <p className="design-41" data-node-id="25:7555">
              메모리 38 MB
            </p>
          </div>
        </div>
      </div>
      <div className="design-42" data-node-id="25:7556" data-name="Stats">
        <div className="design-43" data-node-id="25:7557" data-name="Text stack">
          <p className="design-44" data-node-id="25:7558">{`< 100 MB`}</p>
          <p className="design-45" data-node-id="25:7559">
            상시 메모리 사용량
          </p>
        </div>
        <div className="design-43" data-node-id="25:7560" data-name="Text stack">
          <p className="design-44" data-node-id="25:7561">{`< 0.3 s`}</p>
          <p className="design-45" data-node-id="25:7562">
            콜드 스타트
          </p>
        </div>
        <div className="design-43" data-node-id="25:7563" data-name="Text stack">
          <p className="design-44" data-node-id="25:7564">
            0
          </p>
          <p className="design-45" data-node-id="25:7565">
            웹뷰 · 런타임 의존성
          </p>
        </div>
        <div className="design-43" data-node-id="25:7566" data-name="Text stack">
          <p className="design-44" data-node-id="25:7567">
            4.2 MB
          </p>
          <p className="design-45" data-node-id="25:7568">
            설치 파일 크기
          </p>
        </div>
      </div>
      <div className="design-46" data-node-id="25:7569" data-name="Features">
        <div className="design-47" data-node-id="25:7570" data-name="Text stack">
          <p className="design-48" data-node-id="25:7571">
            01 · 설계 원칙
          </p>
          <p className="design-49" data-node-id="25:7572">
            필요한 것만 그립니다
          </p>
        </div>
        <div className="design-50" data-node-id="25:7573" data-name="Grid">
          <div className="design-51" data-node-id="25:7574" data-name="Card 1">
            <div className="design-52" data-node-id="25:7575" data-name="Text wrap">
              <p className="design-53" data-node-id="25:7576">
                01
              </p>
            </div>
            <p className="design-54" data-node-id="25:7577">
              네이티브 우선
            </p>
            <p className="design-55" data-node-id="25:7578">
              모든 창은 Win32 + comctl32 v6. 웹뷰·스크립트 런타임 없음.
            </p>
          </div>
          <div className="design-51" data-node-id="25:7579" data-name="Card 2">
            <div className="design-52" data-node-id="25:7580" data-name="Text wrap">
              <p className="design-53" data-node-id="25:7581">
                02
              </p>
            </div>
            <p className="design-54" data-node-id="25:7582">
              필요한 것만 그립니다
            </p>
            <p className="design-55" data-node-id="25:7583">
              미니맵·애니메이션·그림자 없음. 무효화된 영역만 다시 그림.
            </p>
          </div>
          <div className="design-51" data-node-id="25:7584" data-name="Card 3">
            <div className="design-52" data-node-id="25:7585" data-name="Text wrap">
              <p className="design-53" data-node-id="25:7586">
                03
              </p>
            </div>
            <p className="design-54" data-node-id="25:7587">
              텍스트는 Scintilla 하나
            </p>
            <p className="design-55" data-node-id="25:7588">
              편집기·출력·터미널이 같은 컨트롤. 탭은 문서만 바꾸고 창은 공유.
            </p>
          </div>
          <div className="design-51" data-node-id="25:7589" data-name="Card 4">
            <div className="design-52" data-node-id="25:7590" data-name="Text wrap">
              <p className="design-53" data-node-id="25:7591">
                04
              </p>
            </div>
            <p className="design-54" data-node-id="25:7592">
              설정은 JSON 파일
            </p>
            <p className="design-55" data-node-id="25:7593">
              settings.json · theme.json이 원본. 설정 대화상자는 편집기일 뿐.
            </p>
          </div>
        </div>
      </div>
      <div className="design-46" data-node-id="25:7594" data-name="Platforms">
        <div className="design-47" data-node-id="25:7595" data-name="Text stack">
          <p className="design-48" data-node-id="25:7596">
            02 · 설치 방식
          </p>
          <p className="design-49" data-node-id="25:7597">
            Windows · macOS · 포터블, 편한 쪽으로
          </p>
        </div>
        <div className="design-56" data-node-id="25:7598" data-name="Platform Cards">
          <div className="design-57" data-node-id="25:7599" data-name="Card / WINDOWS">
            <div className="design-58" data-node-id="25:7600" data-name="Text wrap">
              <p className="design-59" data-node-id="25:7601">
                WINDOWS
              </p>
            </div>
            <p className="design-60" data-node-id="25:7602">
              Windows 설치 파일 (.exe)
            </p>
            <p className="design-61" data-node-id="25:7603">
              설치 마법사가 안내합니다. 가장 간단한 방법입니다.
            </p>
            <div className="design-62" data-node-id="25:7604" data-name="Stack">
              <div className="design-63" data-node-id="25:7605" data-name="Text stack">
                <p className="design-64" data-node-id="25:7606">
                  ✓
                </p>
                <p className="design-65" data-node-id="25:7607">
                  설치 파일 4.2 MB
                </p>
              </div>
              <div className="design-63" data-node-id="25:7608" data-name="Text stack">
                <p className="design-64" data-node-id="25:7609">
                  ✓
                </p>
                <p className="design-65" data-node-id="25:7610">
                  시작 메뉴 · 제거 지원
                </p>
              </div>
              <div className="design-63" data-node-id="25:7611" data-name="Text stack">
                <p className="design-64" data-node-id="25:7612">
                  ✓
                </p>
                <p className="design-65" data-node-id="25:7613">
                  Windows 10 / 11 (64비트)
                </p>
              </div>
            </div>
            <a href="/download/complete" className="design-66" data-node-id="25:7614" data-name="Button">
              <p className="design-67" data-node-id="25:7615">
                Windows용 다운로드
              </p>
            </a>
          </div>
          <div className="design-68" data-node-id="25:7616" data-name="Card / MACOS">
            <div className="design-69" data-node-id="25:7617" data-name="Text wrap">
              <p className="design-70" data-node-id="25:7618">
                MACOS
              </p>
            </div>
            <p className="design-60" data-node-id="25:7619">
              macOS 설치 파일 (.pkg)
            </p>
            <p className="design-61" data-node-id="25:7620">
              macOS 설치 안내를 따라가면 끝납니다.
            </p>
            <div className="design-62" data-node-id="25:7621" data-name="Stack">
              <div className="design-63" data-node-id="25:7622" data-name="Text stack">
                <p className="design-64" data-node-id="25:7623">
                  ✓
                </p>
                <p className="design-65" data-node-id="25:7624">
                  Axyne-macOS.pkg
                </p>
              </div>
              <div className="design-63" data-node-id="25:7625" data-name="Text stack">
                <p className="design-64" data-node-id="25:7626">
                  ✓
                </p>
                <p className="design-65" data-node-id="25:7627">
                  응용 프로그램 폴더에 설치
                </p>
              </div>
              <div className="design-63" data-node-id="25:7628" data-name="Text stack">
                <p className="design-64" data-node-id="25:7629">
                  ✓
                </p>
                <p className="design-65" data-node-id="25:7630">
                  macOS 13 이상 (Apple Silicon · Intel)
                </p>
              </div>
            </div>
            <a href="/download/complete/macos" className="design-71" data-node-id="25:7631" data-name="Button">
              <p className="design-72" data-node-id="25:7632">
                macOS용 다운로드
              </p>
            </a>
          </div>
          <div className="design-68" data-node-id="25:7633" data-name="Card / PORTABLE">
            <div className="design-69" data-node-id="25:7634" data-name="Text wrap">
              <p className="design-70" data-node-id="25:7635">
                PORTABLE
              </p>
            </div>
            <p className="design-60" data-node-id="25:7636">
              포터블 ZIP
            </p>
            <p className="design-61" data-node-id="25:7637">
              설치 없이 폴더째 실행합니다. 지우면 제거가 끝납니다.
            </p>
            <div className="design-62" data-node-id="25:7638" data-name="Stack">
              <div className="design-63" data-node-id="25:7639" data-name="Text stack">
                <p className="design-64" data-node-id="25:7640">
                  ✓
                </p>
                <p className="design-65" data-node-id="25:7641">
                  레지스트리를 바꾸지 않음
                </p>
              </div>
              <div className="design-63" data-node-id="25:7642" data-name="Text stack">
                <p className="design-64" data-node-id="25:7643">
                  ✓
                </p>
                <p className="design-65" data-node-id="25:7644">
                  USB 등 어디서나 실행
                </p>
              </div>
              <div className="design-63" data-node-id="25:7645" data-name="Text stack">
                <p className="design-64" data-node-id="25:7646">
                  ✓
                </p>
                <p className="design-65" data-node-id="25:7647">
                  상시 메모리 100 MB 이하
                </p>
              </div>
            </div>
            <a href="/download?platform=portable" className="design-71" data-node-id="25:7648" data-name="Button">
              <p className="design-72" data-node-id="25:7649">
                포터블 ZIP 다운로드
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="design-73" data-node-id="25:7650" data-name="Memory Budget">
        <div className="design-47" data-node-id="25:7651" data-name="Text stack">
          <p className="design-48" data-node-id="25:7652">
            03 · 메모리 예산
          </p>
          <p className="design-49" data-node-id="25:7653">
            다른 IDE 한 창 분량이면 충분합니다
          </p>
        </div>
        <div className="design-74" data-node-id="25:7654" data-name="Bars">
          <div className="design-75" data-node-id="25:7655" data-name="Row">
            <p className="design-76" data-node-id="25:7656">
              Axyne
            </p>
            <div className="design-77" data-node-id="25:7657" data-name="Container">
              <div className="design-78" data-node-id="25:7658" data-name="Shape" />
            </div>
            <p className="design-79" data-node-id="25:7659">{`< 100 MB`}</p>
          </div>
          <div className="design-75" data-node-id="25:7660" data-name="Row">
            <p className="design-76" data-node-id="25:7661">
              Electron 기반 편집기
            </p>
            <div className="design-77" data-node-id="25:7662" data-name="Container">
              <div className="design-80" data-node-id="25:7663" data-name="Shape" />
            </div>
            <p className="design-81" data-node-id="25:7664">
              ~ 700 MB
            </p>
          </div>
          <div className="design-75" data-node-id="25:7665" data-name="Row">
            <p className="design-76" data-node-id="25:7666">
              풀스택 IDE
            </p>
            <div className="design-77" data-node-id="25:7667" data-name="Container">
              <div className="design-82" data-node-id="25:7668" data-name="Shape" />
            </div>
            <p className="design-81" data-node-id="25:7669">
              ~ 1 GB+
            </p>
          </div>
        </div>
        <p className="design-22" data-node-id="25:7670">
          * Windows 네이티브 기준 · 빈 프로젝트에 파일 20개를 열었을 때의 작업 집합(Working Set) 예시 수치입니다.
        </p>
      </div>
      <div className="design-83" data-node-id="25:7671" data-name="Download CTA">
        <p className="design-84" data-node-id="25:7672">
          지금 바로 켜 보세요
        </p>
        <p className="design-85" data-node-id="25:7673">
          Windows, macOS, 포터블 ZIP 중 편한 방식을 고르세요.
        </p>
        <div className="design-86" data-node-id="25:7674" data-name="Row">
          <a href="/download/complete" className="design-87" data-node-id="25:7675" data-name="Button">
            <p className="design-13" data-node-id="I25:7675;20:7">
              Windows (.exe) 다운로드
            </p>
          </a>
          <a href="/download/complete/macos" className="design-88" data-node-id="25:7676" data-name="Button">
            <p className="design-15" data-node-id="I25:7676;20:13">
              macOS (.pkg) 다운로드
            </p>
          </a>
          <a href="/download?platform=portable" className="design-14" data-node-id="25:7677" data-name="Button">
            <p className="design-89" data-node-id="I25:7677;20:13">
              포터블 ZIP
            </p>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
