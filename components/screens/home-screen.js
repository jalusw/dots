export default class HomeScreen extends HTMLElement {
  static name = "home-screen";

  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {}

  render() {
    const styles = this.getStyles();
    const template = this.getTemplate();

    this.innerHTML = `${styles} ${template}`;
  }

  getStyles() {
    return `
    <style>
    </style>
    `;
  }

  getTemplate() {
    return `
        <div class="container">
          <file-tree></file-tree>
          <markdown-editor></markdown-editor>
        </div>
        `;
  }
}
