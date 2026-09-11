import ProjectEntry from '../components/ProjectEntry'
import { projects } from '../data/projects'

export default function Projects() {
  return <div className="page-enter frame projects-page">
    <header className="page-heading"><p className="eyebrow">Selected work / 2026</p><h1>PROJECTS</h1><p className="page-intro">설계의 판단과 문제 해결 과정을 중심으로 정리한 작업입니다.</p></header>
    <div className="project-list">{projects.map((project, index) => <div className={index === 0 ? 'project-list__featured' : 'project-list__pending'} key={project.slug}><ProjectEntry project={project} /></div>)}</div>
  </div>
}

