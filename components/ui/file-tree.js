import Store from "../../store.js";
export default class FileTree extends HTMLElement {
  static name = "file-tree";

  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const styles = this.getStyles();
    const template = this.getTemplate();

    this.innerHTML = `${styles} ${template}`;
  }

  getStyles() {
    return `
    <style>
    .file-tree {
      box-sizing: border-box;
      padding: 4rem;
      height: 100%;
      min-height: 100vh;
      border: 1px solid #ccc;
      width: 100%;
      max-width: 250px;
      background-color: #f3f3f3;
    }
    
    .file-list {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }
    
    .file-list__item {
      cursor: pointer;
    }
    </style>
    `;
  }

  getTemplate() {
    return `
    <div class="file-tree">
      <ul class="file-list">
        ${this.getNotesList()}
      </ul>
    </div>
    `;
  }

  getNotesList() {
    const notes = this.getNotes();
    return notes
      .map((note, index) => {
        return `<li class="file-list__item" data-index="${index}">${note.title}</li>`;
      })
      .join("");
  }


  getNotes(){
    const notes = Store.getInstance().getState().notes;
    return notes;
  }
}
