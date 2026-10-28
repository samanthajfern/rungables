import { site } from '../lib/site';

export default function GroupPhoto() {
  return (
    <section className="photo">
      <div className="wrap">
        <figure>
          <div className={`photo-frame${site.groupPhoto ? ' has-img' : ''}`}>
            {site.groupPhoto ? (
              // Static export can't use next/image optimization, so a plain img is intended.
              // eslint-disable-next-line @next/next/no-img-element
              <img src={site.groupPhoto} alt="The Run Gables crew at the start line on a Tuesday night" />
            ) : (
              <div className="ph" role="img" aria-label="Group photo placeholder">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 7h3l2-2.5h6L17 7h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z" />
                  <circle cx="12" cy="13" r="3.5" />
                </svg>
                <b>Group pic goes here</b>
                <span>Landscape shot from the 7:10 group photo works best</span>
              </div>
            )}
          </div>
          <figcaption>{site.groupPhotoCaption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
