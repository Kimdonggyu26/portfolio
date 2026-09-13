import { Link } from 'react-router-dom'
import ImagePlaceholder from '../components/ImagePlaceholder'
import SectionLabel from '../components/SectionLabel'
import { projects } from '../data/projects'

export default function ProjectPlaceholder({ slug }) {
  const project = projects.find((item) => item.slug === slug)
  return <article className="page-enter placeholder-detail">
    <header className="detail-hero frame"><div className="detail-breadcrumb"><Link to="/projects">Projects</Link><span>/</span><span>{project.number}</span></div><p className="eyebrow">Project details pending</p><h1>{project.title}</h1><div className="detail-deck"><p>{project.summary}</p><span>{project.statusLabel || 'TBD'}</span></div></header>
    <div className="frame"><ImagePlaceholder title={`${project.title} — KEY VISUAL`} recommendation="16:9 project screenshot" tone="dark" /></div>
    <section className="frame section-space placeholder-copy"><SectionLabel number="01">To be documented</SectionLabel><div><h2>Content follows code.</h2><p>Overview, Architecture, Key Features, Engineering, Refactoring, Troubleshooting, Retrospective 구조를 준비했습니다. 기술·기능·성과는 저장소를 직접 확인하기 전까지 작성하지 않습니다.</p></div></section>
    <nav className="next-project frame" aria-label="프로젝트 목록"><span>Back to index</span><Link to="/projects">All projects <b>→</b></Link></nav>
  </article>
}

