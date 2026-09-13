import { Link } from 'react-router-dom'
import ImagePlaceholder from '../components/ImagePlaceholder'
import SectionLabel from '../components/SectionLabel'
import { projects } from '../data/projects'

export default function ProjectPlaceholder({ slug }) {
  const project = projects.find((item) => item.slug === slug)
  return <article className="page-enter placeholder-detail">
    <header className="detail-hero frame"><div className="detail-breadcrumb"><Link to="/projects">Projects</Link><span>/</span><span>{project.number}</span></div><p className="eyebrow">{project.category}</p><h1>{project.title}</h1><div className="detail-deck"><p>{project.summary}</p><span>{project.statusLabel || project.role}</span></div></header>
    <div className="frame"><ImagePlaceholder title={`${project.title} — KEY VISUAL`} recommendation="16:9 project screenshot" tone="dark" /></div>
    <section className="frame section-space placeholder-copy"><SectionLabel number="01">Project information</SectionLabel><div><h2>{project.role}</h2><p>{project.stack.length ? project.stack.join(' / ') : '상세 정보는 프로젝트 진행 후 추가할 예정입니다.'}</p></div></section>
    <nav className="next-project frame" aria-label="프로젝트 목록"><span>Back to index</span><Link to="/projects">All projects <b>→</b></Link></nav>
  </article>
}

