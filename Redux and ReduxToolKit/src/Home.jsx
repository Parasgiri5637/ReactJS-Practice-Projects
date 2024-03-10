import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();

  const value = useSelector((state) => state.custom.c);

  function addInc() {
    dispatch({ type: "increment" });
  }
  function addDec() {
    dispatch({ type: "decrement" });
  }

  return (
    <div>
      <h2>{value}</h2>

      <button onClick={addInc}>Increment</button>
      <button onClick={addDec}>Decrement</button>
    </div>
  );
}

export default Home;
