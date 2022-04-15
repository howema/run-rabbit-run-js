import notesList from "../../api/notes.json"

// export function notes() {
//     return notesList[1].note;
// }

        
        export function notes() {
            let newArray = [];
            for (let i = 0; i < notesList.length; i++) {
            newArray.push(notesList[i].note);
        }
        return newArray;
        }
