import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { site } from '../lib/site';
import Badge from './Badge';

const links = [
  { href: '/#about', label: 'About' },
  { href: '/#tuesdays', label: 'When & Where' },
  { href: '/#events', label: 'Events' },
  { href: '/#partner', label: 'Partner' },
  { href: '/#contact', label: 'Contact' },
];

// On phones the section links fold into a Menu button that drops a panel below the bar.
export default function Nav() {
  const [open, setOpen] = useState(false);
  const header = useRef(null);
  const toggle = useRef(null);

  // Close on Escape (focus back on the button) or on a tap outside the bar.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggle.current.focus();
      }
    };
    const onPointer = (e) => {
      if (!header.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [open]);

  return (
    <header className="nav" ref={header}>
      <div className="wrap">
        <Link className="mark" href="/#top"><Badge small alt="Run Gables home" /></Link>
        <nav aria-label="Sections">
          <ul id="nav-links" className={open ? 'open' : undefined}>
            {links.map((l) => (
              <li key={l.href}><Link href={l.href} onClick={() => setOpen(false)}>{l.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div className="nav-actions">
          <button
            ref={toggle}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="nav-links"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="bars" aria-hidden="true" />
            {open ? 'Close' : 'Menu'}
          </button>
          <a className="btn btn-orange" href={site.rsvpUrl} target="_blank" rel="noopener">RSVP</a>
        </div>
      </div>
    </header>
  );
}
