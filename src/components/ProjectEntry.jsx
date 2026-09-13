import { Link } from 'react-router-dom'
import ImagePlaceholder from './ImagePlaceholder'

export default function ProjectEntry({ project, compact = false }) {
  return <article className={`project-entry ${compact ? 'project-entry--compact' : ''}`}>
    <div className="project-heading"><span className="project-number">{project.number}</span><div><div className="project-kicker"><p className="eyebrow">{project.category}</p>{project.statusLabel && <span>{project.statusLabel}</span>}</div><h2>{project.title}</h2></div><span className="project-year">{project.year}</span></div>
    <Link className="project-visual" to={`/projects/${project.slug}`} aria-label={`${project.title} 상세 보기`}><ImagePlaceholder title={`${project.title} — MAIN VIEW`} recommendation="16:9 desktop screenshot" tone="dark" /></Link>
    <div className="project-bottom"><p>{project.summary}</p><p className="project-stack">{project.stack.length ? project.stack.join(' / ') : 'Details will be added after code review.'}</p><Link className="text-link" to={`/projects/${project.slug}`}>View project <span>↗</span></Link></div>
  </article>
}

