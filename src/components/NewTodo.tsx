const NewTodo = () => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">New Todo</label>
      <input id="text" type="text" />
      <button>Submit</button>
    </form>
  );
};

export default NewTodo;