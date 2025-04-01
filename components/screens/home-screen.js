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
    .container {
      display: flex;
      width: 100%;
    }

    file-tree{
      flex: 1;
      max-width: 250px;
    }

    markdown-editor {
      flex: 1;
    }

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
