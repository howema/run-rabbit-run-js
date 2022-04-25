import notesList from "../../api/notes.json"
import { createNoteBlock } from "./notes"

export function bePicky() {
    for (let text in notesList) {
            if (notesList[text].tag === "Work") {
                createNoteBlock(text, notesList)
            }
    }
}
