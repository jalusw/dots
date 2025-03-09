document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  app.innerHTML = ``;

  const navigationLinks = Array.from(app.getElementsByTagName("a"));

  navigationLinks
    .filter((link) => new URL(link).origin == window.location.origin)
    .forEach((link) =>
      link.addEventListener("click", (e) => {
        e.preventDefault();
        window.history.pushState({}, null, e.target.href);
      }),
    );
});
