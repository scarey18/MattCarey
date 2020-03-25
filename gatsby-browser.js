export const onClientEntry = () => {
  if (!(`IntersectionObserver` in window)) {
    return import(`intersection-observer`)
  }
}