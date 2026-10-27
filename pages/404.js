import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <>
      <Head><title>Off route | Run Gables</title></Head>
      <Nav />
      <main className="wrap lost">
        <p className="eyebrow">404</p>
        <h1>You ran <em>off</em> the route.</h1>
        <p>That page doesn&apos;t exist. Head back to the start line and we&apos;ll see you Tuesday.</p>
        <a className="btn btn-orange" href="/" style={{ justifySelf: 'start' }}>Back to start</a>
      </main>
      <Footer />
    </>
  );
}
