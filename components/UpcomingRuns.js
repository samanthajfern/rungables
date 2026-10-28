import { useEffect, useState } from 'react';
import { site } from '../lib/site';

// Next Tuesdays from the visitor's today, so the static page never goes stale.
function nextTuesdays(count) {
  const now = new Date();
  const d = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const offset = (2 - d.getDay() + 7) % 7 || (now.getHours() >= 21 ? 7 : 0);
  d.setDate(d.getDate() + offset);
  const mon = new Intl.DateTimeFormat('en-US', { month: 'short' });
  const runs = [];
  for (let i = 0; i < count; i++) {
    runs.push({ key: d.toISOString(), label: `${mon.format(d)} ${d.getDate()}`, fuku: d.getDate() <= 7 });
    d.setDate(d.getDate() + 7);
  }
  return runs;
}

export default function UpcomingRuns() {
  const [runs, setRuns] = useState([]);
  useEffect(() => setRuns(nextTuesdays(6)), []);

  return (
    <section className="band events" id="events">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Upcoming</p>
          <h2>Welcome back! See you Tuesday</h2>
          <p className="sub">On the first Tuesday of every month we join Fuku after the run, and every other Tuesday is our classic Granada loop.</p>
        </div>
        <div className="upcoming" aria-live="polite">
          {runs.map((r) => (
            <div className="row" key={r.key}>
              <div className="date">{r.label}<small>TUE · 7:00PM</small></div>
              <div className="what">
                {r.fuku ? (
                  <><strong>Fuku night</strong><span>Granada loop, then 15% off at Fuku for Run Gables runners</span></>
                ) : (
                  <><strong>Tuesday run</strong><span>Granada loop from Le Parc Cafe, 2.5 mi run or 1.5 mi walk</span></>
                )}
              </div>
              <span className={`chip${r.fuku ? ' collab' : ''}`}>{r.fuku ? 'Collab' : 'Weekly'}</span>
            </div>
          ))}
        </div>
        <div className="upcoming-foot">
          <p>Special events and collabs drop on Instagram first, and every RSVP lives on our events page.</p>
          <a className="btn btn-orange" href={site.rsvpUrl} target="_blank" rel="noopener">See all events</a>
        </div>
      </div>
    </section>
  );
}
