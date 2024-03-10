import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <TipCalculator />
    </>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  const totalTip = Math.floor(bill * ((tip1 + tip2) / 2 / 100));

  function reSet() {
    setBill("");
    setTip1(5);
    setTip2(5);
  }

  return (
    <div>
      <TotalBill bill={bill} setBill={setBill} />
      <Tip text={`How did you like the service `} tip={tip1} setTip={setTip1} />
      <Tip
        text={`How did your friend like the service `}
        tip={tip2}
        setTip={setTip2}
      />
      {bill ? <DisplayBill bill={+bill} totalTip={totalTip} /> : null}
      {bill ? <button onClick={() => reSet()}>Reset</button> : null}
    </div>
  );
}

function TotalBill({ bill, setBill }) {
  return (
    <div className="bill">
      <p>How much was the bill ?</p>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      />
    </div>
  );
}

function Tip({ text, tip, setTip }) {
  return (
    <div className="tip">
      <p>{text}</p>
      <select value={tip} onChange={(e) => setTip(+e.target.value)}>
        <option value={10}>it was good(10%)</option>
        <option value={5}>it was okay(5%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
        <option value={0}>Dissatisfied(0%)</option>
      </select>
    </div>
  );
}

function DisplayBill({ bill, totalTip }) {
  return (
    <div className="display">
      <p>
        You pay ${`${bill + totalTip}`} (${`${bill}`} + ${`${totalTip}`})
      </p>
      <p>Person1: ${`${Math.floor(bill / 2 + totalTip / 2)}`}</p>
      <p>Person2: ${`${Math.floor(bill / 2 + totalTip / 2)}`}</p>
    </div>
  );
}

export default App;
