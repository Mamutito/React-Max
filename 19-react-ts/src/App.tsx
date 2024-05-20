
import { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const handleAddTodo = (todoText: string)=>{
    setTodos(prev => [...prev, new Todo(todoText)])
  }
  const handleRemoveTodo = (id: string)=>{
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }
  return (
    <div className="App">
      <NewTodo onAddTodo={handleAddTodo}/>
      <Todos items={todos} onRemoveTodo={handleRemoveTodo}/>
    </div>
  );
}

export default App;
