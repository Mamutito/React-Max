import { createContext, useState } from 'react'
import Todo from '../models/todo'

type todoContextObj = {
    items: Todo[],
    onAddTodo: (text:string) => void,
    onRemoveTodo: (id:string) => void
}

export const todoContext = createContext<todoContextObj>({
    items: [],
    onAddTodo: (text:string ) => {},
    onRemoveTodo: (id:string) => {}
});

const TodoContextProvider: React.FC = ({children}) => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const handleAddTodo = (todoText: string)=>{
      setTodos(prev => [...prev, new Todo(todoText)]);
    }
    const handleRemoveTodo = (id: string)=>{
      setTodos(prev => prev.filter(todo => todo.id !== id));
    }

    const todoCtx = {
        items: todos,
        onAddTodo: handleAddTodo,
        onRemoveTodo: handleRemoveTodo   
    }
  return (
    <todoContext.Provider value={todoCtx}>{children}</todoContext.Provider>
  )
}

export default TodoContextProvider;