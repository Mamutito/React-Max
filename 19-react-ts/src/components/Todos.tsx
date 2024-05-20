import React from "react"
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css'

type props = {
    items: Todo[];
}

const Todos: React.FC<props> = ({items}) => {
  return (
    <ul className={classes.todos}>
        {items.map((item) => <TodoItem text={item.text} key={item.id} />)}
    </ul>
  )
}

export default Todos