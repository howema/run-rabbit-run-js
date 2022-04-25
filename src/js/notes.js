import notesList from "../../api/notes.json"

export function notes() {
    for (let text in notesList) {
        createNoteBlock(text, notesList);
    }
}

export function createNoteBlock(text, notesList) {
        let noteText = document.createTextNode(notesList[text].note);
        console.log(noteText.wholeText);
        
        let note = document.createElement("div");
        note.classList.add("quotes");
    
        let noteP = document.createElement("p");
        noteP.classList.add("noteP");
            
        note.appendChild(noteP);
        noteP.appendChild(noteText);
    
        const notesContainer = document.getElementById("notes-container");
        notesContainer.appendChild(note);
}
