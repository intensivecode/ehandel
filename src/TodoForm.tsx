import { ChangeEvent, FormEvent, useState } from "react";
import { ITodo } from "./types/Todo";

interface Props {
  onAdd: (todo: ITodo) => void;
}

function TodoForm({ onAdd }: Props) {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const todo: ITodo = { id: "4", description: value, isDone: false };

    onAdd(todo);

    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={handleChange} />
    </form>
  );
}

export default TodoForm;
