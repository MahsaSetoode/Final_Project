import React, { useState } from 'react';
import ErrorModal from '../UI/error/ErrorModal'
import Button from '../UI/button/Button'
import "./Form.css";

const Form = (props) => {
  const [titleValue, setTitleValue] = useState('');
  const [desValue, setDesValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState();
  
  const taskTitleChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    setTitleValue(event.target.value);
  };

  const taskDesChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    setDesValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(titleValue.trim().length === 0 || desValue.trim().length === 0){
      setIsValid(false);
      setError({
        title: 'Invalid Input',
        message: 'Please answer all the questions.'
      });
      return;
    }
    props.onAdd(titleValue, desValue);
    setTitleValue('');
    setDesValue('');
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div className='container'>
      {error && <ErrorModal title={error.title} message={error.message} onConform={errorHandler}/>}
      <form onSubmit={formSubmitHandler}>
        <h1>Add a new Task</h1>
        <div className={` form-control ${!isValid && 'invalid'}`}>
          <input type="text" onChange={taskTitleChangeHandler} placeholder="Title"/>
          {/* <input type="text" onChange={taskChangeHandler} placeholder="Description"/> */}
          <div className="mt-1">
            <textarea
              onChange={taskDesChangeHandler}
              id="about"
              name="about"
              rows={3}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
              placeholder="Description"
              defaultValue={''}
            />
          </div>
        </div>
        <Button type="submit"><strong>+ </strong> Add</Button>
      </form>
    </div>
    
  );
};

export default Form;
