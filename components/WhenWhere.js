import { site } from '../lib/site';

const schedule = [
  { time: '7:00', title: 'Arrive', note: 'Say hi, stretch and find your pace group' },
  { time: '7:10', title: 'Group pic', note: 'Everyone in, every week' },
  { time: '7:15', title: 'Takeoff, SHARP', note: 'Pacers at the front and a sweep at the back', sharp: true },
  { time: 'After', title: 'Stretch and hang', note: 'Music on, and most of us stay a while' },
];

export default function WhenWhere() {
  return (
    <section className="band" id="tuesdays">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">When &amp; where</p>
          <h2>Every Tuesday, rain or shine</h2>
        </div>
        <div className="ww">
          <ol className="timeline">
            {schedule.map((s) => (
              <li key={s.time} className={s.sharp ? 'sharp' : undefined}>
                <time>{s.time}</time>
                <div><strong>{s.title}</strong><small>{s.note}</small></div>
              </li>
            ))}
          </ol>
          <div className="where">
            <div>
              <p className="eyebrow">Meet spot</p>
              <h3>Le Parc Cafe</h3>
              <p className="addr">Granada Golf Course<br />{site.meetSpot.street}, {site.meetSpot.city}, {site.meetSpot.region} {site.meetSpot.postalCode}</p>
            </div>
            <div className="routes">
              <div className="route"><b>2.5 MI</b><span>Run the loop</span></div>
              <div className="route"><b>1.5 MI</b><span>Walk the loop</span></div>
            </div>
            <p className="note">Both routes circle Granada Golf Course and finish back at the cafe, so runners and walkers end the night together.</p>
            <a className="btn btn-ghost" href={site.mapsUrl} target="_blank" rel="noopener">Open in Maps</a>
          </div>
        </div>
      </div>
    </section>
  );
}
