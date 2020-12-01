import React from "react";
import { useRecoilValue } from "recoil";
import { todosState } from "../recoil/todos";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useRecoilValue(todosState);

  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} data={todo} />
      ))}
    </div>
  );
};

export default TodoList;
