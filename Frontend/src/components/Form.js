import React, { useState } from 'react';
import Button from './Button'

const Form = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  
  const taskChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setIsValid(false);
      return;
    }
    props.onAdd(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <h1>Add a new Task</h1>
      <div className={` form-control ${!isValid && 'invalid'}`}>
        <input type="text" onChange={taskChangeHandler} placeholder="Title"/>
        <input type="text" onChange={taskChangeHandler} placeholder="Description"/>
      </div>
      <Button type="submit"><strong>+ </strong> Add</Button>
    </form>
  );
};

export default Form;
