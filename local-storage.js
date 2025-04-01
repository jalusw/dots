const NOTES_STORAGE_PATH = "notes";

class NoteStorage {
  static getNotes() {
    return JSON.parse(localStorage.getItem(NOTES_STORAGE_PATH)) || [];
  }

  static append(note) {
    const notes = NoteStorage.getNotes();
    notes.push(note);
    localStorage.setItem(NOTES_STORAGE_PATH, JSON.stringify(notes));
  }

  static remove(index) {
    const notes = NoteStorage.getNotes();
    notes.splice(index, 1);
    localStorage.setItem(NOTES_STORAGE_PATH, JSON.stringify(notes));
  }

  static update(index, note) {
    const notes = NoteStorage.getNotes();
    notes[index] = note;
    localStorage.setItem(NOTES_STORAGE_PATH, JSON.stringify(notes));
  }

  static clear() {
    localStorage.removeItem(NOTES_STORAGE_PATH);
  }
}
