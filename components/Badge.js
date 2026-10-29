// Logo exported from Canva (run_gables_logo_v3), white with transparent background.
// logo-sm.png is a 128px copy for small spots like the nav.
export default function Badge({ small = false, alt = 'Run Gables logo: For the joy of it, est 2026' }) {
  const size = small ? 128 : 720;
  return (
    // Static export can't use next/image optimization, so a plain img is intended.
    // eslint-disable-next-line @next/next/no-img-element
    <img className="badge" src={small ? '/logo-sm.png' : '/logo.png'} width={size} height={size} alt={alt} />
  );
}
