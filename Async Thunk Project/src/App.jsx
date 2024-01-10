import "./App.css";
import Navbar from "./components/Navbar";
import CreateToForm from "./components/CreateToForm";
import EditToForm from "./components/EditToForm";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from "./components/Read";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<CreateToForm />} />
          <Route path="/read" element={<Read />} />
          <Route path="/edit/:id" element={<EditToForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
