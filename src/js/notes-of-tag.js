import notesList from "../../api/notes.json"
import { createNoteBlock } from "./notes"

export function bePicky(whichTag) {
    for (let text in notesList) {
            if (notesList[text].tag === whichTag) {
                createNoteBlock(text, notesList)
            }
    }
}
