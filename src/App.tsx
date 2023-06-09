import Todos from "./components/Todos";
import Todo from "./models/todo"; // 1
import NewTodo from "./components/NewTodo"; // 3
import { useState } from "react";
import TodosContextProvider from "./store/todos-context"; // 11

function App() {
  // 1
  // const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];
  // const [todos, setTodos] = useState<Todo[]>([]); // 5

  // // 4
  // const addTodoHandler = (todoText: string) => {
  //   const newTodo = new Todo(todoText); // 6

  //   // 7
  //   setTodos((prevTodos) => {
  //     return prevTodos.concat(newTodo);
  //   });
  // };

  // // 9
  // const removeTodoHandler = (todoId: string) => {
  //   setTodos((prevTodos) => {
  //     return prevTodos.filter((todo) => todo.id !== todoId);
  //   });
  // };

  return (
    // 11
    <TodosContextProvider>
      {/* 3, 4 */}
      {/* <NewTodo onAddTodo={addTodoHandler} /> */}
      {/* 2, 8 */}
      {/* <Todos items={todos} onRemoveTodo={removeTodoHandler} /> */}
      {/* 10 */}
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
