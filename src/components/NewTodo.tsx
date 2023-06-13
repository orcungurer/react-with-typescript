import { useRef } from "react"; // 1

// 6
const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null); // 1, 2

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value; // 3

    // 4
    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText); // 5
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">New Todo</label>
      {/* 1 */}
      <input id="text" type="text" ref={todoTextInputRef} />
      <button>Submit</button>
    </form>
  );
};

export default NewTodo;
