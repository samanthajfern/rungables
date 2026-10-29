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
  // routes is optional: leave it out for venues where the route changes.
  venues: [
    {
      id: 'le-parc', name: 'Le Parc Cafe', when: 'Most Tuesdays', area: 'Granada Golf Course',
      address: '997 N Greenway Dr, Coral Gables, FL 33134',
      routes: [{ distance: '2.5 MI', label: 'Run the loop' }, { distance: '1.5 MI', label: 'Walk the loop' }],
      note: 'Both routes circle Granada Golf Course and finish back at the cafe, so runners and walkers end the night together.',
    },
    {
      id: 'plaza', name: 'The Plaza Coral Gables', when: 'Special runs', area: 'Ponce Circle',
      address: '2811 Ponce de Leon Blvd, Coral Gables, FL 33134',
      note: 'Collab nights start and finish here. The exact meet-up spot and route go up on Instagram and the RSVP page that week.',
    },
    {
      id: 'bay13', name: 'Bay 13 Brewery', when: 'Special runs', area: 'Downtown Coral Gables',
      address: '65 Alhambra Plaza, Coral Gables, FL 33134',
      note: 'Brewery nights start and finish here. The exact meet-up spot and route go up on Instagram and the RSVP page that week.',
    },
  ],
  // Brands we've worked with, scrolling in a strip under the intro. Logos are white on transparent in
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
      after: 'upcoming', base: '/pink-cheer', width: 3200, height: 2133, focus: '50% 40%',
      alt: 'The Pink Run crew cheering with arms up behind the Run Gables sign',
    },
  ],
};
