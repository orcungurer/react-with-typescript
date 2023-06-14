class Todo {
  // 1: properties
  id: string;
  text: string;

  // 2
  constructor(todoText: string) {
    // 3
    this.id = new Date().toISOString();
    this.text = todoText;
  }
}

export default Todo;
