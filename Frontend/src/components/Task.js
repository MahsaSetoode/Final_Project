import "./Task.css";
import { useState } from "react";

const Task = (props) => {
  const [isComplete, setIsComplete] = useState(false);

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  const editHandler = () => {
    props.onEdit(props.id);
  };

  const completeHandler = () => {
    setIsComplete(true);
  };

  return (
    <li className="task-item">
      <div className={setIsComplete && 'complete'}>
        {props.children}
      </div>
      <div>
        <button onClick={completeHandler}>Complete</button>
        <button onClick={editHandler}>Edit</button>
        <button onClick={deleteHandler}>delete</button>
      </div>
    </li>
  );
};

export default Task;
