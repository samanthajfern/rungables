import { site } from '../lib/site';

// Pitch to brands and venues: a tall photo on one side, the ask and an email button on the other.
export default function PartnerWithUs() {
  const mail = `mailto:${site.email}?subject=${encodeURIComponent('Partnering with Run Gables')}`;
  return (
    <section className="band" id="partner">
      <div className="wrap partner">
        {/* Static export can't use next/image optimization, so a plain img is intended. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="partner-photo"
          src="/partner.jpg"
          width={1200}
          height={1800}
          alt="Run Gables runners cheering behind a Run for the Joy of It sign"
          loading="lazy"
        />
        <div className="partner-copy">
          <p className="eyebrow">Brands &amp; venues</p>
          <h2>Partner with us</h2>
          <p>
            Put your brand in front of our community of 200+ runners in Coral Gables. We team up with local
            businesses and brands for run nights, demos and post-run hangs.
          </p>
          <a className="btn btn-orange" href={mail}>Get in touch</a>
        </div>
      </div>
    </section>
  );
}
