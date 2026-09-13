import { Link } from 'react-router-dom'
import ProjectEntry from '../components/ProjectEntry'
import SectionLabel from '../components/SectionLabel'
import { projects } from '../data/projects'
import { certifications, experience, profile, profileHighlights, skills } from '../data/profile'

const profileItems = [
  ['Name', profile.name],
  ['Birth', profile.birth],
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
            <div className="profile-title"><p>{profile.position}</p><span>{profile.englishName}</span></div>
            <h1>{profile.name}<span className="accent">.</span></h1>
            <p className="profile-headline">{profile.headline}</p>
            <p className="profile-summary">{profile.summary}</p>
            <div className="profile-actions">
              <Link className="primary-link" to="/projects">Projects <span>→</span></Link>
              <a className="plain-link" href={profile.githubUrl} target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            </div>
            <dl className="profile-quickfacts">
              {profileHighlights.map(({ label, value }) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
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
                <dd>{label === 'GitHub' ? <a href={profile.githubUrl} target="_blank" rel="noreferrer">{value} ↗</a> : label === 'Email' ? <a href={'mailto:' + profile.email}>{value}</a> : value}</dd>
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
              <p>배운 내용을 그대로 따라 하는 데 그치지 않고, 왜 그렇게 동작하는지 이해한 뒤 다음 문제에 적용하려고 합니다.</p>
              <p>Java와 Spring Boot를 중심으로 직접 서비스를 만들며 요청 흐름, 인증, 데이터 관계, 외부 API 연동과 배포까지 경험했습니다.</p>
              <p>문제가 발생하면 결과만 수정하기보다 원인을 추적하고 이해하는 과정을 중요하게 생각합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section skills-section" id="skills">
        <div className="frame">
          <SectionLabel number="02">Skills</SectionLabel>
          <div className="skills-grid">
            {skills.map(({ group, items }) => <div className="skill-group" key={group}><h2>{group}</h2><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}
          </div>
        </div>
      </section>

      <section className="home-section selected-work-section" id="projects">
        <div className="frame">
          <SectionLabel number="03">Selected Projects</SectionLabel>
          <ProjectEntry project={projects[0]} compact />
          <div className="other-projects">
            {projects.slice(1).map((project) => <Link to={'/projects/' + project.slug} key={project.slug}><span>{project.number}</span><strong>{project.title}</strong><small>{project.category}</small>{project.statusLabel && <b>{project.statusLabel}</b>}<i>→</i></Link>)}
          </div>
          <div className="section-end-link"><Link className="text-link" to="/projects">All projects <span>→</span></Link></div>
        </div>
      </section>

      <section className="home-section experience-section" id="experience">
        <div className="frame">
          <SectionLabel number="04">Education & Experience</SectionLabel>
          <div className="timeline-list">
            {experience.map((item) => <article key={item.category + '-' + item.title}><span>{item.period}</span><p>{item.category}</p><h3>{item.title}</h3><small>{item.detail}</small></article>)}
          </div>
          <section className="certifications" aria-labelledby="certification-title">
            <h2 id="certification-title">Certification</h2>
            <div className="certification-list">
              {certifications.map((item) => <div className={item.featured ? 'featured' : ''} key={item.number}><span>{item.number}</span><h3>{item.title}</h3></div>)}
            </div>
          </section>
        </div>
      </section>

      <section className="home-section contact-section" id="contact">
        <div className="frame">
          <SectionLabel number="05">Contact</SectionLabel>
          <div className="contact-callout">
            <p>Backend Developer</p>
            <h2>함께 이야기할 기회를<br />기다리고 있습니다.</h2>
            <dl><div><dt>Email</dt><dd><a href={'mailto:' + profile.email}>{profile.email}</a></dd></div><div><dt>GitHub</dt><dd><a href={profile.githubUrl} target="_blank" rel="noreferrer">{profile.githubLabel} ↗</a></dd></div></dl>
          </div>
        </div>
      </section>
    </div>
  )
}
