require('typeface-playfair-display');
require('typeface-fira-sans');


export const onClientEntry = () => {
  if (!(`IntersectionObserver` in window)) {
    return import(`intersection-observer`)
  }
}