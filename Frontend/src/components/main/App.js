// import { useState } from "react";
// import Router from "../../router/Router";
// import {
//   BrowserRouter as ReactRouter,
//   Routes,
//   Route,
// }from "react-router-dom";
import Home from "../../pages/Home/Home";
// import Edit from "../../pages/Edit/Edit";
// import Login from "../../pages/Login/Login";
// import "./App.css";
// import Form from "../createTask/Form";
// import Header from "../header/Header";
// import TasksList from "../tasks/TasksList";

function App() {
  // const [task, setTask] = useState("");

  // list of tasks
  // const [todos, setTodos] = useState([]);

  // const addItemHandler = (enteredText) => {
  //   setTodos((prevTasks) => {
  //     const updated = [...prevTasks];
  //     updated.unshift({ text: enteredText, id: Math.random().toString() });
  //     return updated;
  //   });

  // };

  // const deleteItemHandler = (taskId) => {
  //   setTodos((prevTasks) => {
  //     const updated = prevTasks.filter((task) => task.id !== taskId);
  //     return updated;
  //   });
  // };

  // // const editItemHandler = (taskId) => {

  // // };

  // // const completeItemHandler = (taskId) => {
  
  // // };

  // let content = (
  //   <div style={{ textAlign: 'center' }}>
  //     <p>You have nothing to do.</p>
  //     <p> Go get some sleep.</p>
  //   </div>
    
  // );
  // if (todos.length > 0) {
  //   content = <TasksList items={todos} onDeleteItem={deleteItemHandler} />;
  // }
  return (
    <>
      <Home/>
      {/* <Router /> */}
      {/* <ReactRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/edit" element={<Edit/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </ReactRouter> */}
    </>
  );
}

export default App;
