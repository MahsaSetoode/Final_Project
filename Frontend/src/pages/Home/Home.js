import { useState } from "react";
import "./Home.css";
import Form from "../../components/createTask/Form";
import Header from "../../components/header/Header";
import TasksList from "../../components/tasks/TasksList";


const data = [
  {
    id: 1,
    title: "Read Redux",
    description: "I have a little time to finish this",
    state: "ToDo"
  },
  {
    id: 2,
    title: "complete project",
    description: "web task manager project that should be done by tommorow",
    state: "InProgress"
  },
  {
    id: 3,
    title: "Read book",
    description: "I have a little time to finish this",
    state: "Done"
  },
]
function Home() {
  // const [task, setTask] = useState("");

  // list of tasks
  const [tasks, setTasks] = useState(data);

  const addItemHandler = (titleValue,descriptionValue) => {
    setTasks((prevTasks) => {
      const updated = [...prevTasks];
      updated.unshift({ title: titleValue, description: descriptionValue, state: "ToDo", id: Math.random().toString() });
      return updated;
    });
  };

  const deleteItemHandler = (taskId) => {
    setTasks((prevTasks) => {
      const updated = prevTasks.filter((task) => task.id !== taskId);
      return updated;
    });
  };

  // const editItemHandler = (taskId) => {

  // };

  let content = (
    <div style={{ textAlign: 'center' }}>
      <p>You have nothing to do.</p>
      <p> Go get some sleep.</p>
    </div>
    
  );
  if (tasks.length > 0) {
    content = <TasksList items={tasks} onDeleteItem={deleteItemHandler} />;
  }
  return (
    <div className="full-page">
      <section id="task-form">
        <Header title="Home"/>
        <Form onAdd={addItemHandler} />
      </section>
      <section id="tasks">
        <h1 className="tasks-header">Tasks</h1>
        {content}
      </section>
    </div>
  );
}

export default Home;
