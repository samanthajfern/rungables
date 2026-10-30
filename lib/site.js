// Everything you might want to change lives here.
export const site = {
  name: 'Run Gables',
  url: 'https://rungables.com',
  // Shown in Google results and in link previews (iMessage, Instagram, WhatsApp). Keep it under ~160 characters.
  description:
    'A women-founded Miami run club. Every Tuesday at 7pm in Coral Gables we run and walk a 2-3 mile loop together and stick around after. ALL paces welcome.',
  rsvpUrl: 'https://luma.com/gablesrunclub',
  instagram: { handle: '@rungables', url: 'https://www.instagram.com/rungables/' },
  strava: 'https://www.strava.com/clubs/rungables',
  email: 'contact@rungables.com',
  // Usual meet spot, used in the structured data Google reads. Keep it identical to the Google Business Profile.
  meetSpot: {
    name: 'Le Parc Cafe',
    street: '997 N Greenway Dr',
    city: 'Coral Gables',
    region: 'FL',
    postalCode: '33134',
  },
  // Where we meet. The first venue is the usual spot and opens by default; the others are tabs next to it.
  // tab is the short name on the switch; name is the full name shown below it.
  venues: [
    {
      id: 'le-parc', tab: 'Le Parc', name: 'Le Parc Cafe', when: 'Most Tuesdays', area: 'Granada Golf Course',
      address: '997 N Greenway Dr, Coral Gables, FL 33134',
      routes: [{ distance: '2.5 MI', label: 'Run the loop' }, { distance: '1.5 MI', label: 'Walk the loop' }],
      note: 'Both routes circle Granada Golf Course and finish back at the cafe, so runners and walkers end the night together.',
    },
    {
      id: 'plaza', tab: 'The Plaza', name: 'The Plaza Coral Gables', when: 'Special runs', area: 'Ponce Circle',
      address: '2811 Ponce de Leon Blvd, Coral Gables, FL 33134',
      routes: [{ distance: '3 MI', label: 'Run' }, { distance: '1.5 MI', label: 'Walk' }],
      note: 'Both routes start and finish at The Plaza, so runners and walkers end the night together.',
    },
    {
      id: 'bay13', tab: 'Bay 13', name: 'Bay 13 Brewery', when: 'Special runs', area: 'Downtown Coral Gables',
      address: '65 Alhambra Plaza, Coral Gables, FL 33134',
      routes: [{ distance: '3 MI', label: 'Run' }, { distance: '1.5 MI', label: 'Walk' }],
      note: 'Both routes start and finish at Bay 13, so runners and walkers end the night together.',
    },
  ],
  // Past themed runs, shown as photo cards under About. count is the headcount on the badge.
  // photo is optional (save it in public/events/); without one the card shows the logo on the accent color.
  // post is the Instagram link the card opens. focus is the CSS object-position for the crop; with names a partner (shown as "ft. ..."). accent: orange | pink | blue.
  signatureRuns: [
    { name: 'Miles & Salsa', post: 'https://www.instagram.com/p/Dde_DS-tghr/', with: 'Run Little Havana', count: '80+', accent: 'orange', photo: '/events/salsa.jpg', focus: '50% 42%',
      alt: 'The Miles & Salsa crew on the lawn outside Bay 13' },
    { name: 'The Lorax Run', post: 'https://www.instagram.com/p/De1toCCFRkA/', with: 'On', count: '130+', accent: 'orange', photo: '/events/lorax.jpg', focus: '50% 70%',
      alt: 'The Lorax Run crowd in costume on the lawn at night' },
    { name: 'Miles & Art', post: 'https://www.instagram.com/p/Dd1xXMyGjZ6/', with: 'New Balance', count: '75+', accent: 'blue', photo: '/events/art.jpg', focus: '50% 60%',
      alt: 'The Miles & Art group with a New Balance banner outside Bay 13' },
    { name: 'The Pink Run', post: 'https://www.instagram.com/p/DehDbxDNVn2/', with: 'The Plaza', count: '50+', accent: 'pink', photo: '/events/pink.jpg', focus: '50% 45%',
      alt: 'Runners in pink cheering behind the Run Gables sign' },
  ],
  // Brands we've partnered with, scrolling in a strip under the intro. Logos are white on transparent in
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
    base: '/group', width: 3200, height: 2134, focus: '50% 23%',
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
      after: 'upcoming', base: '/pink-cheer', width: 3200, height: 2133, focus: '50% 40%',
      alt: 'The Pink Run crew cheering with arms up behind the Run Gables sign',
    },
  ],
};
