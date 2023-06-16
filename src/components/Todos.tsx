import Todo from "../models/todo"; // 1
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
// 8
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";

// 1, 5, 6
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext); // 9
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => ( // 10
        // <li key={item.id}>{item.text}</li> // 2
        // 3
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} // 4, 7, 11
        />
      ))}
    </ul>
  );
};

export default Todos;
