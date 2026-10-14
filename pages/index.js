export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">rungables</p>
        <h1>Website connected to the Heylo API</h1>
        <p className="lead">
          This starter is ready for a marketing site, product landing page, or customer portal
          that pulls data from Heylo through a secure server-side API route.
        </p>

        <div className="cta-row">
          <a href="https://www.heylo.com/help/api" target="_blank" rel="noreferrer">
            View Heylo API docs
          </a>
          <a href="/api/heylo/fetch" className="secondary">
            Test API route
          </a>
        </div>
      </section>

      <section className="card-grid">
        <article className="card">
          <h2>Secure by default</h2>
          <p>
            Keys live in environment variables and are never exposed to the browser.
          </p>
        </article>
        <article className="card">
          <h2>Fast & simple</h2>
          <p>
            The website calls your own API endpoint, which then proxies the request to Heylo.
          </p>
        </article>
        <article className="card">
          <h2>Ready for deployment</h2>
          <p>
            This app is designed to be deployed on Vercel or any Node-compatible host.
          </p>
        </article>
      </section>
    </main>
  );
}
