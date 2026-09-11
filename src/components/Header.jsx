import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header frame">
      <NavLink className="wordmark" to="/" aria-label="홈으로 이동">
        KDG<span className="wordmark-dot">.</span>
      </NavLink>
      <nav className="nav" aria-label="주요 메뉴">
        <NavLink to="/" end>Index</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </nav>
      <span className="header-meta">Seoul · KR</span>
    </header>
  )
}
