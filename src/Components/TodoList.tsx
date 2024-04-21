import React from 'react'
import { Todo } from '../Model'
import SingleTodo from './SingleTodo';

interface Props{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList:React.FC<Props> = ({todos,setTodos}:Props) => {
    return (
            <div className='todos'>
                <span className="todos_heading">Active tasks</span>
                {
                    todos.map((todo)=>(
                        <SingleTodo todo={todo} todos={todos} setTodos={setTodos}/>
                    ))
                }
            </div>
    )
}

export default TodoList
