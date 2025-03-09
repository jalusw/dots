import { isSameOrigin } from "./utils.js";

export const navigate = (url, data) => {
  history.pushState(data, null, url);
};

export const initRouter = () => {
  document.addEventListener("click", (e) => {
    if (e.target.tagName === "A" && isSameOrigin(e.target.href)) {
      e.preventDefault();
      navigate(e.target.href);
    }
  });
  window.addEventListener("popstate", () => {
    renderPage();
  });
  renderPage();
};

export const renderPage = () => {
  const path = window.location.pathname;
  render(getPage(path));
};

export const getPage = (route) => {
  const routes = {
    "/": () => {
      return `<h1>Home page</h1>`;
    },
  };

  return routes[route]();
};

export const render = (content) => {
  const app = document.getElementById("app");
  app.innerHTML = content;
};
