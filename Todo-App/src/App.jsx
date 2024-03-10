import AddToForm from "./Component/AddToForm";
import TaskList from "./Component/TaskList";
import "./App.scss";

function App() {
  return (
    <div className="todoApp">
      <h1>Todo App</h1>
      <AddToForm />
      <TaskList />
    </div>
  );
}

export default App;
