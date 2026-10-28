import { site } from '../lib/site';

export default function JoinedBy() {
  return (
    <div className="wrap">
      <div className="joined">
        <p className="eyebrow">We&apos;ve been joined by</p>
        <ul>{site.partners.map((p) => <li key={p}>{p}</li>)}</ul>
      </div>
    </div>
  );
}
