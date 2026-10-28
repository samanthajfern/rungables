import { site } from '../lib/site';

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap">
        <a className="mark" href="/#top">RUN GABLES<span>.</span></a>
        <nav aria-label="Sections">
          <ul>
            <li><a href="/#about">About</a></li>
            <li><a href="/#tuesdays">When &amp; Where</a></li>
            <li><a href="/#events">Events</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </nav>
        <a className="btn btn-orange" href={site.rsvpUrl} target="_blank" rel="noopener">RSVP</a>
      </div>
    </header>
  );
}
