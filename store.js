import NoteStorage from "./storage.js";

export default class Store {
  static instance;
  constructor() {
    if (Store.instance) {
      return Store.instance;
    }

    const notes = NoteStorage.getNotes();

    this.state = {
      notes: notes,
    };
    this.listeners = [];
    this.instance = this;
  }

  static getInstance() {
    if (Store.instance) {
      return Store.instance;
    }
    return new Store();
  }

  getState() {
    return this.state;
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.listeners.forEach((listener) => listener(this.state));
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      const index = this.listeners.indexOf(listener);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }
}
