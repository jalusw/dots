import { isSameOrigin } from "./utils.js";

export default class Router {
  static #routes =  {
    "/": "<home-screen></home-screen>",
    "/notepad": "<notepad-screen></notepad-screen>",
  }

  static get routes(){
    return Router.#routes;
  }

  static setupRouter(){
    document.addEventListener("click", (e) => {
      if (e.target.tagName === "A" && isSameOrigin(e.target.href)) {
        e.preventDefault();
        navigate(e.target.href);
      }
    });

    window.addEventListener("popstate", Router.render);

    Router.render();
  }

  static navigate(url, data) {
    history.pushState(data, null, url);
  }
  
  static render(){
    const app = document.getElementById("app");
    const path = window.location.pathname;
    const content = Router.routes[path];

    app.innerHTML = content;
  };
}

