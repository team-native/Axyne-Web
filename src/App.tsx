import logoMark from "./assets/logo-mark.png";

const features = [
  ["01", "네이티브 우선", "모든 창은 Win32 + comctl32 v6. 웹뷰·스크립트 런타임 없음."],
  ["02", "필요한 것만 그린다", "미니맵·애니메이션·그림자 없음. 무효화된 영역만 다시 그림."],
  ["03", "텍스트는 Scintilla 하나", "편집기·출력·터미널이 같은 컨트롤. 탭은 문서만 바꾸고 창은 공유."],
  ["04", "설정은 JSON 파일", "settings.json · theme.json이 원본. 설정 대화상자는 편집기일 뿐."],
];

const platforms = [
  {
    tone: "accent",
    label: "WINDOWS",
    title: "Windows 설치 파일 (.exe)",
    body: "설치 마법사가 안내합니다. 가장 간단한 방법입니다.",
    bullets: ["설치 파일 4.2 MB", "시작 메뉴 · 제거 지원", "Windows 10 / 11 (64비트)"],
    button: "Windows용 다운로드",
  },
  {
    tone: "plain",
    label: "MACOS",
    title: "macOS 설치 파일 (.pkg)",
    body: "macOS 설치 안내를 따라가면 끝납니다.",
    bullets: ["Axyne-macOS.pkg", "응용 프로그램 폴더에 설치", "macOS 13 이상 (Apple Silicon · Intel)"],
    button: "macOS용 다운로드",
  },
  {
    tone: "plain",
    label: "PORTABLE",
    title: "포터블 ZIP",
    body: "설치 없이 폴더째 실행합니다. 지우면 제거가 끝납니다.",
    bullets: ["레지스트리를 바꾸지 않음", "USB 등 어디서나 실행", "상시 메모리 100 MB 이하"],
    button: "포터블 ZIP 다운로드",
  },
];

const stats = [
  ["< 100 MB", "상시 메모리 사용량"],
  ["< 0.3 s", "콜드 스타트"],
  ["0", "웹뷰 · 런타임 의존성"],
  ["4.2 MB", "설치 파일 크기"],
];

const memoryRows = [
  { label: "Axyne", value: "< 100 MB", width: "9.5%", active: true },
  { label: "Electron 기반 편집기", value: "~ 700 MB", width: "68.7%", active: false },
  { label: "풀스택 IDE", value: "~ 1 GB+", width: "99.3%", active: false },
];

const codeLines = [
  ["1", "#include <windows.h>", "keyword"],
  ["2", " "],
  ["3", "// 무효화된 영역만 다시 그린다", "comment"],
  ["4", "LRESULT CALLBACK WndProc(HWND h, UINT m, ...) {", "function"],
  ["5", "    switch (m) {"],
  ["6", "    case WM_PAINT:", "keyword"],
  ["7", "        PaintInvalidRect(h);"],
  ["8", "        return 0;"],
  ["9", "    }"],
  ["10", "}", "function"],
];

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Axyne home">
      <img src={logoMark} alt="" />
      <span>Axyne</span>
    </a>
  );
}

function Button({ children, variant = "primary" }: { children: React.ReactNode; variant?: "primary" | "secondary" }) {
  return (
    <a className={`button ${variant}`} href="#download">
      {children}
    </a>
  );
}

function Header() {
  return (
    <header className="nav">
      <Logo />
      <nav aria-label="Primary navigation">
        <a href="#features">특징</a>
        <a href="#memory">메모리 예산</a>
        <a href="#docs">문서</a>
        <a href="#download">다운로드</a>
      </nav>
      <Button>무료 다운로드</Button>
    </header>
  );
}

function ProductShot() {
  return (
    <section className="product-shot" aria-label="Axyne editor preview">
      <div className="ide-window">
        <div className="titlebar">
          <span className="window-dot red" />
          <span className="window-dot yellow" />
          <span className="window-dot green" />
          <span className="title">main.c — Axyne</span>
        </div>
        <div className="ide-body">
          <aside className="sidebar">
            <span className="explorer">EXPLORER</span>
            <span>▾ src</span>
            <strong>main.c</strong>
            <span>editor.c</span>
            <span>theme.c</span>
            <span>▸ include</span>
            <span>settings.json</span>
          </aside>
          <pre className="editor" aria-label="Example C source">
            {codeLines.map(([line, value, tone]) => (
              <span className="code-line" key={line}>
                <span className="line-number">{line}</span>
                <code className={tone ?? ""}>{value}</code>
              </span>
            ))}
          </pre>
        </div>
        <div className="statusbar">
          <span>Ln 7, Col 9</span>
          <span>UTF-8</span>
          <span>C</span>
          <span>메모리 38 MB</span>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-title">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}

function App() {
  return (
    <main id="top">
      <Header />

      <section className="hero">
        <div className="badge">v0.1 · Windows 10/11 · macOS (.pkg)</div>
        <h1>
          메모리 100 MB 이하로
          <br />
          돌아가는 Win32 IDE
        </h1>
        <p>웹뷰도, 스크립트 런타임도 없습니다. C, Win32 API, Scintilla만으로 만든 가볍고 즉시 켜지는 코드 편집기.</p>
        <div className="hero-actions">
          <Button>Windows용 다운로드</Button>
          <Button variant="secondary">macOS용 다운로드</Button>
        </div>
        <small>Windows 설치 파일 4.2 MB · macOS .pkg · 포터블 ZIP</small>
      </section>

      <ProductShot />

      <section className="stats">
        {stats.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="section" id="features">
        <SectionTitle eyebrow="01 · 설계 원칙" title="필요한 것만 그립니다" />
        <div className="feature-grid">
          {features.map(([index, title, body]) => (
            <article className="feature-card" key={index}>
              <span>{index}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="docs">
        <SectionTitle eyebrow="02 · 설치 방식" title="Windows · macOS · 포터블, 편한 쪽으로" />
        <div className="platform-grid">
          {platforms.map((platform) => (
            <article className={`platform-card ${platform.tone}`} key={platform.label}>
              <span className="chip">{platform.label}</span>
              <h3>{platform.title}</h3>
              <p>{platform.body}</p>
              <ul>
                {platform.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <Button variant={platform.tone === "accent" ? "primary" : "secondary"}>{platform.button}</Button>
            </article>
          ))}
        </div>
      </section>

      <section className="memory" id="memory">
        <SectionTitle eyebrow="03 · 메모리 예산" title="다른 IDE 한 창 분량이면 충분합니다" />
        <div className="bars">
          {memoryRows.map(({ label, value, width, active }) => (
            <div className="bar-row" key={label}>
              <span>{label}</span>
              <div className="bar-track">
                <i className={active ? "active" : ""} style={{ width }} />
              </div>
              <strong className={active ? "active" : ""}>{value}</strong>
            </div>
          ))}
        </div>
        <small>* Windows 네이티브 기준 · 빈 프로젝트에 파일 20개를 열었을 때의 작업 집합(Working Set) 예시 수치입니다.</small>
      </section>

      <section className="download" id="download">
        <h2>지금 바로 켜 보세요</h2>
        <p>Windows, macOS, 포터블 ZIP 중 편한 방식을 고르세요.</p>
        <div className="download-actions">
          <Button>Windows (.exe) 다운로드</Button>
          <Button variant="secondary">macOS (.pkg) 다운로드</Button>
          <Button variant="secondary">포터블 ZIP</Button>
        </div>
      </section>

      <footer>
        <span>© 2026 Axyne</span>
        <span>C · Win32 API · Scintilla</span>
      </footer>
    </main>
  );
}

export default App;
