import "./Task.css";
// import { useState } from "react";
import {Link} from 'react-router-dom';

const Task = (props) => {
  // const [isComplete, setIsComplete] = useState(false);

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    // {!props.path.includes("/admin") ? <Navbar /> : null}
    <div className="task-item" onClick={deleteHandler}> 
      {/* className={setIsComplete && 'complete'} */}
      {/* <div >
        {props.children}
      </div> */}
      <div className="text">
        <h3>
          {props.title}
        </h3>
        <p>
          {props.description}
        </p>
      </div>
      <div>
        {/* <button onClick={completeHandler}>Complete</button> */}
        
        {/* <button onClick={editHandler}>Edit</button> */}
        <div className="itemBox">
          <div className="box">
            {props.state}
          </div>
          { props.path.includes("/admin") ?  
            <Link to={`/edit/${props.id}`} className="btn-edit">
              <i className="fa-regular fa-pen-to-square"/>
            </Link>
            : null }
        </div>
      </div>
    </div>
  );
};

export default Task;
