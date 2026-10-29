import { photoSrc, photoSrcSet } from '../lib/photos';

// Full-bleed photo: spans the viewport, edges fade into the page, drifts on scroll (see .photo-bleed in globals.css).
// photo.flow blends it into the sections above and below instead.
export default function BleedPhoto({ photo, className = '' }) {
  const classes = ['photo-bleed', photo.flow && 'flow', className].filter(Boolean).join(' ');
  return (
    <section className={classes}>
      <figure>
        <div className="bleed-frame">
          {/* Static export can't use next/image optimization, so a plain img is intended. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoSrc(photo)}
            srcSet={photoSrcSet(photo)}
            // Phones crop to a taller frame, so the photo renders a bit wider than the screen.
            sizes="(max-width: 600px) 130vw, 100vw"
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
