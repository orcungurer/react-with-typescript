import React, { useState } from "react";
import Todo from "../models/todo";

// 9
type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void; // 10
  removeTodo: (id: string) => void;
};

// 1, 12
export const TodosContext = React.createContext<
  // 3
  // {
  //   items: Todo[];
  //   addTodo: () => void;
  //   removeTodo: (id: string) => void;
  // }
  // 9
  TodosContextObj
>({
  // 2
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

// 4, 13
const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  // 6
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  // 7, 9
  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  // 5, 8
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider; // 11