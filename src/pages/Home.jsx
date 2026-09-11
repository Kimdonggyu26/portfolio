import { Link } from 'react-router-dom'
import ProjectEntry from '../components/ProjectEntry'
import SectionLabel from '../components/SectionLabel'
import { projects } from '../data/projects'

export default function Home() {
  return (
    <div className="page-enter">
      <section className="hero frame">
        <div className="hero-kicker">
          <span>Portfolio / 2026</span>
          <span>Backend Developer</span>
        </div>
        <h1>
          KIM DONGGYU<span className="accent">.</span>
        </h1>
        <div className="hero-bottom">
          <p className="hero-role">Java · Spring<br />Backend Developer</p>
        </div>
      </section>

      <section className="about frame section-space">
        <SectionLabel number="01">About</SectionLabel>
        <div className="about-copy">
          <p className="lead">서비스가 화면에서 데이터베이스까지 어떻게 이어지는지 이해하고, 실제 문제를 끝까지 추적하는 백엔드 개발자를 지향합니다.</p>
          <div className="about-detail">
            <p>인증, 데이터 관계, 외부 API와 배포 환경을 연결해 설명할 수 있는 코드를 만들고 있습니다.</p>
          </div>
        </div>
      </section>

      <section className="selected-work frame section-space">
        <SectionLabel number="02">Selected work</SectionLabel>
        <ProjectEntry project={projects[0]} compact />
        <div className="section-end-link"><Link className="text-link" to="/projects">All projects <span>→</span></Link></div>
      </section>
    </div>
  )
}
