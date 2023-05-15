import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa"

const List = ({items, removeItem, editItem}) => {
  return (
    <div>
      {items.map((item) => {
        const {id, title} = item;

        return (
          <ul  key={id}>
            <li class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
              <div class="title " >
              {title}
              </div>
              <div>

            <div class="flex boxes">
            <button type='button' className="mr-1  inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={() =>  editItem(id)}
            >
             <FaEdit/>
            </button>


            <button type='button' className="ml-1 inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:bg-red-500 focus:ring-offset-2" 
            onClick={() =>  removeItem(id)}
            >
             <FaTrash/>
            </button>

            </div>
                
              </div>
            </li>
          </ul>
        )
      })}
    </div>
  )
}

export default List
