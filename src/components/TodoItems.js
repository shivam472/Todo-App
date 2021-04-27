import { useState } from "react";
import "./TodoItems.css";

let count = 0;
const TodoItems = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const [, setState] = useState();

  let closeButtonHandler = () => {
    setIsClicked(true);
    ++count;
    setState({});
    props.onProgress(count);
  };

  return (
    <div className="todo-items">
      {!isClicked && <div className="todo-item">{props.title}</div>}
      {isClicked && (
        <div className="todo-item__striked">
          {props.title}
          <div className="cross-line"></div>
        </div>
      )}
      <div className="close" onClick={closeButtonHandler}></div>
    </div>
  );
};

export default TodoItems;
