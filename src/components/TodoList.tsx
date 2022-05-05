import React from "react";
import "./TodoList.css";

interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <span>
            <button onClick={props.onDeleteTodo.bind(null, todo.id)}>
              Delete
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
