import useFetchJokes from "./useFetchJokes";

import "./App.scss";

//* Component = Component just peac of UI which return react element which writen in JSX.
//* JSX = JSX is a syntax extension to JavaScript.
//* JSX allow to write html,JS,css Combine,
//* JSX is a syntax extension to JavaScript.
//* we can enter javascript mode by {} in JSX
//* JSX will convert to react.createElement()
//* React will make a virtual DOM and virtual dom is just object.
//* now React has fiber+deffin system
//* React will give virtual dom object to fiber.

function App() {
  //* Import data from Cutome Hooks
  //* Custome are just like regular function but we can use react hooks and recieve perameter in that function just like function in JS
  //* Custome hook must return something otherwise won't work
  //* we must import custome hook in top so we can use in our code
  const { jokes, error, isLoading, fetchJokes } = useFetchJokes();

  return (
    <div className="container">
      <h2 className="title">Dad's Jokes Generator</h2>
      {/* Check if Loading is true or not. if true then spiner will display if
       false then not display */}
      {isLoading && <Spiner />}
      {/* Check if error is true or not. if true then error will display if //*
      false then not display */}
      {error && <Error message={error} />}
      {/* here we check when there is not loading or error then display
      useFetchJokes */}
      {!isLoading && !error && (
        <h4 className="jokes">{jokes || "Dad's Jokes"}</h4>
      )}
      {/* here we fetch api data with onCLick event in event we calling function
      that will fetch our data from server */}
      <button className="btn" onClick={() => fetchJokes()} disabled={isLoading}>
        {isLoading ? "fetching..." : "TELL ME A JOKE "}
      </button>
    </div>
  );
}

function Error({ message }) {
  return <p>{message}</p>;
}

function Spiner() {
  return <p>Loading...</p>;
}

export default App;
