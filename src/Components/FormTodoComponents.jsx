import React from 'react'

function FormTodoComponents(props) {
  return (
    <>
<div className=' flex flex-row justify-center items-center m-4'>
    <label htmlFor="title" className=" font-medium text-gray-900 mx-3 mt-1">
    Add Title : 
  </label>
  <div className=" rounded-md shadow-sm w-[80%]">
    <input type='text' name='title' id='title' className=" w-[100%] rounded-md border-1 py-1.5 pl-7  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 text-md"  />
  </div>
</div>
<div className=' flex flex-row justify-center items-center m-4'>
    <label htmlFor="title" className=" font-medium text-gray-900 mx-3 mt-1">
    Add Description :
  </label>
  <div className=" rounded-md shadow-sm w-[80%]">
    <input type='text' name='title' id='title' className=" w-[100%] rounded-md border-1 py-1.5 pl-7  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 text-md"  />
  </div>
</div>
</>
  )
}

export default FormTodoComponents