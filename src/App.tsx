import { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<any>([]);

  const handleChange = (e: any) => {
    setTodo(e.target.value);
  };

  const handleSubmit = () => {
    const data = { id: todos.length + 1, value: todo };
    setTodos([...todos, data]);
    setTodo("");
  };

  return (
    <div className="App">
      <div>
        <div>
          <input value={todo} onChange={handleChange} />
        </div>
        <div>
          <button onClick={handleSubmit}>Add Todo</button>
        </div>
      </div>
    </div>
  );
};

export default App;
