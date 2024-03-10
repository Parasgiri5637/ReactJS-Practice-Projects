import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState();
  const [fromCurrentCurrency, setFromCurrrentCurrency] = useState("USD");
  const [toCurrentCurrency, setToCurrentCurrency] = useState("INR");
  const [output, setOutput] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    if (!inputValue) {
      setOutput(0);
      return;
    }
    if (!(fromCurrentCurrency === toCurrentCurrency)) return;

    async function fetchData() {
      try {
        setIsLoading(true);
        setError("");
        const targetCurrency = toCurrentCurrency;
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${inputValue}&from=${fromCurrentCurrency}&to=${targetCurrency}`,
          { signal: controller.signal }
        );

        if (!res.ok) throw new Error("Something went wrong");

        const data = await res.json();
        setOutput(data.rates[targetCurrency]);
        setIsLoading(false);
        setError("");
      } catch (e) {
        setError(e.message);
      }
    }
    fetchData();

    return () => controller.abort();
  }, [inputValue, fromCurrentCurrency, toCurrentCurrency]);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />
      <SelectOption
        value={fromCurrentCurrency}
        onChange={setFromCurrrentCurrency}
      />
      <SelectOption value={toCurrentCurrency} onChange={setToCurrentCurrency} />

      {isLoading && <Loader />}
      {!isLoading && !error && <OutPut result={output} />}
      {error && <ErrorMessage message={error} />}
    </div>
  );
}

function SelectOption({ value, onChange }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="CAD">CAD</option>
      <option value="INR">INR</option>
    </select>
  );
}

function OutPut({ result }) {
  return <p>Result : {result}</p>;
}

function ErrorMessage({ message }) {
  return <p>{message}</p>;
}

function Loader() {
  return <p>Loading...</p>;
}

export default App;
