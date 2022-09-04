// import { useState } from "react";
import "./Edit.css";
import Form from "../../components/editTask/Form";
import Header from "../../components/header/Header";
import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
// import TasksList from "../../components/tasks/TasksList";
// import { toast } from "react-toastify";
import {
  getTask,
  taskUpdate,
} from "../../redux/actionCreators/postsActionCreator";

function Edit() {
  const { pathname } = useLocation();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  // const editItemHandler = (taskId) => {

  // };

  // const changeStateHandler = (taskId) => {
  
  // };

  return (
    <div>
      <section id="task-form">
        <Header title="Edit"/>
        <Form path={pathname}/>
      </section>
    </div>
  );
}

export default Edit;
