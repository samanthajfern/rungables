import { site } from '../lib/site';
import BleedPhoto from './BleedPhoto';

export default function GroupPhoto() {
  if (site.groupPhoto) {
    return (
      <BleedPhoto
        className="photo-lead"
        photo={{
          src: site.groupPhoto,
          width: 2000,
          height: 1334,
          alt: 'About a hundred Run Gables runners, many in costume, gathered on the lawn at night',
          caption: site.groupPhotoCaption,
          eager: true,
        }}
      />
    );
  }

  return (
    <section className="photo">
      <div className="wrap">
        <figure>
          <div className="photo-frame">
            <div className="ph" role="img" aria-label="Group photo placeholder">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 7h3l2-2.5h6L17 7h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z" />
                <circle cx="12" cy="13" r="3.5" />
              </svg>
              <b>Group pic goes here</b>
              <span>Landscape shot from the 7:10 group photo works best</span>
            </div>
          </div>
          <figcaption>{site.groupPhotoCaption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
