import React, { useState } from "react";
export const TodoForms = ({ addTodo }) => {
  const [Value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(Value);
    setValue("");
  };
  return (
    <form className="TodoForms" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="what Is The Task Today"
        value={Value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
