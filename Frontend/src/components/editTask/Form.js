import React, { useState } from 'react';
import ErrorModal from '../UI/error/ErrorModal'
import Button from '../UI/button/Button'
import "./Form.css";
import {Link, useNavigate} from 'react-router-dom';

const Form = (props) => {
  const [titleValue, setTitleValue] = useState('');
  const [desValue, setDesValue] = useState('');
  const [stateValue, setStateValue] = useState('');
  const [error, setError] = useState();
  
  const taskTitleChangeHandler = event => {
    setTitleValue(event.target.value);
  };

  const taskDesChangeHandler = event => {
    setDesValue(event.target.value);
  };

  const taskStateChangeHandler = event => {
    setStateValue(event.target.value);
  };

  const navigate = useNavigate()
  const formSubmitHandler = event => {
    event.preventDefault();
    if(titleValue.trim().length === 0 || desValue.trim().length === 0){
      setError({
        title: 'Invalid Input',
        message: 'Please answer all the questions.'
      });
      return;
    }
    props.onEdit(titleValue, desValue, stateValue);
    navigate('/admin/home')
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div className='container'>
      {error && <ErrorModal title={error.title} message={error.message} onConform={errorHandler}/>}
      <form onSubmit={formSubmitHandler}>
        <h1>Edit Task</h1>
        <div>
          <input className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
           id='title' type="text" onChange={taskTitleChangeHandler} placeholder="Title" value={props.title}/>
          <div>
            <textarea
              onChange={taskDesChangeHandler}
              id="description"
              name="about"
              rows={8}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
              placeholder="Description"
              defaultValue={props.description}
            />
          </div>
          <div className="select">
            {/*onChange={changeStateHandler}*/}
            <select name="state" className="state" onChange={taskStateChangeHandler}> 
              {/* {props.otherStates.map(st => (
                <option value={st.name}>
                  st.name
                </option>
              ))} */}
              <option value="Done">
                Done
              </option>
              <option value="InQA">
                InQA
              </option>
              <option value="ToDo">
                ToDo
              </option>
            </select>
          </div>
        </div>
        <div id='btn-handle'>
          { props.path.includes("/admin") ?
            <>
              <Button type="submit"><i className="fa-regular fa-pen-to-square"/>Edit</Button>
              <Link to={`/admin/home`} className="btn-cancle">Cancel</Link>
            </> 
            : 
            <>
              <Link to={`/home`} className="btn-cancle">Cancel</Link>
            </>
          }
        </div>   
      </form>
    </div>
    
  );
};

export default Form;
