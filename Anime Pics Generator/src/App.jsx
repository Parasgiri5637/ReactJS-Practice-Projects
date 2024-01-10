import { useReducer } from "react";

import "./App.scss";

const initialState = {
  animeName: "",
  animeUrl: "",
  isLoading: false,
  error: "",
  hide: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "setHide":
      return { ...state, hide: action.payload };
    case "setLoading":
      return { ...state, isLoading: action.payload };
    case "setError":
      return { ...state, error: action.payload };
    case "setAnimeUrl":
      return { ...state, animeUrl: action.payload };
    case "setAnimeName":
      return { ...state, animeName: action.payload };
    case "displayError":
      return { ...state, error: action.payload };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { animeName, animeUrl, isLoading, error, hide } = state;

  async function fetchAnime() {
    // setHide(true);
    dispatch({ type: "setHide", payload: true });
    try {
      dispatch({ type: "setLoading", payload: true });

      dispatch({ type: "setError", payload: "" });
      const res = await fetch(`https://api.catboys.com/img`);
      if (!res.ok) throw new Error(res.statusText);
      const data = await res.json();

      dispatch({ type: "setAnimeUrl", payload: data.url });
      dispatch({ type: "setAnimeName", payload: data.artist });
      dispatch({ type: "setError", payload: "" });
    } catch (e) {
      dispatch({ type: "displayError", payload: e.message });
    } finally {
      dispatch({ type: "setLoading", payload: false });
    }
  }

  function handleHide() {
    dispatch({ type: "setHide", payload: false });
    dispatch({ type: "setAnimeUrl", payload: "" });
    dispatch({ type: "setAnimeName", payload: "" });
  }

  return (
    <div className="container">
      <Heading />
      <Button onClick={fetchAnime} isLoading={isLoading} />
      {hide && (
        <>
          {error && <Error message={error} />}

          {hide && !error && (
            <AnimeContainer
              animeName={animeName}
              animeUrl={animeUrl}
              isLoading={isLoading}
              onHide={handleHide}
            />
          )}
        </>
      )}
    </div>
  );
}

function Heading() {
  return <h1 className="heading">Anime Pics Generator</h1>;
}

function Error({ message }) {
  return <h2>{message}</h2>;
}

function Button({ onClick, isLoading }) {
  return (
    <button className="btn" onClick={onClick} disabled={isLoading}>
      {isLoading ? "Loading..." : "Get Anime"}
    </button>
  );
}

function AnimeContainer({ animeName, animeUrl, isLoading, onHide }) {
  return (
    <div className="anime_container">
      <span className="back" onClick={() => onHide()}>
        &larr;
      </span>
      <img src={isLoading ? "/src/spinner.svg" : animeUrl} alt={animeName} />
      <h3>{isLoading ? "Loading..." : animeName}</h3>
    </div>
  );
}
export default App;

//* =============================================== with useState

/*
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [animeUrl, setAnimeUrl] = useState("");
  const [animeName, setAnimeName] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hide, setHide] = useState(false);

  async function fetchAnime() {
    setHide(true);
    try {
      setLoading(true);
      setError("");
      const res = await fetch(`https://api.catboys.com/img`);
      if (!res.ok) throw new Error(res.statusText);
      const data = await res.json();
      setAnimeUrl(data.url);
      setAnimeName(data.artist);
      setError("");
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  function handleHide() {
    setHide(false);
    setAnimeName("");
    setAnimeUrl("");
  }

  return (
    <div className="container">
      <Heading />
      <Button onClick={fetchAnime} isLoading={isLoading} />
      {hide && (
        <>
          {error && <Error message={error} />}

          {hide && !error && (
            <AnimeContainer
              animeName={animeName}
              animeUrl={animeUrl}
              isLoading={isLoading}
              onHide={handleHide}
            />
          )}
        </>
      )}
    </div>
  );
}

function Heading() {
  return <h1 className="heading">Anime Pics Generator</h1>;
}

function Error({ message }) {
  return <h2>{message}</h2>;
}

function Button({ onClick, isLoading }) {
  return (
    <button className="btn" onClick={onClick} disabled={isLoading}>
      {isLoading ? "Loading..." : "Get Anime"}
    </button>
  );
}

function AnimeContainer({ animeName, animeUrl, isLoading, onHide }) {
  return (
    <div className="anime_container">
      <span className="back" onClick={() => onHide()}>
        &larr;
      </span>
      <img src={isLoading ? "/src/spinner.svg" : animeUrl} alt={animeName} />
      <h3>{isLoading ? "Loading..." : animeName}</h3>
    </div>
  );
}
export default App;

*/
