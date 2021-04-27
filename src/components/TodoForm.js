import { useState } from "react";
import "./TodoForm.css";

const TodoForm = (props) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const inputChangeHandler = (event) => {
    setEnteredTodo(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const todoData = {
      title: enteredTodo,
    };
    props.onAddTodo(todoData);

    setEnteredTodo("");
  };

  return (
    <div className="todo-form">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Add To-do"
          value={enteredTodo}
          required
          onChange={inputChangeHandler}
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
