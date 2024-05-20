import React, { useRef } from "react"
import classes from './NewTodo.module.css'

const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = ({onAddTodo}) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const handleSubmit =  (event: React.FormEvent)=>{
        event.preventDefault();
        const enteredValue = inputRef.current!.value;

        if (enteredValue.trim().length === 0){
            throw new Error('No value entered');
        }

        onAddTodo(enteredValue);
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