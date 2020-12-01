import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todosState } from "../recoil/todos";

const TodoInput = () => {
  const setTodo = useSetRecoilState(todosState);
  const [text, setText] = useState("");

  const onChange = e => {
    setText(e.target.value);
  };

  const addTodo = () => {
    setTodo(todos =>
      todos.concat({ id: todos.length + 1, text, completed: false })
    );
  };

  return (
    <div>
      <input
        type="text"
        onChange={onChange}
        value={text}
        placeholder="todo 입력"
      />
      <button onClick={addTodo}>추가</button>
    </div>
  );
};

export default TodoInput;
