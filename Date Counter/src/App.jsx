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

  return (
    <>
      <div className="buttons">
        <div className="steps">
          <button onClick={() => SetStep(step - 1)}>-</button>
          <p>Step:{step}</p>
          <button onClick={() => SetStep(step + 1)}>+</button>
        </div>
        <div className="counters">
          <button onClick={() => SetCount(count - step)}>-</button>
          <p>Count:{count}</p>
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
    </>
  );
}
// Today is Mon Jun 21 2127
export default App;
