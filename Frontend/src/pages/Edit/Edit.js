// import { useState } from "react";
import "./Edit.css";
import Form from "../../components/editTask/Form";
import Header from "../../components/header/Header";
import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
// import TasksList from "../../components/tasks/TasksList";
// import { toast } from "react-toastify";
// import {
//   getTask,
//   taskUpdate,
// } from "../../redux/actionCreators/postsActionCreator";

const toDo = [
  {
    name: "ToDo",
  },
  {
    name: "InProgress",
  },
]

const inProgress = [
  {
    name: "InProgress",
  },
  {
    name: "Blocked",
  },
  {
    name: "InQA",
  },
]

const blocked = [
  {
    name: "Blocked",
  },
  {
    name: "ToDo",
  },
]

const inQA = [
  {
    name: "InQA",
  },
  {
    name: "ToDo",
  },
  {
    name: "Done",
  },
]
const done = [
  {
    name: "Done",
  },
  {
    name: "Deployed",
  },
  
]
const deployed ={ name: "Deployed"}

const data = [
  {
    id: 1,
    title: "Read Redux",
    description: "I have a little time to finish this",
    state: "ToDo",
    otherStates: toDo
  },
  {
    id: 2,
    title: "complete project",
    description: "web task manager project that should be done by tommorow",
    state: "InProgress",
    otherStates: inProgress
  },
  {
    id: 3,
    title: "Read book",
    description: "I have a little time to finish this",
    state: "Done",
    otherStates: done
  },
]

function Edit() {
  const { pathname } = useLocation();
  const { id } = useParams();
  const params = useParams();
  console.log(params);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [state, setState] = useState("")
  const [task, setTask] = useState();
  
  useEffect(() => {
    const found = data.find(obj => {
      return obj.id === params;
    });
    setTask(found);
  }, []);

  const editItemHandler = (titleValue,descriptionValue,state) => {
    setTask((prevTasks) => {
      const updated = prevTasks.filter((task) => task.id !== params);
      let other = toDo;
      if(state==='InProgress'){
        other = inProgress;
      }else if(state==='InQA'){
        other = inQA;
      }else if(state==='Done'){
        other = done;
      }else if(state==='Deployed'){
        other = deployed;
      }else if(state==='Blocked'){
        other = blocked;
      }
      updated.unshift({ title: titleValue, description: descriptionValue, state:state, otherStates: other, id: params });
      return updated;
    });
  };

  return (
    <div>
      <section id="task-form">
        <Header title="Edit"/>
        <Form path={pathname} onEdit={editItemHandler} task={task}/>
      </section>
    </div>
  );
}

export default Edit;
