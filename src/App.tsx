import Todos from "./components/Todos";
import Todo from "./models/todo"; // 1
import NewTodo from "./components/NewTodo"; // 3
import { useState } from "react";

function App() {
  // 1
  // const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];
  const [todos, setTodos] = useState<Todo[]>([]); // 5

  // 4
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText); // 6

    // 7
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  return (
    <div>
      {/* 3, 4 */}
      <NewTodo onAddTodo={addTodoHandler} />
      {/* 2 */}
      <Todos items={todos} />
    </div>
  );
}

export default App;
