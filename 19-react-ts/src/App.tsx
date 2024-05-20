import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodoContextProvider from './store/TodoContext';

function App() {

  return (
    <div className="App">
      <TodoContextProvider>
      <NewTodo />
      <Todos />
      </TodoContextProvider>
    </div>
  );
}

export default App;
