
import { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  // const todos = [new Todo('React'), new Todo('Typescript')]
  const [todos, setTodos] = useState<Todo[]>([])
  const handleAddTodo = (todoText: string)=>{
    setTodos(prev => [...prev, new Todo(todoText)])
  }
  return (
    <div className="App">
      <NewTodo onAddTodo={handleAddTodo}/>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
