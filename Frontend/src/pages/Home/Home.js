import { useState } from "react";
import "./Home.css";
import Form from "../../components/createTask/Form";
import Header from "../../components/header/Header";
import TasksList from "../../components/tasks/TasksList";

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

function Home() {
  const [otherStates, setOtherStates] = useState([]);

  // list of tasks
  const [tasks, setTasks] = useState(data);

  const addItemHandler = (titleValue,descriptionValue) => {
    setTasks((prevTasks) => {
      const updated = [...prevTasks];
      updated.unshift({ title: titleValue, description: descriptionValue, state:"ToDo", otherStates:toDo, id: Math.random().toString() });
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
    <div className="empty">
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
