export default function Badge() {
  return (
    <div className="badge" role="img" aria-label="Run Gables badge, for the joy of it, est 2026">
      <svg viewBox="0 0 300 300" aria-hidden="true">
        <defs>
          <path id="arcTop" d="M45 150a105 105 0 0 1 210 0" />
          <path id="arcBot" d="M52 150a98 98 0 0 0 196 0" />
        </defs>
        <text fontSize="17">
          <textPath href="#arcTop" startOffset="50%" textAnchor="middle">FOR THE JOY OF IT</textPath>
        </text>
        <text fontSize="17" letterSpacing="6">
          <textPath href="#arcBot" startOffset="50%" textAnchor="middle" dominantBaseline="hanging">EST 2026</textPath>
        </text>
      </svg>
      <div className="word">
        <span className="run">R<i>U</i>N</span>
        <span className="gables">GABLES</span>
      </div>
    </div>
  );
}
