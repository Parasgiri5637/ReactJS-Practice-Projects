import Note from "./Note";
import AddNote from "./AddNote";

export default function NotesList({ notes, handleAddNote, onDelete }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          onDelete={onDelete}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
}
