import React, { useState } from 'react'
import Todos from './Todos'
import FormTodo from './FormTodo'



function Home() {
  const [todo, setTodo] = useState([]);

  const handleInputTodo = (todo) => {
      console.log(todo);
  };

  return (
    
    <div className='bg-gray-100 text-black h-screen flex flex-col justify-center items-center'>
      <h1 className='text-center font-sans text-4xl text-bold my-4'>TODO APPS</h1>
            <FormTodo onInputTodo={handleInputTodo}/>
           <Todos todos={todo}/>
    </div>
  )
}

export default Home