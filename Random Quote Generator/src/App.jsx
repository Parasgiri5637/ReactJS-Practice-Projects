import { useState } from "react";

import "./App.scss";

function App() {
  const [quote, setQuote] = useState(
    "You’re braver than you believe, and stronger than you seem, and smarter than you"
  );
  const [author, setAuthor] = useState("A.A. Mine");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchQuote() {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(`https://type.fit/api/quotes`);
      const data = await res.json();
      const randomQuote = await data[Math.floor(Math.random() * data.length)];
      setQuote(randomQuote.text);
      setAuthor(randomQuote.author);
      setError("");
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <Title />
      {isLoading && <Loader />}
      {!isLoading && !error && <Quotes quote={quote} author={author} />}
      {error && <Error error={error} />}
      <Button fetchQuote={fetchQuote} isLoading={isLoading} />
    </div>
  );
}

function Loader() {
  return <p className="quote">Updating...</p>;
}

function Error({ error }) {
  return <p className="quote">{error}</p>;
}

function Title() {
  return <h1 className="heading">Random Quote Generator</h1>;
}

function Quotes({ quote, author }) {
  return (
    <>
      <p className="quote">{quote}</p>
      <p className="author">~ {author}</p>
    </>
  );
}

function Button({ fetchQuote, isLoading }) {
  return (
    <button className="btn" onClick={() => fetchQuote()} disabled={isLoading}>
      {isLoading ? "Loading..." : "Get Quote"}
    </button>
  );
}

export default App;
