import { site } from '../lib/site';

// Full-screen group photo with the club name, tagline and RSVP on top; the intro and stats follow right below.
export default function Hero() {
  const photo = site.groupPhoto;
  return (
    <>
      <section className="hero">
        <div className="hero-media">
          {/* Static export can't use next/image optimization, so a plain img is intended. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${photo.base}-${photo.widths[1]}.jpg`}
            srcSet={photo.widths.map((w) => `${photo.base}-${w}.jpg ${w}w`).join(', ')}
            // On phones the photo is cropped to fill a tall header, so it renders wider than the screen.
            sizes="(max-width: 900px) 1250px, 100vw"
            width={photo.width}
            height={photo.height}
            alt="About a hundred Run Gables runners, many in costume, gathered on the lawn at night"
            fetchpriority="high"
          />
        </div>
        <div className="wrap hero-inner">
          <h1 className="hero-title">Run Gables</h1>
          <p className="hero-tag">Coral Gables Run Club · Every Tuesday · 7pm</p>
          <div className="actions">
            <a className="btn btn-orange" href={site.rsvpUrl} target="_blank" rel="noopener">RSVP for Tuesday</a>
            <a className="btn btn-ghost" href={site.instagram.url} target="_blank" rel="noopener">Follow {site.instagram.handle}</a>
          </div>
        </div>
      </section>

      <section className="intro">
        <div className="wrap intro-copy">
          <p className="lede">
            Run Gables is a <strong>women-founded community run club</strong> that meets every Tuesday
            night at Granada Golf Course, where we run or walk a loop together and stick around after to
            stretch, laugh and catch up. ALL paces welcome, always.
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
