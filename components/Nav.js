import Link from 'next/link';
import { site } from '../lib/site';

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap">
        <Link className="mark" href="/#top">RUN GABLES<span>.</span></Link>
        <nav aria-label="Sections">
          <ul>
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/#tuesdays">When &amp; Where</Link></li>
            <li><Link href="/#events">Events</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
          </ul>
        </nav>
        <a className="btn btn-orange" href={site.rsvpUrl} target="_blank" rel="noopener">RSVP</a>
      </div>
    </header>
  );
}
