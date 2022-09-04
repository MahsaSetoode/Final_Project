import {
    SET_TASKS,
    ADD_TASK,
    DELETE_TASK,
    UPDATE_TASK,
    SET_USER,
  } from "../action/action-types";
  
  const initialState = {
    postsLoading: true,
    posts: [],
  };
  
  export default function postReducer(state = initialState, action) {
    switch (action.type) {
      case SET_TASKS:
        state = { ...state, tasks: action.payload };
        return state;
    //   case SET_POSTS_LOADING:
    //     state = { ...state, postsLoading: action.payload };
    //     return state;
      case ADD_TASK:
        state = { ...state, tasks: [...state.tasks, action.payload] };
        return state;
      case DELETE_TASK:
        const filterTasks = state.tasks.filter(
          (task) => task.taskId !== action.payload
        );
        state = { ...state, tasks: filterTasks };
        return state;
      case UPDATE_TASK:
        const current = state.tasks.find(
          (ts) => ts.taskId === action.payload.taskId
        );
        current.task.title = action.payload.data.title;
        current.task.description = action.payload.data.description;
        current.task.state = action.payload.data.state;
        state = {
          ...state,
          tasks: state.tasks.map((ts) =>
            ts.taskId === action.payload.taskId ? current : ts
          ),
        };
        return state;
      default:
        return state;
    }
  }