import { site } from '../lib/site';

export default function JoinedBy() {
  return (
    <div className="wrap">
      <div className="joined">
        <p className="eyebrow">We&apos;ve worked with</p>
        <ul>
          {site.partners.map((p) => (
            <li key={p.name}>
              {/* Static export can't use next/image optimization, so a plain img is intended. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.logo} alt={p.name} style={{ '--h': `${p.height}px` }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
