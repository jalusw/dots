export default class Notepad extends HTMLElement {
  static name = "markdown-editor";

  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    this.registerShortcut();
  }

  registerShortcut(){
    document.addEventListener("keydown", (event) => {
      if(event.ctrlKey && event.key === "s"){
        console.log("Ctrl + s triggered")
        const content = this.querySelector(".notepad").innerHTML;
        console.log(content)
        event.preventDefault();
      }
    })
  }

  render() {
    const styles = this.getStyles();
    const template = this.getTemplate();

    this.innerHTML = `${styles} ${template}`;
  }

  getStyles(){
    return `
    <style>
    .notepad {
      margin: auto;
      padding: 2rem;
      width: 100%;
      max-width: 980px;

      line-height: 1.5;
    }

    h1 {
      font-weight: bold;
      font-size: 4rem;
    }
    </style>
    `
  }

  getTemplate(){
    return `
    <div class="notepad" contentEditable>
      <h1 class="">lorem ipsum </h1>
    </div>
    `;
  }
}
