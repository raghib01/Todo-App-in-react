import React from 'react'
import { useState, useEffect } from 'react';

function FormTodo(props) {

    const [todo, setTodo] = useState ({title :'', desc :''});
    const {title, desc} = todo;

    useEffect(() => {
        if (props.existingTodo) {
          setTodo({
            title: props.existingTodo.title,
            desc: props.existingTodo.desc,
          });
        }
      }, [props.existingTodo]);

    const handleChange = (e) => {
       const {name , value} = e.target;
       setTodo((oldTodo)=> {
        return {
          ...oldTodo,
           [name]: value,
        };
       });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(props.existingTodo ){
          props.onInputTodo({
            ...props.existingTodo,
            ...todo,
          })
        } else {
          props.onInputTodo(todo);
        }
        setTodo({title: "", desc:""});
    };

  return (
      <form 
          className='w-[60%] flex flex-col gap-3 justify-center items-center m-3'
          onSubmit={handleSubmit}
      >
        <div className=" rounded-md shadow-sm w-[80%]">
          <input type='text' 
            name='title' 
            id='title' 
            placeholder='Enter Title...'
            value={title || ""}
            onChange={handleChange}
            className=" w-[100%] rounded-md border-1 py-2 pl-7  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 text-md"  />
        </div>

        <div className=" rounded-md shadow-sm w-[80%]">
          <textarea type='text' 
            name='desc' 
            id='desc' 
            rows='4' 
            placeholder='Enter Description ....' 
            value={desc || ''}
            onChange={handleChange}
            className=" w-[100%] rounded-md border-1 py-1.5 pl-7  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 text-md"  />
        </div>
        <div className='w-full text-center'>
          <button className='bg-rose-600 w-[80%] text-white p-3 rounded-sm'>
            {props.existingTodo ? 'Save Changes' : 'Add Todo'}
          </button>
        </div>
      </form>
  );
};

export default FormTodo