import { useEffect, useState } from "react";

import "./App.scss";

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [storeWords, setStoreWords] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchWords() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error(res.statusText);

        const data = await res.json();

        setStoreWords(data);
        setError("");
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (!searchWord) return;
    fetchWords();

    return () => controller.abort();
  }, [searchWord]);

  return (
    <div className="container">
      <h1 className="heading">English Dictionary</h1>
      <input
        type="text"
        className="input"
        placeholder="Search a Word"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
      />
      <p className="info-text">Type a word and press enter</p>
      {searchWord && (
        <>
          {isLoading && <Loader />}
          {!isLoading && !error && <Result storeWords={storeWords} />}
          {error && <Error message={error} />}
        </>
      )}
    </div>
  );
}

function Error({ message }) {
  return <p className="error">{message}</p>;
}

function Loader() {
  return <p>Loading...</p>;
}

function Result({ storeWords }) {
  return (
    <div className="meaning-container">
      <p>
        Word Title:{" "}
        <span className="title">{storeWords && storeWords[0].word}</span>
      </p>
      <p>
        Meaning:
        <span className="meaning">
          {storeWords && storeWords[0].meanings[0].definitions[0].definition}
        </span>
      </p>
      <audio
        src={
          storeWords &&
          storeWords[0].phonetics[1] &&
          storeWords[0].phonetics[1].audio
        }
        controls
        id="audio"
      ></audio>
    </div>
  );
}

export default App;
