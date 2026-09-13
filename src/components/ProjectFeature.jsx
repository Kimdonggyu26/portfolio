import ImagePlaceholder from './ImagePlaceholder'

export default function ProjectFeature({ feature, reverse = false }) {
  return (
    <article className={`feature-row ${reverse ? 'feature-row--reverse' : ''}`}>
      <div className="feature-copy">
        <span className="feature-index">{feature.index}</span>
        <h3>{feature.title}</h3>
        <p>{feature.body}</p>
      </div>
      <ImagePlaceholder src={`/images/projects/investome/${feature.image}`} alt={`${feature.title} 화면`} title={feature.title.toUpperCase()} recommendation={feature.recommendation} />
    </article>
  )
}
