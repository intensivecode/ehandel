import { CSSProperties } from "react";
import styled from "styled-components";
import { ITodo } from "./types/Todo";

interface Props extends ITodo {
  onDelete: (id: string) => void;
  onMarkIsDone: (id: string) => void;
}

function Todo({ id, description, isDone, onDelete, onMarkIsDone }: Props) {
  const styles: CSSProperties = {
    color: isDone ? "green" : "black",
  };

  return (
    <TodoListItem>
      {description}
      <button onClick={() => onDelete(id)}>Delete</button>
      <button onClick={() => onMarkIsDone(id)}>Done</button>
    </TodoListItem>
  );
}

export default Todo;

const TodoListItem = styled.li`
  cursor: pointer;
  color: red;
`;
