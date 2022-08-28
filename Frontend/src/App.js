import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import TasksList from "./components/TasksList";

function App() {
  // const [task, setTask] = useState("");

  // list of tasks
  const [todos, setTodos] = useState([]);

  const addItemHandler = (enteredText) => {
    setTodos((prevTasks) => {
      const updated = [...prevTasks];
      updated.unshift({ text: enteredText, id: Math.random().toString() });
      return updated;
    });

  };

  const deleteItemHandler = (taskId) => {
    setTodos((prevTasks) => {
      const updated = prevTasks.filter((task) => task.id !== taskId);
      return updated;
    });
  };

  // const editItemHandler = (taskId) => {

  // };

  // const completeItemHandler = (taskId) => {
  
  // };

  let content = (
    <div style={{ textAlign: 'center' }}>
      <p>You have nothing to do.</p>
      <p> Go get some sleep.</p>
    </div>
    
  );
  if (todos.length > 0) {
    content = <TasksList items={todos} onDeleteItem={deleteItemHandler} />;
  }
  return (
    <div>
      <section id="task-form">
        <Header/>
        <Form onAdd={addItemHandler} />
      </section>
      <section id="tasks">
        <h1 className="tasks-header">Tasks</h1>
        {content}</section>
    </div>
  );
}

export default App;
