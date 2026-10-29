import { site } from '../lib/site';

// Slim strip of partner logos that scrolls endlessly, used as a divider under the intro.
// The logo row is rendered twice so the loop is seamless (the track slides by exactly one copy).
export default function JoinedBy() {
  const partners = site.partners;
  const row = (copy) => partners.map((p) => (
    // Static export can't use next/image optimization, so a plain img is intended.
    // eslint-disable-next-line @next/next/no-img-element
    <img key={`${copy}-${p.name}`} src={p.logo} alt="" style={{ '--h': `${p.height}px` }} />
  ));

  return (
    <section className="joined" aria-labelledby="joined-label">
      <p className="eyebrow" id="joined-label">We&apos;ve worked with</p>
      {/* Screen readers get the plain list; the moving strip is visual only. */}
      <ul className="sr-only">
        {partners.map((p) => <li key={p.name}>{p.name}</li>)}
      </ul>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <div className="marquee-row">{row('a')}</div>
          <div className="marquee-row">{row('b')}</div>
        </div>
      </div>
    </section>
  );
}
