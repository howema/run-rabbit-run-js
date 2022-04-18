
import notesList from "../../api/notes.json"

export function notes() {
    let note = document.createElement("div");
    note.className = "quote";
    note.classList.add("quote"); //.place, .toggle
    let noteText = document.createTextNode("words");
    
    note.appendChild(noteText)
    const notesContainer = document.getElementById("notes-container");
    notesContainer.appendChild(note);
    return notesList;
}

        
        // export function notes() {
        //     let newArray = [];
        //     for (let i = 0; i < notesList.length; i++) {
        //     newArray.push(notesList[i].note);
        // }
        // return newArray;
        // }


        //query selector...
