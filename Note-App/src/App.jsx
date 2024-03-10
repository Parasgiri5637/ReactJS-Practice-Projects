import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

import "./App.scss";

function App() {
  const [notes, setNotes] = useState(handleLocalStorage);
  const [searchText, setSearchText] = useState("");

  function handleLocalStorage() {
    return JSON.parse(localStorage.getItem("notes")) || [];
  }
  localStorage.setItem("notes", JSON.stringify(notes));

  function addNote(text) {
    const date = new Date().toLocaleDateString();
    const newNote = {
      id: nanoid(),
      text: text,
      date,
    };
    setNotes((prevNots) => [...prevNots, newNote]);
  }

  function handleDeleteNote(id) {
    setNotes((prevNots) => prevNots.filter((note) => note.id !== id));
  }

  return (
    <>
      <div className="container">
        <Header />
        <Search searchText={searchText} setSearchText={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          onDelete={handleDeleteNote}
        />
      </div>
    </>
  );
}

export default App;
