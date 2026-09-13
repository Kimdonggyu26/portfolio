export default function ImagePlaceholder({ title, recommendation, tone = 'light', src, alt }) {
  return (
    <div className={`image-placeholder image-placeholder--${tone}`} role="img" aria-label={`${title} 이미지 자리`}>
      {src && <img className="project-cover-image" src={src} alt={alt || title} />}
      <span className="placeholder-mark" aria-hidden="true">⌜</span>
      <div>
        <strong>{title}</strong>
        <p>Recommended: {recommendation}</p>
      </div>
      <span className="placeholder-file">Replace image in /public</span>
    </div>
  )
}
