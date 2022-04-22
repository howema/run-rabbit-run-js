import notesList from "../../api/notes.json"

export function notes() {
    for (let text in notesList) {
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
