import React, { useContext } from "react"
import TodoItem from "./TodoItem";
import classes from './Todos.module.css'
import { todoContext } from "../store/TodoContext";

const Todos: React.FC = () => {
    const todoCtx = useContext(todoContext);
  return (
    <ul className={classes.todos}>
        {todoCtx.items.map((item) => <TodoItem text={item.text} key={item.id} onRemoveTodo={()=> todoCtx.onRemoveTodo(item.id)}/>)}
    </ul>
  )
}

export default Todos;