import notesList from "../../api/notes.json"
import createNoteBlock from "./createNoteBlock"

export function notesAll() {
    for (let text in notesList) {
        createNoteBlock(text, notesList);
    }
}
