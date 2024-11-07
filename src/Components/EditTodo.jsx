import React from 'react'
import { FaRegEdit } from "react-icons/fa";

function SingleTodo(props) {
    const {title, desc } = props.todo;
    const { id } = props;



  return (
    <article className='text-white bg-zinc-800 flex flex-row justify-between items-center p-5 hover:bg-zinc-700 my-3'>
        <div >
        <h3 className='text-[20px] text-bold '>{title}</h3>
        <p>{desc}</p>
        </div>
        <div>
            <button className='bg-rose-600 text-white flex flex-row gap-3 p-3 rounded-sm' 
            >
                <FaRegEdit className='text-2xl'/>
            </button>
        </div>
        
    </article>
  )
}

export default SingleTodo