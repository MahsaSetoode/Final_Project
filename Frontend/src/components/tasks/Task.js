import "./Task.css";
// import { useState } from "react";
import {Link} from 'react-router-dom';

const Task = (props) => {
  // const [isComplete, setIsComplete] = useState(false);

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="task-item" onClick={deleteHandler}> 
      {/* className={setIsComplete && 'complete'} */}
      {/* <div >
        {props.children}
      </div> */}
      <div >
        <h3>
          {props.title}
        </h3>
      </div>
      <div >
        <p>
          {props.description}
        </p>
      </div>
      <div>
        {/* <button onClick={completeHandler}>Complete</button> */}
        
        {/* <button onClick={editHandler}>Edit</button> */}
        <div>
          <div className="box">
            {props.state}
          </div>
          <Link to={`/edit`} className="btn">
            <i className="fa-regular fa-pen-to-square"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Task;
