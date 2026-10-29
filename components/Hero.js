import { site } from '../lib/site';
import { photoSrc, photoSrcSet } from '../lib/photos';

// Full-screen photo with the club name, tagline and RSVP on top; the intro and stats follow right below.
export default function Hero() {
  const photo = site.heroPhoto;
  return (
    <>
      <section className="hero">
        <div className="hero-media">
          {/* Static export can't use next/image optimization, so a plain img is intended. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoSrc(photo)}
            srcSet={photoSrcSet(photo)}
            // On phones the photo is cropped to fill a tall header, so it renders wider than the screen.
            sizes="(max-width: 900px) 1250px, 100vw"
            width={photo.width}
            height={photo.height}
            alt={photo.alt}
            style={{ objectPosition: photo.focus }}
            fetchpriority="high"
          />
        </div>
        <div className="wrap hero-inner">
          <h1 className="hero-title">Run Gables</h1>
          <p className="hero-tag"><span>A Miami Run Club</span><span>Every Tuesday · 7pm</span></p>
          <div className="actions">
            <a className="btn btn-orange" href={site.rsvpUrl} target="_blank" rel="noopener">RSVP for Tuesday</a>
            <a className="btn btn-ghost" href={site.instagram.url} target="_blank" rel="noopener">Follow {site.instagram.handle}</a>
          </div>
        </div>
      </section>

      <section className="intro">
        <div className="wrap intro-copy">
          <p className="lede">
            Run Gables is a <strong>women-founded community run club</strong> built on the belief that
            running can be joyful alongside community, meeting every Tuesday in the Coral Gables area. We run
            and walk a 2-3 mile loop together and stick around after to stretch, laugh and catch up. ALL paces
            welcome, always.
          </p>
          <div className="stats">
            <div className="stat"><b>EST 2026</b><span>First Tuesday run in January</span></div>
            <div className="stat"><b>120+</b><span>Active members</span></div>
            <div className="stat"><b>ALL</b><span>Paces welcome</span></div>
          </div>
        </div>
      </section>
    </>
  );
}
