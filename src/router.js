export const navigateHandler = (e) => {
  e.preventDefault();
  history.pushState({}, null, url);
};
