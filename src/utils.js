export const compareOrigin = (url1, url2) =>
  new URL(url1).origin == new URL(url2).origin;

export const isSameOrigin = (url1) => compareOrigin(url1, window.location.href);
