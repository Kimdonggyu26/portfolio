import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header frame">
      <NavLink className="wordmark" to="/" aria-label="홈으로 이동">KDG<span className="wordmark-dot">.</span></NavLink>
      <nav className="nav" aria-label="주요 메뉴">
        <a href="/#projects">Projects</a>
        <a href="/#skills">Skills</a>
        <a href="/#experience">Experience</a>
        <a href="/#contact">Contact</a>
      </nav>
      <Link className="header-role" to="/">Backend · Java</Link>
    </header>
  )
}
