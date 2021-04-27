import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";
import ProgressCalculator from "./ProgressCalculator/ProgressCalculator";
import "./NewTodo.css";

const DUMMY_TODO = [];
const NewTodo = () => {
  const [enteredTodoList, setEnteredTodoList] = useState(DUMMY_TODO);
  const [progressPrecentage, setProgressPercentage] = useState(0);

  const length = enteredTodoList.length;

  const addTodoHandler = (enteredTodoData) => {
    const todoData = {
      ...enteredTodoData,
      id: Math.random().toString(),
    };

    setEnteredTodoList((prevTodos) => [...prevTodos, todoData]);
  };

  const progressTracker = (noOfTasksCompleted) => {
    const calculateProgress = Math.ceil((noOfTasksCompleted / length) * 100);
    setProgressPercentage(calculateProgress);
  };

  return (
    <div className="container">
      <ProgressCalculator progressMade={progressPrecentage} />
      <div className="new-todo">
        <TodoForm onAddTodo={addTodoHandler} />
        <ul className="todo-List">
          {enteredTodoList.map((todos) => (
            <TodoItems
              key={todos.id}
              title={todos.title}
              todoListLength={length}
              onProgress={progressTracker}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewTodo;
