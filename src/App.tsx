import Todos from "./components/Todos";
import Todo from "./models/todo"; // 1

function App() {
  // 1
  const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];

  return (
    <div>
      {/* 2 */}
      <Todos items={todos} />
    </div>
  );
}

export default App;
