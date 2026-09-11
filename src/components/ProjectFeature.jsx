import ImagePlaceholder from './ImagePlaceholder'

export default function ProjectFeature({ feature, reverse = false }) {
  return (
    <article className={`feature-row ${reverse ? 'feature-row--reverse' : ''}`}>
      <div className="feature-copy">
        <span className="feature-index">{feature.index}</span>
        <h3>{feature.title}</h3>
        <p>{feature.body}</p>
      </div>
      <ImagePlaceholder title={feature.title.toUpperCase()} recommendation={feature.recommendation} />
    </article>
  )
}
