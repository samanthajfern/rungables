import { site } from '../lib/site';
import Badge from './Badge';

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-copy">
          <p className="eyebrow">Coral Gables · Every Tuesday · 7pm</p>
          <h1>Run for the <em>joy</em> of it.</h1>
          <p className="lede">
            Run Gables is a <strong>women-founded community run club</strong> that meets every Tuesday
            night at Granada Golf Course, where we run or walk a loop together and stick around after to
            stretch, laugh and catch up. ALL paces welcome, always.
          </p>
          <div className="actions">
            <a className="btn btn-orange" href={site.rsvpUrl} target="_blank" rel="noopener">RSVP for Tuesday</a>
            <a className="btn btn-ghost" href={site.instagram.url} target="_blank" rel="noopener">Follow {site.instagram.handle}</a>
          </div>
          <div className="stats">
            <div className="stat"><b>EST 2026</b><span>First Tuesday run in January</span></div>
            <div className="stat"><b>120+</b><span>Active members</span></div>
            <div className="stat"><b>ALL</b><span>Paces welcome</span></div>
          </div>
        </div>
        <Badge />
      </div>
    </section>
  );
}
