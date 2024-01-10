import { useEffect, useState } from "react";
export default function AddNote({ addNotes }) {
  const [noteText, setNoteText] = useState("");
  const CharctorLimit = 200;
  function handleChangeNote(e) {
    if (CharctorLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  }

  function handleSaveNote() {
    if (noteText.trimStart().length > 0) {
      addNotes(noteText);
      setNoteText("");
    }
  }

  useEffect(() => {
    function callBack(e) {
      if (e.key === "Enter") {
        handleSaveNote();
      }
    }

    document.addEventListener("keydown", callBack);
    return () => document.removeEventListener("keydown", callBack);
  });

  useEffect(() => {
    function callBack(e) {
      if (e.key === "Escape") {
        setNoteText("");
      }
    }

    document.addEventListener("keydown", callBack);
    return () => document.removeEventListener("keydown", callBack);
  });

  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        value={noteText}
        onChange={handleChangeNote}
      ></textarea>
      <div className="note-footer">
        <small>{CharctorLimit - noteText.length} Remaining</small>
        <button className="save" onClick={() => setNoteText("")}>
          Clear
        </button>
        <button className="save" onClick={handleSaveNote}>
          Save
        </button>
      </div>
    </div>
  );
}
