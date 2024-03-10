import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const [step, SetStep] = useState(1);
  const [count, SetCount] = useState(0);

  const date = new Date();

  date.setDate(date.getDate() + count);
  console.log(date);

  function reSet() {
    SetStep(1);
    SetCount(0);
  }

  return (
    <div className="dateCounter">
      <div className="buttons">
        <div className="range">
          <input
            type="range"
            min="0"
            max="10"
            value={step}
            onChange={(e) => SetStep(+e.target.value)}
          />
          <p>Range:{step}</p>
        </div>
        <div className="counters">
          <button onClick={() => SetCount(count - step)}>-</button>
          <input
            type="text"
            value={count}
            onChange={(e) => SetCount(e.target.value)}
            readOnly
          />
          <button onClick={() => SetCount(count + step)}>+</button>
        </div>
      </div>

      <h2 className="date">
        {count === 0
          ? "Todays is"
          : count >= 1
          ? `${count} days from today is`
          : `${count} days ago was`}
        {date.toDateString()}
      </h2>

      {step !== 1 || count !== 0 ? (
        <button className="reset" onClick={reSet}>
          Reset
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
// Today is Mon Jun 21 2127
export default App;
