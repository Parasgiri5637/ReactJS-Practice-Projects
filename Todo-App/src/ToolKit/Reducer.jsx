import { createSlice, nanoid } from "@reduxjs/toolkit";

function handleLocalStorage() {
  return JSON.parse(localStorage.getItem("todo")) || [];
}

function handleSaveTodo(todo) {
  return localStorage.setItem("todo", JSON.stringify(todo));
}

const initialState = {
  todo: handleLocalStorage(),
};
const reducers = {
  addTodo: (state, action) => {
    const newTodo = {
      id: nanoid(),
      text: action.payload,
    };
    handleSaveTodo(state.todo.concat(newTodo));
    state.todo.push(newTodo);
  },
  editTodo: (state, action) => {
    const { id, text } = action.payload;
    console.log(id, text);
    const editTodo = state.todo.find((todo) => todo.id === id);
    if (editTodo) {
      editTodo.text = text;
    }
    handleSaveTodo(state.todo);
  },
  deleteTodo: (state, action) => {
    state.todo = state.todo.filter((todo) => todo.id !== action.payload);
    handleSaveTodo(state.todo);
  },
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers,
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
