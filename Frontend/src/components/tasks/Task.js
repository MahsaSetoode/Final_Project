import "./Task.css";
// import { useState } from "react";
import {Link} from 'react-router-dom';

const Task = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="task-item" onClick={deleteHandler}> 
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
        <div className="itemBox">
          <div className="box">
            {props.state}
          </div>
          { props.path.includes("/admin") ?  
            <Link to={`/admin/edit/${props.id}`} className="btn-edit">
              <i className="fa-regular fa-pen-to-square"/>
            </Link>
            : null }
        </div>
      </div>
    </div>
  );
};

export default Task;
