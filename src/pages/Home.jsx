import { Link } from 'react-router-dom'
import ProjectEntry from '../components/ProjectEntry'
import SectionLabel from '../components/SectionLabel'
import { projects } from '../data/projects'

const profileItems = [
  ['Name', '김동규'],
  ['Birth', 'TBD'],
  ['Location', 'TBD'],
  ['Phone', 'TBD'],
  ['Email', 'TBD'],
  ['GitHub', 'Kimdonggyu26'],
]

const skills = [
  ['Backend', ['Java', 'Spring Boot', 'Spring Data JPA', 'Spring Security', 'JWT']],
  ['Database', ['PostgreSQL']],
  ['Frontend', ['React', 'Vite']],
  ['Infra', ['Vercel', 'Docker']],
]

const viewpoints = [
  ['01', 'Request / Response', '화면의 요청이 API와 서비스 계층을 거쳐 데이터베이스까지 이어지는 흐름을 이해합니다.'],
  ['02', 'Data & Relations', '데이터 관계와 제약 조건을 살피고, 서비스 동작과 데이터 무결성을 함께 고려합니다.'],
  ['03', 'Problem Tracing', '로컬과 배포 환경의 차이를 확인하며 문제의 원인을 끝까지 추적하고 기록합니다.'],
]

export default function Home() {
  return (
    <div className="page-enter home-page">
      <section className="home-intro frame">
        <SectionLabel number="01">Profile / Intro</SectionLabel>
        <div className="home-intro-grid">
          <div className="home-intro-copy">
            <p className="home-role">Backend Developer</p>
            <h1>김동규<span className="accent">.</span></h1>
            <p className="home-summary">Java와 Spring Boot를 중심으로 웹 서비스의 API, 데이터 흐름, 인증과 배포를 구현해왔습니다.</p>
            <div className="home-links">
              <Link className="text-link" to="/projects">Projects <span>→</span></Link>
              <a className="text-link" href="https://github.com/Kimdonggyu26" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            </div>
          </div>
          <figure className="profile-photo">
            <div className="profile-photo-placeholder"><span>PROFILE PHOTO</span><small>/images/profile/profile.jpg</small></div>
            <img src="/images/profile/profile.jpg" alt="김동규 프로필" onError={(event) => { event.currentTarget.hidden = true }} />
          </figure>
        </div>
        <dl className="profile-info">
          {profileItems.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{label === 'GitHub' ? <a href="https://github.com/Kimdonggyu26" target="_blank" rel="noreferrer">{value} ↗</a> : value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="about home-section frame">
        <SectionLabel number="02">About</SectionLabel>
        <div className="viewpoint-list">
          {viewpoints.map(([number, title, body]) => (
            <article className="viewpoint-row" key={title}>
              <span>{number}</span>
              <h2>{title}</h2>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="skills home-section frame">
        <SectionLabel number="03">Skills</SectionLabel>
        <div className="skills-grid">
          {skills.map(([group, items]) => (
            <div className="skill-group" key={group}>
              <h2>{group}</h2>
              <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <section className="selected-work home-section frame">
        <SectionLabel number="04">Selected Work</SectionLabel>
        <ProjectEntry project={projects[0]} compact />
        <div className="section-end-link"><Link className="text-link" to="/projects">All projects <span>→</span></Link></div>
      </section>

      <section className="experience home-section frame">
        <SectionLabel number="05">Experience</SectionLabel>
        <div className="pending-row"><p>Experience details</p><span>TBD</span></div>
      </section>

      <section className="contact home-section frame">
        <SectionLabel number="06">Contact</SectionLabel>
        <div className="contact-grid">
          <div><span>Email</span><p>TBD</p></div>
          <div><span>GitHub</span><a className="text-link" href="https://github.com/Kimdonggyu26" target="_blank" rel="noreferrer">Kimdonggyu26 <b>↗</b></a></div>
        </div>
      </section>
    </div>
  )
}
