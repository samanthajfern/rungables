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
  // Brands we've worked with, shown one at a time in a flipping carousel. Logos are white on transparent in
  // public/partners/; height (px) evens out their visual size.
  partners: [
    { name: 'Fuku', logo: '/partners/fuku.png', height: 48 },
    { name: 'The Plaza Coral Gables', logo: '/partners/plaza.png', height: 92 },
    { name: 'On', logo: '/partners/on.svg', height: 60 },
    { name: 'New Balance', logo: '/partners/newbalance.svg', height: 56 },
    { name: 'lululemon', logo: '/partners/lululemon.svg', height: 54 },
  ],
  // Photos are saved in public/ at three widths (name-1600.jpg, name-2400.jpg, name-3200.jpg) so each
  // screen downloads only what it needs and stays sharp on retina. `base` is the shared name.
  // focus is the CSS object-position: which part of the photo stays in view when it's cropped.
  heroPhoto: {
    base: '/group', width: 3200, height: 2134, focus: '50% 68%',
    alt: 'About a hundred Run Gables runners, many in costume, gathered on the lawn at night',
  },
  // Full-width photos placed between sections. after: 'about' | 'whenWhere' | 'upcoming' picks the section it follows.
  // flow: true blends the photo into the sections above and below instead of fading to black.
  photos: [
    {
      after: 'whenWhere', base: '/pink-dance', width: 3200, height: 2133, focus: '50% 60%', flow: true,
      alt: 'Runners in pink dancing through the warm-up on the lawn at night',
    },
    {
      after: 'upcoming', base: '/pink-cheer', width: 3200, height: 2133, focus: '50% 55%',
      alt: 'The Pink Run crew cheering with arms up behind the Run Gables sign',
    },
  ],
};
