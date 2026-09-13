export const projects = [
  { number: '01', slug: 'investome', title: 'INVESTOME', category: 'Personal Project', summary: '외부 금융 데이터와 자체 서비스 데이터를 한 흐름으로 연결한 개인 투자 정보 플랫폼', year: '2026', period: '2026.03 — 2026.08', role: 'Planning · Design · Frontend · Backend · Deployment', stack: ['React', 'Spring Boot', 'PostgreSQL', 'Vercel Functions'], status: 'completed', links: { live: 'https://investome.vercel.app/', github: 'https://github.com/Kimdonggyu26/investome' } },
  { number: '02', slug: 'cruella', title: 'CRUELLA', category: 'Academy Team Project', summary: '구디아카데미 교육과정에서 진행한 팀 프로젝트입니다. 상세 내용은 실제 코드 확인 후 추가할 예정입니다.', year: 'TBD', period: 'TBD', role: 'TBD', stack: [], status: 'placeholder', links: {} },
  { number: '03', slug: 'mvp', title: 'MVP', category: 'Academy Project', summary: '구디아카데미 교육과정에서 진행한 프로젝트입니다. 상세 내용은 실제 코드 확인 후 추가할 예정입니다.', year: 'TBD', period: 'TBD', role: 'TBD', stack: [], status: 'placeholder', links: {} },
  { number: '04', slug: 'myvitaday', title: 'myVitaDay', category: 'Personal Project', summary: '현재 개발 중인 개인 프로젝트입니다. 상세 내용은 추후 추가할 예정입니다.', year: 'IN PROGRESS', period: 'TBD', role: 'TBD', stack: [], status: 'in-progress', statusLabel: 'IN PROGRESS', links: {} },
]

export const investomeFeatures = [
  { index: '01', title: 'Market Dashboard', body: '주식·가상자산의 현재가와 등락률, 환율, 금융 뉴스를 한 화면에서 탐색합니다.', image: 'dashboard.webp', recommendation: '16:9 desktop screenshot' },
  { index: '02', title: 'Portfolio Management', body: '인증된 사용자의 보유 종목과 목표 금액을 저장하고 본인의 데이터만 조회합니다.', image: 'portfolio.webp', recommendation: 'portfolio summary + holdings' },
  { index: '03', title: 'Community', body: '게시글, 댓글, 추천을 제공하며 연관 데이터의 삭제 순서와 무결성을 관리합니다.', image: 'community.webp', recommendation: 'post detail + comments' },
]

