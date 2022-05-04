import notesList from "../../api/notes.json"
import createNoteBlock from "./createNoteBlock.js"

export function notesAll() {
    for (let text in notesList) {
        createNoteBlock(text, notesList);
    }
}
