import { useState } from "react";
import DeleteIcon from "./Icons/DeleteIcon";
import EditIcon from "./Icons/EditIcon";


export default function TodoListItem ({todo , deleteTodo , toggleTodoStatue , editTodoTitle}) {

    // to show a input for editing todo title
    const [editMode , setEditMode] = useState(false);

    // edit handler function
    const editTodoHandler = (event) => {

        if (event.key == 'Enter')
        {
            editTodoTitle(todo, event.target.value);
            setEditMode(false);
        }
    }

    return (

        <li className="relative flex items-center justify-between px-2 py-6 border-b">

            {/* if clause for showing todo or edit mode  */}
            {
                editMode ?        
                    <div className="w-full flex items-center">
                        <input type="text" defaultValue={todo?.title} onChange={() => {}} onKeyDown={editTodoHandler} className="w-full px-4 py-4 border border-gray-200 rounded" />
                        <DeleteIcon className="ml-2" onClick = {() => {setEditMode(false)}} />
                    </div>
                :  
                    <div className="flex items-center">
                        <div>
                            <input type="checkbox" checked={todo ?.checked} onChange={() => toggleTodoStatue(todo)} className="" />
                            <p  className={`inline-block mt-1 ml-2 text-gray-600 ${todo?.checked ? 'line-through' : ''}`}>{todo ?.title}</p>
                        </div>
                        <button type="button" className="absolute right-0 flex items-center space-x-1">
                            <EditIcon onClick = {() => setEditMode(true)}/>
                            <DeleteIcon  onClick = {() => deleteTodo(todo)} />
                        </button>
                    </div> 
            }
        </li>

    )
}