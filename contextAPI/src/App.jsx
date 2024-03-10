import { createContext } from "react";
import "./App.css";
import CompoA from "./CompoA";

const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
    <>
      <FirstName.Provider value="Parasgiri">
        <LastName.Provider value={"Goswami"}>
          <CompoA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
}

export default App;
export { FirstName, LastName };
// use Context API
//  step 1 = create "createContext()" state
// 	after create createCOntext api you need to provide so we can use context api
//  step 2 = provider
// 	provider will provide data then after getting data we need to consume data so we need create consume so we can use provider data
//  step 3 = consumer
