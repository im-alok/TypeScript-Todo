import React, { useRef } from "react";

interface Props {
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    addHandler:(e:React.FormEvent)=>void;
}

const InputField = ({todo,setTodo,addHandler}:Props) => {

    // console.log(todo);
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div>
            <form className='input'
            onSubmit={(e)=>{
                addHandler(e);
                inputRef.current?.blur();
            }}
            >
                <input 
                ref={inputRef}
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
                type='input'
                placeholder='Enter a task'
                className='input_box'
                />

                <button
                className='input_submit'
                type='submit'
                >
                    Go
                </button>
            </form>
        </div>
    )
}

export default InputField;
