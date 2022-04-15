import notesList from "../../api/notes.json"

export function notes() {
    return notesList;
}

// export default()=>"some strang doesnt matter";

// export const noteGrab = async (noteId) => {
//   try {
//     const result = await fetch(`http://localhost:8080/notes.html`);
//     const note = await result.json();
//     return note;
//   } catch (err) {
//     return {
//         note: 'cant find your note, sorry',
//     };
//   }
// };

