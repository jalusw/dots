import { initRouter } from "./router.js";

const registerServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/src/service-worker.js")
      .catch((error) => {
        console.error("Service Worker Registration Failed", error);
      });
  }
};

// Bootstrap application
document.addEventListener("DOMContentLoaded", () => {
  initRouter();
  registerServiceWorker();
});
