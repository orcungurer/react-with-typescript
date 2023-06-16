import { useRef } from "react"; // 1
import classes from "./NewTodo.module.css";
// 7
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";

// 6
const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext); // 7
  const todoTextInputRef = useRef<HTMLInputElement>(null); // 1, 2

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value; // 3

    // 4
    if (enteredText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText); // 5, 8
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">New Todo</label>
      {/* 1 */}
      <input id="text" type="text" ref={todoTextInputRef} />
      <button>Submit</button>
    </form>
  );
};

export default NewTodo;
