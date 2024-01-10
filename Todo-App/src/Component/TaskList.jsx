import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../ToolKit/Reducer";
import { useState } from "react";
import EditToForm from "./EditToForm";

export default function TaskList() {
  const [editTodo, setEditTodo] = useState(null);
  const todoList = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <>
      {todoList.map((item) => (
        <div className="taskList" key={item.id}>
          {editTodo === item.id && (
            <EditToForm
              id={item.id}
              text={item.text}
              onUpdate={() => setEditTodo(null)}
            />
          )}
          {editTodo !== item.id && (
            <>
              <input type="text" readOnly value={item.text} />
              <button onClick={() => setEditTodo(item.id)}>
                <BiEdit />
              </button>
              <button onClick={() => dispatch(deleteTodo(item.id))}>
                <AiFillDelete />
              </button>
            </>
          )}
        </div>
      ))}
    </>
  );
}
