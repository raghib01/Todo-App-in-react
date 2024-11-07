import React from 'react'
import DeleteTodo from './DeleteTodo'

function Todos(props) {
  return (
    <section className='w-[60%] h-[60vh] bg-gray-900 p-5 rounded-md overflow-y-scroll '>
        {
            props.todos.map((todo) => (<DeleteTodo todo={todo.todo} key={todo.id} id={todo.id} onRemoveTodo={props.onRemoveTodo} onEditTodo={props.onEditTodo}/>))
        }

    </section>
  )
}

export default Todos