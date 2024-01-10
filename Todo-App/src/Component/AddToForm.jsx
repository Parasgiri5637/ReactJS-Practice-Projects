import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../ToolKit/Reducer";

export default function AddToForm() {
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputVal) return;
    dispatch(addTodo(inputVal));
    setInputVal("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Todo..."
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
