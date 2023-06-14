import Todo from "../models/todo"; // 1
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

// 1, 5, 6
const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        // <li key={item.id}>{item.text}</li> // 2
        // 3
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} // 4, 7
        />
      ))}
    </ul>
  );
};

export default Todos;
