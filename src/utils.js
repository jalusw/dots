export const isSameOrigin = (url1, url2) =>
  new URL(url1).origin == new URL(url2).origin;
