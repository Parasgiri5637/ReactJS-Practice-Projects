import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../ToolKit/Reducer";

export default function AddToForm({ id, text, onUpdate }) {
  const [inputVal, setInputVal] = useState(text);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputVal) return;

    dispatch(editTodo({ id, text: inputVal }));
    console.log(id, inputVal);
    setInputVal("");
    onUpdate();
  }

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <input
        className="editInput"
        type="text"
        placeholder="Update Todo..."
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button>Update</button>
    </form>
  );
}
