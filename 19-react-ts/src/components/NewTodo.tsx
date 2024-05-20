import React, { useContext, useRef } from "react"
import classes from './NewTodo.module.css'
import { todoContext } from "../store/TodoContext"

const NewTodo: React.FC = () => {
    const todoCtx = useContext(todoContext);
    const inputRef = useRef<HTMLInputElement>(null)
    const handleSubmit =  (event: React.FormEvent)=>{
        event.preventDefault();
        const enteredValue = inputRef.current!.value;

        if (enteredValue.trim().length === 0){
            throw new Error('No value entered');
        }

        todoCtx.onAddTodo(enteredValue);
    }
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
    <label htmlFor="text">Todo Text</label>
    <input type="text" id="text" ref={inputRef}/>
    <button>New Todo</button>
    </form>
  )
}

export default NewTodo