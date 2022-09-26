import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { ITodo } from "./types/Todo";

const todosInDb: ITodo[] = [
  { id: "1", description: "do this...", isDone: false },
  { id: "2", description: "then this...", isDone: false },
  { id: "3", description: "then that...", isDone: false },
];

function App() {
  const [todos, setTodos] = useState<ITodo[]>(todosInDb);

  const handleDelete = (id: string) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const handleMarkIsDone = (id: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = true;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const handleAdd = (todo: ITodo) => {
    setTodos([todo, ...todos]);
  };

  return (
    <div>
      <TodoForm onAdd={handleAdd} />
      <TodoList
        todos={todos}
        onDelete={handleDelete}
        onMarkIsDone={handleMarkIsDone}
      />
    </div>
  );
}

export default App;
