import Todo from "./Todo";
import { ITodo } from "./types/Todo";

interface Props {
  todos: ITodo[];
  onDelete: (id: string) => void;
  onMarkIsDone: (id: string) => void;
}

function TodoList({ todos, onMarkIsDone, onDelete }: Props) {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          onMarkIsDone={onMarkIsDone}
          onDelete={onDelete}
          {...todo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
