import { useReducer } from "react";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./Components/NoteList";
import SearchBar from "./components/Search";
import Header from "./components/Header";

import "./App.scss";
function handleLocalStorage() {
  return JSON.parse(localStorage.getItem("notes")) || [];
}

function saveNotes(notes) {
  // console.log(notes);
  return localStorage.setItem("notes", JSON.stringify(notes));
}

const initialState = { notes: handleLocalStorage(), searchText: "" };

function reducer(state, action) {
  switch (action.type) {
    case "addNote":
      const newNote = { ...action.payload };
      console.log(...state.notes); // Just the new note, not the whole state
      saveNotes([...state.notes, newNote]); // Save updated notes array
      return { ...state, notes: [...state.notes, newNote] };

    case "deleteNote":
      const filteredNotes = state.notes.filter(
        (note) => note.id !== action.payload
      );
      saveNotes(filteredNotes); // Save updated notes array
      return { ...state, notes: filteredNotes };
    case "setSearchText":
      return { ...state, searchText: action.payload };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { notes, searchText } = state;
  // const [searchText, setSearchText] = useState("");

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  function addNote(text) {
    const date = new Date().toLocaleDateString();
    const newNote = {
      id: nanoid(),
      text: text,
      date,
    };
    // setNotes((prevNots) => [...prevNots, newNote]);
    dispatch({ type: "addNote", payload: newNote });
  }

  function handleDeleteNote(id) {
    // setNotes((prevNots) => prevNots.filter((note) => note.id !== id));
    dispatch({ type: "deleteNote", payload: id });
  }

  function setSearchText(value) {
    dispatch({ type: "setSearchText", payload: value });
  }

  return (
    <>
      <div className="container">
        <Header />
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
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

//* =========================================== with useState

/** 
 import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./Components/NoteList";
import SearchBar from "./components/Search";
import Header from "./components/Header";

import "./App.scss";

function App() {
  const [notes, setNotes] = useState(handleLocalStorage);
  const [searchText, setSearchText] = useState("");

  function handleLocalStorage() {
    return JSON.parse(localStorage.getItem("notes")) || [];
  }
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

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
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
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

 */
