import React from 'react'
import SingleTodo from './SingleTodo'

function Todos(props) {
    console.log(props.todos)
  return (
    <section className='w-[60%] h-[60vh] bg-gray-900 p-5 rounded-md overflow-hidden '>
        {
            props.todos.map((todo) => (<SingleTodo todo={todo} key={todo.id}/>))
        }
    </section>
  )
}

export default Todos