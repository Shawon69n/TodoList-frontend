import './App.css';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
