import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../Model'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

interface Props{
    todo:Todo;
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({todo,todos,setTodos}:Props) => {

    const [edit, setEdit] = useState<Boolean>(false);
    const [editTodo, setEditTodo] = useState<string>("");


    const doneHandler = (id:number) : void=>{
        setTodos(todos.map((todo)=>todo.id === id ? {...todo,isDone : !todo.isDone} : {...todo}));
    }

    const deleteHandler = (id:number):void =>{
        setTodos(todos.filter((todo)=>todo.id !=id));
    }

    const editHandler = (e:React.FormEvent<HTMLFormElement>,id:number):void =>{
        e.preventDefault();
        setTodos(todos.map((todo)=>todo.id === id ?{...todo,name:editTodo}:{...todo} ));
        setEdit(false)

    }

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus()
    }, [edit])



    return (
        <form className='todos_single' onSubmit={(e)=>editHandler(e,todo.id)}>

            {
                edit && (
                    <input 
                    placeholder='enter todo'
                    defaultValue={todo.name}
                    className='todos_single--text'
                    onChange={(e)=>{setEditTodo(e.target.value)}}
                    ref={inputRef}
                    />
                )
            }
            {
                !edit && (
                    todo.isDone ? (
                        <s className="todos_single--text ">{todo.name}</s>
                    ):
                    (
                        <span className="todos_single--text">{todo.name}</span>
                    )
                )
            }
            
            <div>
                <span className="icon"
                onClick={()=>{
                    if(!edit && !todo.isDone){
                        setEdit(true)
                    }
                }}
                ><AiFillEdit /></span>
                <span className="icon" onClick={()=>deleteHandler(todo.id)}><AiFillDelete /></span>
                <span className="icon" onClick={()=>doneHandler(todo.id)}><MdDone /></span>
            </div>
        </form>
    )
}

export default SingleTodo
