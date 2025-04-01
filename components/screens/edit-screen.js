export default class EditScreen extends HTMLElement {
  static name = "edit-screen";

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
      .edit-screen {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        font-size: 2rem;
        background-color: #f8f9fa;
      }
    </style>
    `;
  }

  getTemplate() {
    return `
        <div class="edit-screen">
          <file-tree></file-tree>
          <markdown-editor></markdown-editor>
        </div>
        `;
  }
}
