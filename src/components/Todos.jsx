import { useState } from "react";
import TodoList from "./TodoList";
import {v4 as uuidv4} from 'uuid';



export default function Todos() {

    // default todo list
    const [todos, setTodos] = useState([
        {
        id : uuidv4(),
        title : "Pay Bills",
        checked : false,
        }, 
        {
        id : uuidv4(),
        title : "Call Mr. Jack",
        checked : true,
        }
    ])

    // add ne todo 
    const addNewTodoHandler = (event) => {

        if (event.key == 'Enter' && event.target.value != '') {
            setTodos([
                ... todos,
                {
                    id: uuidv4() ,
                    title : event.target.value,
                    checked : false,
                }
            ])
            event.target.value = '';
        }
        
    }

    // delete a todo task
    const deleteTodoHandler = (todo) => {
        let newTodos =  todos.filter ( (todoItem) => {

            return todo.id != todoItem.id;

        })

        setTodos(newTodos);

    }

    // toggle todo task checked status 
    const toggleTodoStatusHandler = (todo) => {

        let newTodos = todos.map ( (todoItem) => {

            if (todo.id == todoItem.id) {
                todoItem.checked = ! todoItem.checked
            }

            return todoItem;

        })

        setTodos(newTodos);

    }

    // edit todo task title
    const editTodoTitleHandler = (todo, newTodoTitle) => {

        let newTodos = todos.map ( (todoItem) => {

            if (todo.id == todoItem.id) {
                todoItem.title = newTodoTitle
            }

            return todoItem;

        })

        setTodos(newTodos);

    }

    // return main todobox + calling todoList component
    return (

        <div className="flex items-center justify-center h-screen">
            <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">
                <div className="flex items-center mb-6">
                    <h1 className="mr-6 text-4xl font-bold text-purple-600">Shayan TO DO APP.</h1>
                </div>
                <div className="relative">
                    <input type="text" placeholder="What needs to be done today?"
                    onKeyDown={addNewTodoHandler}
                    className="w-full px-2 py-3 border rounded outline-none border-grey-600" />
                </div>
                <TodoList todos={todos} deleteTodo={deleteTodoHandler} toggleTodoStatue={toggleTodoStatusHandler} editTodoTitle={editTodoTitleHandler}/>
            </div>
        </div>

    )


}