import "./App.css";
import CompoA from "./CompoA";
import { createContext } from "react";

const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
    <>
      <FirstName.Provider value="Goswami">
        <LastName.Provider value="Rudragiri">
          <CompoA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
}

export default App;
export { FirstName, LastName };
