export default class FileTree extends HTMLElement {
  static name = "file-tree";

  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = ``;
  }
}
