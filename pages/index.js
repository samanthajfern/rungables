import Head from 'next/head';
import { site } from '../lib/site';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import GroupPhoto from '../components/GroupPhoto';
import About from '../components/About';
import WhenWhere from '../components/WhenWhere';
import UpcomingRuns from '../components/UpcomingRuns';
import JoinedBy from '../components/JoinedBy';
import Footer from '../components/Footer';

export default function HomePage() {
  const title = 'Run Gables | Coral Gables Run Club, Tuesdays 7pm';
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={site.description} />
        <link rel="canonical" href={`${site.url}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${site.url}/`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={site.description} />
        <meta property="og:image" content={`${site.url}/og.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="The Run Gables crew gathered on the lawn after a Tuesday night run" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Nav />
      <main id="top">
        <Hero />
        <GroupPhoto />
        <About />
        <WhenWhere />
        <UpcomingRuns />
        <JoinedBy />
      </main>
      <Footer />
    </>
  );
}
