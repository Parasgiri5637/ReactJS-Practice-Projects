import Note from "./Note";
import AddNote from "./AddNote";

export default function NoteList({ notes, handleAddNote, onDelete }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          deleteNotes={onDelete}
        />
      ))}
      <AddNote addNotes={handleAddNote} />
    </div>
  );
}
