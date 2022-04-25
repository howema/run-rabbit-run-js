import notesList from "../../api/notes.json"
import createNoteBlock from "./createNoteBlock"

export function filterByTag(whichTag) {
    for (let text in notesList) {
            if (notesList[text].tag === whichTag) {
                createNoteBlock(text, notesList)
            }
    }
}
