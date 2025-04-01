import Router from "../../router.js";
import NoteStorage from "../../storage.js";
import { parse } from "../../utils.js";

export default class Notepad extends HTMLElement {
  static name = "markdown-editor";

  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    this.registerShortcut();
    this.registerEvents();
  }

  registerShortcut() {
    document.addEventListener("keydown", (event) => {
      if (event.ctrlKey && event.key === "s") {
        console.log("Ctrl + s triggered");

        const content = this.querySelector(".notepad").innerHTML;

        const note = {
          id: Date.now() + Math.random(),
          title: "Untitled",
          content: content,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };

        NoteStorage.append(note);
        Router.navigate("/notepad", note);

        event.preventDefault();
      }
    });
  }

  registerEvents() {
    const notepad = this.querySelector(".notepad");
  }

  render() {
    const styles = this.getStyles();
    const template = this.getTemplate();
    this.innerHTML = `${styles} ${template}`;
  }

  getStyles() {
    return `
    <style>
    .notepad {
      margin: auto;
      width: 100%;
      max-width: 66ch;
      padding-top: 4rem;
      box-sizing: border-box;
      line-height: 1.5;
    }
    </style>
    `;
  }

  getTemplate() {
    return `
    <div 
      class="notepad" 
      id="notepad"
      contentEditable
    ></div>
    `;
  }

}
