import { site } from '../lib/site';

// Past themed runs as photo cards: headcount badge in the corner, name over a dark fade.
export default function SignatureRuns() {
  return (
    <section className="band" id="past-events">
      <div className="wrap">
        <div className="section-head sig-head">
          <p className="eyebrow">Signature runs</p>
          <h2>Past events</h2>
        </div>
        <ul className="sig">
          {site.signatureRuns.map((r) => (
            <li key={r.name} className={`${r.accent}${r.photo ? '' : ' blank'}`}>
              {/* Static export can't use next/image optimization, so a plain img is intended. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={r.photo || '/logo.png'}
                alt={r.photo ? r.alt : ''}
                loading="lazy"
                style={r.focus ? { objectPosition: r.focus } : undefined}
              />
              <span className="count">{r.count} runners</span>
              <div className="sig-name">
                <strong>{r.name}</strong>
                {r.with && <span>ft. {r.with}</span>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
