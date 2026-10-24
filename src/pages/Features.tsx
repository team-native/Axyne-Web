import { Link } from "react-router-dom";
import { Header, Footer } from "../components";

export default function Features() {
  return (
    <div className="design-1" data-node-id="25:7682" data-name="Page / 특징 / Light">
      <Header />
      <div className="design-90" data-node-id="25:7693" data-name="Page Header">
        <p className="design-91" data-node-id="25:7694">
          FEATURES
        </p>
        <h1 className="design-92" data-node-id="25:7695">
          필요한 것만, 정확하게
        </h1>
        <p className="design-93" data-node-id="25:7696">
          Windows에서 가장 가볍게 동작하는 코드 편집기. 기능을 늘리는 대신 무겁게 만드는 것들을 덜어냈습니다.
        </p>
      </div>
      <div className="design-94" data-node-id="25:7697" data-name="Feature Grid">
        <div className="design-50" data-node-id="25:7698" data-name="Row 1">
          <div className="design-95" data-node-id="25:7699" data-name="Card / 네이티브 우선">
            <div className="design-96" data-node-id="25:7700" data-name="Text wrap">
              <p className="design-97" data-node-id="25:7701">
                WIN32
              </p>
            </div>
            <p className="design-98" data-node-id="25:7702">
              네이티브 우선
            </p>
            <p className="design-61" data-node-id="25:7703">
              모든 창은 Win32 + comctl32 v6로 그립니다. 웹뷰·스크립트 런타임이 없어 시작이 즉각적입니다.
            </p>
          </div>
          <div className="design-95" data-node-id="25:7704" data-name="Card / 텍스트는 Scintilla 하나">
            <div className="design-96" data-node-id="25:7705" data-name="Text wrap">
              <p className="design-97" data-node-id="25:7706">
                SCINTILLA
              </p>
            </div>
            <p className="design-98" data-node-id="25:7707">
              텍스트는 Scintilla 하나
            </p>
            <p className="design-61" data-node-id="25:7708">
              편집기·출력·터미널이 같은 컨트롤. 탭은 문서만 바꾸고 창은 공유합니다.
            </p>
          </div>
          <div className="design-95" data-node-id="25:7709" data-name="Card / 필요한 것만 그립니다">
            <div className="design-96" data-node-id="25:7710" data-name="Text wrap">
              <p className="design-97" data-node-id="25:7711">
                RENDER
              </p>
            </div>
            <p className="design-98" data-node-id="25:7712">
              필요한 것만 그립니다
            </p>
            <p className="design-61" data-node-id="25:7713">
              미니맵·애니메이션·그림자 없음. 무효화된 영역만 다시 그려 CPU와 메모리를 아낍니다.
            </p>
          </div>
        </div>
        <div className="design-50" data-node-id="25:7714" data-name="Row 2">
          <div className="design-95" data-node-id="25:7715" data-name="Card / 설정은 JSON 파일">
            <div className="design-96" data-node-id="25:7716" data-name="Text wrap">
              <p className="design-97" data-node-id="25:7717">
                JSON
              </p>
            </div>
            <p className="design-98" data-node-id="25:7718">
              설정은 JSON 파일
            </p>
            <p className="design-61" data-node-id="25:7719">
              settings.json · theme.json이 원본입니다. 설정 화면은 이 파일을 여는 편집기일 뿐입니다.
            </p>
          </div>
          <div className="design-95" data-node-id="25:7720" data-name="Card / 가벼운 설치">
            <div className="design-96" data-node-id="25:7721" data-name="Text wrap">
              <p className="design-97" data-node-id="25:7722">
                INSTALL
              </p>
            </div>
            <p className="design-98" data-node-id="25:7723">
              가벼운 설치
            </p>
            <p className="design-61" data-node-id="25:7724">
              설치 파일은 4.2 MB. 포터블 ZIP은 폴더째 실행하고, 지우면 끝납니다.
            </p>
          </div>
          <div className="design-95" data-node-id="25:7725" data-name="Card / 메모리 상한 고정">
            <div className="design-96" data-node-id="25:7726" data-name="Text wrap">
              <p className="design-97" data-node-id="25:7727">
                100 MB
              </p>
            </div>
            <p className="design-98" data-node-id="25:7728">
              메모리 상한 고정
            </p>
            <p className="design-61" data-node-id="25:7729">
              터미널 스크롤백 줄 수를 제한하고 작업 집합을 상태 표시줄에 실시간으로 보여줍니다.
            </p>
          </div>
        </div>
      </div>
      <section className="practical-features" data-name="Practical Features" aria-labelledby="practical-features-title">
        <header>
          <h2 id="practical-features-title">작업에 필요한 기본 기능</h2>
          <p>파일을 편집하고, 필요한 곳을 찾고, 실행 결과를 확인합니다.</p>
        </header>
        <article className="feature-detail">
          <span className="feature-detail-number" aria-hidden="true">01</span>
          <h3>문서별로 이어지는 편집</h3>
          <div>
            <p>탭을 바꿔도 각 문서의 실행 취소 기록은 따로 보관됩니다. 여러 파일을 오가며 작업해도 편집 기록이 섞이지 않습니다.</p>
            <Link to="/docs/editor">편집기와 탭</Link>
          </div>
        </article>
        <article className="feature-detail">
          <span className="feature-detail-number" aria-hidden="true">02</span>
          <h3>한곳에서 찾는 파일과 명령</h3>
          <div>
            <p>명령 검색에서 파일과 명령을 찾고 원하는 줄로 이동합니다. 파일 안의 텍스트 검색과 바꾸기도 지원합니다.</p>
            <Link to="/docs/search">검색과 이동</Link>
          </div>
        </article>
        <article className="feature-detail">
          <span className="feature-detail-number" aria-hidden="true">03</span>
          <h3>편집기 안에서 확인하는 결과</h3>
          <div>
            <p>터미널과 출력 패널에서 명령 실행 결과, 빌드 로그를 확인합니다. 버퍼의 줄 수에 상한을 두어 로그가 계속 쌓이는 것을 제한합니다.</p>
            <Link to="/docs/terminal">터미널·출력</Link>
          </div>
        </article>
      </section>
      <Footer />
    </div>
  );
}
