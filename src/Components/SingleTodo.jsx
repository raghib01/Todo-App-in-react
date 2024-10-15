import React from 'react'
import { FaTrashRestore } from "react-icons/fa";

function SingleTodo(props) {
    const {title, id, desc } = props.todo;

  return (
    <article className='text-white bg-zinc-800 flex flex-row justify-between items-center p-5 hover:bg-zinc-700 my-3'>
        <div >
        <h3>{title}</h3>
        <p>{desc}</p>
        </div>
        <div>
            <button className='bg-rose-600 text-white flex flex-row gap-3 p-3 rounded-sm'>
                <FaTrashRestore className='text-2xl'/> <p className='font-semibold'>Delete</p>
            </button>
        </div>
        
    </article>
  )
}

export default SingleTodo