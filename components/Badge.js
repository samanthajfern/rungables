// Logo exported from Canva (run_gables_logo_v3), white with transparent background.
export default function Badge() {
  return (
    // Static export can't use next/image optimization, so a plain img is intended.
    // eslint-disable-next-line @next/next/no-img-element
    <img className="badge" src="/logo.png" width="720" height="720" alt="Run Gables logo: For the joy of it, est 2026" />
  );
}
