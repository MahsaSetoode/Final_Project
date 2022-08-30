import Task from './Task';
import './TasksList.css';

const TasksList = props => {
  return (
    <ul className="task-list">
      {props.items.map(task => (
        <Task
          key={task.id}
          id={task.id}
          onDelete={props.onDeleteItem}
          onEdit={props.onEditItem}
          onComplete={props.onCompleteItem}
        >
          {task.text}
        </Task>
      ))}
    </ul>
  );
};

export default TasksList;
