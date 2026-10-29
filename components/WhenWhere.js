import { useRef, useState } from 'react';
import { site } from '../lib/site';

const schedule = [
  { time: '7:00', title: 'Arrive', note: 'Say hi, stretch and find your pace group' },
  { time: '7:10', title: 'Group pic', note: 'Everyone in, every week' },
  { time: '7:15', title: 'Takeoff, SHARP', note: 'Pacers at the front and a sweep at the back', sharp: true },
  { time: 'After', title: 'Stretch and hang', note: 'Music on, and most of us stay a while' },
];

function mapsUrl(venue) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${venue.name} ${venue.address}`)}`;
}

// Meet spots as tabs: the usual spot first, special-night venues beside it. Arrow keys move between tabs.
function Venues() {
  const venues = site.venues;
  const [active, setActive] = useState(0);
  const tabs = useRef([]);

  const onKeyDown = (e) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    let next;
    if (step) next = (active + step + venues.length) % venues.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = venues.length - 1;
    else return;
    e.preventDefault();
    setActive(next);
    tabs.current[next].focus();
  };

  return (
    <div className="where">
      <p className="eyebrow">Meet spot</p>
      <div className="venue-tabs" style={{ '--count': venues.length }} role="tablist" aria-label="Meet spots" onKeyDown={onKeyDown}>
        {venues.map((v, i) => (
          <button
            key={v.id}
            ref={(el) => { tabs.current[i] = el; }}
            type="button"
            role="tab"
            id={`tab-${v.id}`}
            aria-selected={i === active}
            aria-controls={`venue-${v.id}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
          >
            {v.tab}
          </button>
        ))}
      </div>
      {/* All panels share one grid cell, so the column keeps the tallest venue's height and nothing below jumps. */}
      <div className="venues">
      {venues.map((v, i) => (
        <div
          key={v.id}
          className="venue"
          role="tabpanel"
          id={`venue-${v.id}`}
          aria-labelledby={`tab-${v.id}`}
          hidden={i !== active}
        >
          <div>
            <span className="when">{v.when}</span>
            <h3>{v.name}</h3>
            <p className="addr">{v.area}<br />{v.address}</p>
          </div>
          {v.routes && (
            <div className="routes">
              {v.routes.map((r) => (
                <div className="route" key={r.label}><b>{r.distance}</b><span>{r.label}</span></div>
              ))}
            </div>
          )}
          <p className="note">{v.note}</p>
          <a className="btn btn-ghost" href={mapsUrl(v)} target="_blank" rel="noopener">Open in Maps</a>
        </div>
      ))}
      </div>
    </div>
  );
}

export default function WhenWhere() {
  return (
    <section className="band" id="tuesdays">
      <div className="wrap">
        {/* Two columns on wider screens: heading + schedule on the left, meet spot beside them from the top. */}
        <div className="ww">
          <div>
            <div className="section-head">
              <p className="eyebrow">When &amp; where</p>
              <h2>Every Tuesday, rain or shine</h2>
            </div>
            <ol className="timeline">
              {schedule.map((s) => (
                <li key={s.time} className={s.sharp ? 'sharp' : undefined}>
                  <time>{s.time}</time>
                  <div><strong>{s.title}</strong><small>{s.note}</small></div>
                </li>
              ))}
            </ol>
          </div>
          <Venues />
        </div>
      </div>
    </section>
  );
}
