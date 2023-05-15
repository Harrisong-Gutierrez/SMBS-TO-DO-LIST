import React, {useState, useEffect} from 'react';
import List from './List'
import Alert from './Alert'

 const getLocalStorage = () => {
   let list = localStorage.getItem("list");
    if(list) {
     return (list = JSON.parse(localStorage.getItem("list")))
    } else {
    return [];
    }
 }


const CrudForm = () => {

     const [name, setName] = useState("");
     const [list, setList] = useState(getLocalStorage());
     const [isEditing, setIdEditing] = useState(false);
     const [editID,setEditID ] = useState(null);
     const [alert, setAlert] = useState({show: false, msg:"", type: ""});



     useEffect(() => {
      localStorage.setItem("list", JSON.stringify(list))
     }, [list]);



     const heandleSubmit = (e) => {
      e.preventDefault();
      if(!name) {
        showAlert(true, "danger", "Please Enter Value")
      }else if (name && isEditing) {
        setList (
          list.map((item) => {
            if(item.id === editID) {
              return {...item, title: name }
            }
            return item
          })
        );
        setName("");
        setEditID(null);
        setIdEditing(false);
        showAlert(true, "success", "Value Changes")
      } else {
        showAlert(true, "success", "Item  successfully Added to the list ");
        const newItem = {id: new Date().getTime().toString(), title: name};
        setList([...list, newItem]);
        setName("");

      }
     };


     const showAlert = (show = false, type = "", msg = "") => {
      setAlert({ show, type, msg });

     };


     const removeItem = (id) => {
      showAlert(true,"danger" , "Item successfully Removed");
      setList(list.filter((item) => item.id !== id));
     };


     const editItem = (id) => {
      const editItem = list .find((item) => item.id === id);
      setIdEditing(true);
      setEditID(id)
      setName(editItem.title);
     };


     const clearList = () => {
      showAlert(true, "danger", "Emty List");
      setList([]);
     };


   return (
     
     <div className='content mr-10 ml-10 flex  mt-7 mb-7  justify-center'>
     
 
     <div className='w-full max-w-3xl bg-gray-300 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'>
     <div id='cartel' className='flex'>
     <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Enter customer data in the text box</button>
     </div>
     <form onSubmit={heandleSubmit} className=''>
          {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
        
 
         <div className="ml-5 mr-5 mb-6 mt-5 ">
         <label htmlFor="Name and last name" className="block flex  mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your data to a new to-do list</label>
         <input
         onChange={(e) => setName(e.target.value)}
         value={name}
          type="text"
          name='nombre'  
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
           focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
             dark:focus:border-blue-500"  placeholder='e.g Bread' />
         </div>
 
       
 
        <div className='mb-4 text-center'>
        <button  type="submit" className="mr-1  inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          {isEditing ? "Edit" : "Submit"}
        </button>
        </div>
     </form>

    {list.length > 0 && (
      <div>
        <List items={list} removeItem={removeItem} editItem={editItem}/>
        <div class="comando">
          <button className=" ml-1 inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:bg-red-500 focus:ring-offset-2" onClick={clearList}>
            Clear Items
          </button>
        </div>

      </div>
    )}

     </div>
 
 
     </div>
     
   )
 }
 
 export default CrudForm
 
 