import Todo from "../models/todo"; // 1

// 1
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li> // 2
      ))}
    </ul>
  );
};

export default Todos;
