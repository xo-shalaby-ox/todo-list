import React, { useState } from "react";
export const EditTodoForms = ({ editTodo, task }) => {
  const [Value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(Value, task.id);
    setValue("");
  };
  return (
    <form className="EditTodoForms" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Update Task"
        value={Value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};
