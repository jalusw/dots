import Router from "./router.js";

import HomeScreen from "./components/screens/home-screen.js";
import MarkdownEditor from "./components/ui/markdown-editor.js";
import FileTree from "./components/ui/file-tree.js";

class App {
  static init() {
    document.addEventListener("DOMContentLoaded", App.bootstrap);
  }

  static bootstrap() {
    Router.setupRouter();
    App.registerServiceWorker();
    App.registerComponents();
  }

  static registerComponents() {
    customElements.define(HomeScreen.name, HomeScreen);
    customElements.define(MarkdownEditor.name, MarkdownEditor);
    customElements.define(FileTree.name, FileTree);
  }

  static registerServiceWorker() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("service-worker.js").catch((error) => {
        console.error("Service Worker Registration Failed", error);
      });
    }
  }
}

App.init();
