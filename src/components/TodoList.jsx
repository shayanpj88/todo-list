import TodoListItem from "./TodoListItem";


export default function TodoList ({todos , deleteTodo, toggleTodoStatue , editTodoTitle}) {

    return (
        <ul className="list-reset">
            {todos.map( (todo) => <TodoListItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodoStatue={toggleTodoStatue} editTodoTitle={editTodoTitle}/> )}
        </ul>
    )

}