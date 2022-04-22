import notesList from "../../api/notes.json"


// get req with conditional
// only render the notes tagged with "Work"
// static for now- dont necessarily want 6 show pages

export function bePicky() {
    for (let text in notesList) {
            if (notesList[text].tag === "Work") {
                let noteText = document.createTextNode(notesList[text].note);
                console.log(noteText.wholeText);
                
                let note = document.createElement("div");
                note.className = "quotes";
                note.classList.add("quotes");
                
                let noteLi = document.createElement("li");
                
                note.appendChild(noteLi);
                noteLi.appendChild(noteText)
                
                const notesContainer = document.getElementById("notes-container");
                notesContainer.appendChild(note);
            }
    }
}

