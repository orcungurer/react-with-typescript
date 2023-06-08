import Todo from "../models/todo"; // 1
import TodoItem from "./TodoItem";

// 1
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        // <li key={item.id}>{item.text}</li> // 2
        <TodoItem key={item.id} text={item.text} /> // 3
      ))}
    </ul>
  );
};

export default Todos;