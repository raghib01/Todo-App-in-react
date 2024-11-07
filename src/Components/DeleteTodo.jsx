import React from 'react'
import { FaTrashRestore } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

function SingleTodo(props) {
    const {title, desc } = props.todo;
    const { id } = props;

    const handleDelete = (id) => {
        props.onRemoveTodo(id);
    };
    const handleEdit = (id) => {
        props.onEditTodo(id);
    };


  return (
    <article className='text-white bg-zinc-800 flex flex-row justify-between items-center p-5 hover:bg-zinc-700 my-3'>
        <div >
        <h3 className='text-[20px] text-bold '>{title}</h3>
        <p>{desc}</p>
        </div>
        <div className='flex flex-row gap-2'>


             <button className='bg-rose-600 text-white flex flex-row gap-3 p-3 rounded-sm' 
            onClick={() => {handleEdit(id)}}
            >
                <FaRegEdit className='text-2xl'/> <p className='font-semibold'>Edit</p>
            </button>


            <button className='bg-rose-600 text-white flex flex-row gap-3 p-3 rounded-sm' 
            onClick={() => {handleDelete(id)}}
            >
                <FaTrashRestore className='text-2xl'/> <p className='font-semibold'>Delete</p>
            </button>
        </div>
    </article>
  )
}

export default SingleTodo