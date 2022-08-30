import React, { useState } from 'react';
import ErrorModal from '../UI/error/ErrorModal'
import Button from '../UI/button/Button'
import "./Form.css";
import {Link} from 'react-router-dom';

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
              rows={8}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
              placeholder="Description"
              defaultValue={''}
            />
          </div>
          <div>
          <div>
            <button type="button" class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true">
              Options
              {/* show status */}
              <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
          {/* items */}
          <div class="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div class="py-1" role="none">
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
              <form method="POST" action="#" role="none">
                <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
              </form>
            </div>
          </div>
          </div>
        </div>
        <Button type="submit">Edit</Button>
        <Link to={`/admin/home`} className="btn">Cancel</Link>
      </form>
    </div>
    
  );
};

export default Form;
