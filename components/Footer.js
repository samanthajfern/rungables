import { useRef, useState } from 'react';
import { site } from '../lib/site';

function CopyEmail({ targetRef }) {
  const [label, setLabel] = useState('Copy email');

  const selectEmail = () => {
    const r = document.createRange();
    r.selectNodeContents(targetRef.current);
    const s = getSelection();
    s.removeAllRanges();
    s.addRange(r);
    setLabel('Selected, press copy');
  };

  const copy = () => {
    const done = () => {
      setLabel('Copied');
      setTimeout(() => setLabel('Copy email'), 1600);
    };
    try {
      navigator.clipboard.writeText(site.email).then(done, selectEmail);
    } catch (_) {
      selectEmail();
    }
  };

  return <button className="copy" type="button" onClick={copy}>{label}</button>;
}

export default function Footer() {
  const emailRef = useRef(null);
  return (
    <footer id="contact">
      <div className="wrap">
        <p className="sign">Run for the <em>joy</em> of it. 💛</p>
        <div className="contact">
          <div>
            <p className="eyebrow">Email</p>
            <code ref={emailRef}>{site.email}</code>
            <CopyEmail targetRef={emailRef} />
          </div>
          <div>
            <p className="eyebrow">Instagram</p>
            <a href={site.instagram.url} target="_blank" rel="noopener">{site.instagram.handle}</a>
          </div>
          <div>
            <p className="eyebrow">Strava</p>
            <a href={site.strava} target="_blank" rel="noopener">Join the club on Strava</a>
          </div>
        </div>
        <p className="fine">Run Gables · Coral Gables, Florida · Est 2026</p>
      </div>
    </footer>
  );
}
