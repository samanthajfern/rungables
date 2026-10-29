import { useEffect, useState } from 'react';
import { site } from '../lib/site';

const FLIP_EVERY_MS = 2400;

// Partner logos, one at a time, flipping to the next every few seconds. Pauses while hovered or focused.
export default function JoinedBy() {
  const partners = site.partners;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => setActive((i) => (i + 1) % partners.length), FLIP_EVERY_MS);
    return () => clearInterval(id);
  }, [paused, partners.length]);

  const prev = (active - 1 + partners.length) % partners.length;

  return (
    <div className="wrap">
      <div className="joined">
        <p className="eyebrow">We&apos;ve worked with</p>
        {/* Screen readers get the full list; the carousel itself is visual only. */}
        <ul className="sr-only">
          {partners.map((p) => <li key={p.name}>{p.name}</li>)}
        </ul>
        <div
          className="flipper"
          aria-hidden="true"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {partners.map((p, i) => (
            // Static export can't use next/image optimization, so a plain img is intended.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={p.name}
              src={p.logo}
              alt=""
              className={i === active ? 'on' : i === prev ? 'out' : undefined}
              style={{ '--h': `${p.height}px` }}
            />
          ))}
        </div>
        <div className="flip-dots" role="group" aria-label="Choose partner logo">
          {partners.map((p, i) => (
            <button
              key={p.name}
              type="button"
              aria-label={p.name}
              aria-pressed={i === active}
              onClick={() => setActive(i)}
              onFocus={() => setPaused(true)}
              onBlur={() => setPaused(false)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
