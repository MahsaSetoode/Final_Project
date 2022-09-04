import Task from './Task';
import './TasksList.css';

const TasksList = props => {
  return (
    <ul className="task-list">
      {props.items.map(task => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          state={task.state}
          onDelete={props.onDeleteItem}
          onEdit={props.onEditItem}
          onComplete={props.onCompleteItem}
          path={props.path}
        >
          {task.text}
        </Task>
      ))}
    </ul>
  );
};

export default TasksList;
