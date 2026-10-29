// Every photo is saved at these widths as `${base}-${width}.jpg` (see the photo notes in lib/site.js).
const WIDTHS = [1600, 2400, 3200];

export function photoSrc(photo) {
  return `${photo.base}-2400.jpg`;
}

export function photoSrcSet(photo) {
  return WIDTHS.map((w) => `${photo.base}-${w}.jpg ${w}w`).join(', ');
}
