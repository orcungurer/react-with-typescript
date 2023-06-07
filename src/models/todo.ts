class Todo {
  // 1
  id: string;
  text: string;

  // 2
  constructor(todoText: string) {
    // 3
    this.id = new Date().toDateString();
    this.text = todoText;
  }
}

export default Todo;
