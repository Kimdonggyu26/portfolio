import { Link } from 'react-router-dom'
import ProjectEntry from '../components/ProjectEntry'
import SectionLabel from '../components/SectionLabel'
import { projects } from '../data/projects'
import { certifications, experience, focusAreas, profile, skills } from '../data/profile'

const profileItems = [
  ['Name', profile.name],
  ['Position', profile.position],
  ['Career', profile.career],
  ['Location', profile.location],
  ['Email', profile.email],
  ['GitHub', profile.githubLabel],
]

export default function Home() {
  return (
    <div className="page-enter home-page">
      <section className="profile-hero" id="profile">
        <div className="frame profile-hero-inner">
          <div className="profile-copy">
            <div className="profile-title">
              <p>{profile.position}</p>
              <span>{profile.englishName}</span>
            </div>
            <h1>{profile.name}<span className="accent">.</span></h1>
            <p className="profile-summary">{profile.summary}</p>
            <div className="profile-actions">
              <Link className="primary-link" to="/projects">Projects <span>→</span></Link>
              <a className="plain-link" href={profile.githubUrl} target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            </div>
            <dl className="profile-quickfacts">
              <div><dt>Status</dt><dd>{profile.status}</dd></div>
              <div><dt>Focus</dt><dd>{focusAreas.join(' · ')}</dd></div>
              <div><dt>Main Stack</dt><dd>Java · Spring Boot</dd></div>
            </dl>
          </div>

          <figure className="profile-photo">
            <div className="profile-photo-placeholder"><span>PROFILE PHOTO</span><small>/images/profile/profile.jpg</small></div>
            <img src="/images/profile/profile.jpg" alt="김동규 프로필" onError={(event) => { event.currentTarget.hidden = true }} />
          </figure>
        </div>

        <div className="frame basic-profile">
          <p className="basic-profile-title">Profile Info</p>
          <dl>
            {profileItems.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{label === 'GitHub' ? <a href={profile.githubUrl} target="_blank" rel="noreferrer">{value} ↗</a> : value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="home-section about-section" id="about">
        <div className="frame">
          <SectionLabel number="01">About Me</SectionLabel>
          <div className="about-editorial">
            <h2>코드의 결과보다,<br />흐름과 원인을 이해합니다.</h2>
            <div>
              <p>Java와 Spring Boot를 중심으로 백엔드 개발을 공부하고 있습니다.</p>
              <p>직접 서비스를 만들며 요청 흐름, 인증, 데이터 관계, 외부 API 연동과 배포까지 경험했습니다.</p>
              <p>문제를 만났을 때 동작 결과만 고치기보다 왜 발생했는지 추적하고 기록하려고 합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section skills-section" id="skills">
        <div className="frame">
          <SectionLabel number="02">Skills</SectionLabel>
          <div className="skills-grid">
            {skills.map(({ group, items }) => (
              <div className="skill-group" key={group}>
                <h2>{group}</h2>
                <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section selected-work-section" id="projects">
        <div className="frame">
          <SectionLabel number="03">Selected Projects</SectionLabel>
          <ProjectEntry project={projects[0]} compact />
          <div className="section-end-link"><Link className="text-link" to="/projects">All projects <span>→</span></Link></div>
        </div>
      </section>

      <section className="home-section experience-section" id="experience">
        <div className="frame">
          <SectionLabel number="04">Experience & Education</SectionLabel>
          <div className="timeline-list">
            {experience.map((item) => <article key={item.category}><span>{item.period}</span><p>{item.category}</p><h3>{item.title}</h3><small>{item.detail}</small></article>)}
          </div>
          <div className="certification-block">
            <p>Certification</p>
            {certifications.map((item) => <div key={item.title}><span>{item.year}</span><h3>{item.title}</h3><small>{item.status}</small></div>)}
          </div>
        </div>
      </section>

      <section className="home-section contact-section" id="contact">
        <div className="frame">
          <SectionLabel number="05">Contact</SectionLabel>
          <div className="contact-callout">
            <p>Backend Developer</p>
            <h2>함께 이야기할 기회를<br />기다리고 있습니다.</h2>
            <dl><div><dt>Email</dt><dd>{profile.email}</dd></div><div><dt>GitHub</dt><dd><a href={profile.githubUrl} target="_blank" rel="noreferrer">{profile.githubLabel} ↗</a></dd></div></dl>
          </div>
        </div>
      </section>
    </div>
  )
}
