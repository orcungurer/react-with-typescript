import classes from "./TodoItem.module.css";

// 2
const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = (props) => {
  return (
    // 1
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default TodoItem;
