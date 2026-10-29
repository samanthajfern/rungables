// Full-bleed photo: spans the viewport, edges fade into the page, drifts on scroll (see .photo-bleed in globals.css).
export default function BleedPhoto({ photo, className = '' }) {
  return (
    <section className={`photo-bleed ${className}`.trim()}>
      <figure>
        <div className="bleed-frame">
          {/* Static export can't use next/image optimization, so a plain img is intended. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo.src}
            width={photo.width}
            height={photo.height}
            alt={photo.alt}
            loading="lazy"
            style={photo.focus ? { objectPosition: photo.focus } : undefined}
          />
        </div>
        {photo.caption && <figcaption className="wrap">{photo.caption}</figcaption>}
      </figure>
    </section>
  );
}
