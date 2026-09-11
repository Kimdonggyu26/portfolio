# Kim Donggyu — Developer Portfolio

React + Vite로 만든 독립 정적 개발자 포트폴리오입니다. Investome, Cruella, MVP 어느 저장소에도 포함하지 않고 별도 저장소와 Vercel 프로젝트로 관리합니다.

## 실행

```bash
npm install
npm run dev
npm run build
```

## 프로젝트 구조

```text
portfolio/
├─ public/images/projects/
│  ├─ investome/
│  ├─ cruella/
│  └─ mvp/
├─ src/
│  ├─ components/       # 공통 editorial UI
│  ├─ data/projects.js  # 세 프로젝트의 목록 데이터
│  ├─ pages/            # HOME, PROJECTS, 상세 페이지
│  ├─ styles/global.css
│  ├─ App.jsx           # 라우팅
│  └─ main.jsx
├─ package.json
└─ vite.config.js
```

## 디자인 시스템

- **Visual thesis:** 백엔드 개발자의 작업을 편집한 흑백 기술 저널
- **Colors:** Paper #F2F0EA, Ink #121212, Signal #DF4A2F
- **Typography:** Manrope/DM Sans + Noto Sans KR
- **Layout:** 최대 1440px frame, 비대칭 editorial grid, 얇은 divider
- **Motion:** 진입 fade, 링크 underline, 프로젝트 이미지의 미세한 scale
- **Responsive:** 900px과 600px breakpoint

## 구현 페이지

| 경로 | 페이지 | 상태 |
| --- | --- | --- |
| / | HOME | Investome 대표 노출 |
| /projects | PROJECTS | Investome, Cruella, MVP editorial 목록 |
| /projects/investome | INVESTOME DETAIL | 실제 코드 기반 상세 내용 |
| /projects/cruella | CRUELLA DETAIL | 코드 확인 전 placeholder |
| /projects/mvp | MVP DETAIL | 코드 확인 전 placeholder |

Investome는 전체 폭과 가장 큰 타이포그래피를 사용한 대표 프로젝트입니다. Cruella와 MVP도 작은 카드가 아니라 독립된 큰 프로젝트 섹션으로 표시하지만, 확인되지 않은 정보는 쓰지 않았습니다.

## 교체해야 하는 이미지

### Investome

| 파일명 | 권장 이미지 |
| --- | --- |
| cover.webp | PROJECTS 대표 화면, 16:9 |
| hero.webp | 상세 페이지 key visual, 16:9 |
| dashboard.webp | 티커·랭킹·환율·뉴스 |
| portfolio.webp | 포트폴리오 요약과 보유 종목 |
| community.webp | 게시글 상세, 댓글과 추천 |

### Cruella / MVP

각 프로젝트 정보를 제공받은 뒤 아래 폴더에 cover.webp, hero.webp와 기능별 이미지를 추가합니다.

- public/images/projects/cruella/
- public/images/projects/mvp/

## 아직 placeholder인 콘텐츠

- HOME의 자기소개 한 줄
- 경력·학력·이메일·블로그·이력서
- Investome 실제 캡처
- Cruella와 MVP의 기간, 역할, 기술, 기능, 트러블슈팅, 회고

프로젝트 목록은 src/data/projects.js에서 관리하고 ProjectEntry가 공통 레이아웃을 렌더링합니다. Cruella와 MVP는 ProjectPlaceholder를 공유하며, 실제 코드를 제공받으면 각각의 상세 페이지로 교체합니다.

