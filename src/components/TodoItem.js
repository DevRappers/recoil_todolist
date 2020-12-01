import React from "react";
import { useSetRecoilState } from "recoil";
import { todosState } from "../recoil/todos";

const TodoItem = ({ data }) => {
  const setTodos = useSetRecoilState(todosState);

  const removeTodo = () => {
    setTodos(todos => todos.filter(todo => todo.id !== data.id));
  };

  return (
    <div>
      <input type="checkbox" />
      <span>{data.text}</span>
      <span onClick={removeTodo}>X</span>
    </div>
  );
};

export default TodoItem;
