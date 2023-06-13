import Todos from "./components/Todos";
import Todo from "./models/todo"; // 1
import NewTodo from "./components/NewTodo"; // 3

function App() {
  // 1
  const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];

  const addTodoHandler = (todoText: string) => {};

  return (
    <div>
      {/* 3 */}
      <NewTodo onAddTodo={addTodoHandler} />
      {/* 2 */}
      <Todos items={todos} />
    </div>
  );
}

export default App;
