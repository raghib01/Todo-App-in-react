import React, { useState } from 'react'
import Todos from './Todos'
import FormTodo from './FormTodo'
import {v4 as uuidv4} from 'uuid'



function Home() {
  const [todo, setTodo] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  const handleInputTodo = (todo) => {
      setTodo((prevTodo)=> {
        return [...prevTodo, {id: uuidv4(), todo}];
      });
  };

  const handleRemoveTodo = (id) => {
    setTodo(prevTodo =>{
      const filterTodo =  prevTodo.filter((todo) => todo.id !== id);
      return filterTodo;
    });
  };
  const handleEditTodo = (updateId) => {
    setTodo(prevTodo =>
      prevTodo.map((todo) =>
        todo.id === updateId.id ? updateId : todo
      )
    );
      // Implement edit functionality here
      setEditTodo(null);

  };
  
  const startEditable = (oldtodo) => {
    setEditTodo(oldtodo);
  };




  return (
    <div className='bg-gray-100 text-black h-screen flex flex-col justify-center items-center'>
      <h1 className='text-center font-sans text-4xl text-bold my-4'>TODO APPS</h1>
            <FormTodo onInputTodo={editTodo ? handleEditTodo : handleInputTodo} existingTodo = {editTodo}/>

            {todo && <Todos todos={todo} onRemoveTodo={handleRemoveTodo} onEditTodo={startEditable} /> }
            <button 
            className='bg-rose-600 w-[10%] text-white p-3 rounded-sm m-3'
            onClick={() => {
              setTodo([]);
            }}
            >
              Clear All
            </button>
    </div>
  )
}

export default Home