// Everything you might want to change lives here.
export const site = {
  name: 'Run Gables',
  url: 'https://rungables.com',
  description:
    'Run Gables is a women-founded community run club in Coral Gables, Miami. Every Tuesday at 7pm at Le Parc Cafe, Granada Golf Course. ALL paces welcome.',
  rsvpUrl: 'https://luma.com/gablesrunclub',
  instagram: { handle: '@rungables', url: 'https://www.instagram.com/rungables/' },
  strava: 'https://www.strava.com/clubs/rungables',
  email: 'rungables@gmail.com',
  // Meet spot. Keep this identical to the Google Business Profile so Google can match them.
  meetSpot: {
    name: 'Le Parc Cafe',
    street: '997 N Greenway Dr',
    city: 'Coral Gables',
    region: 'FL',
    postalCode: '33134',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Le+Parc+Cafe+997+N+Greenway+Dr+Coral+Gables+FL+33134',
  partners: ['Fuku', 'lululemon', 'New Balance', 'Bay 13'],
  groupPhoto: '/group.jpg',
  groupPhotoCaption: 'The Lorax Run · October 20, 2026',
  // Full-width photos placed between sections. after: 'about' | 'whenWhere' | 'upcoming' picks the section it follows.
  // Landscape, 2000px wide, in public/.
  // focus is the CSS object-position: which part of the photo stays in view when it's cropped.
  photos: [
    { after: 'whenWhere', src: '/pink-dance.jpg', width: 2000, height: 1333, focus: '50% 70%', caption: 'The Pink Run · October 13, 2026', alt: 'Runners in pink dancing through the warm-up on the lawn at night' },
    { after: 'upcoming', src: '/pink-cheer.jpg', width: 2000, height: 1333, focus: '50% 60%', caption: 'The Pink Run crew', alt: 'The whole Pink Run group cheering with arms up behind the Run Gables sign' },
  ],
};
