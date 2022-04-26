
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTodo from './components/create-todo.component';
import EditTodo from './components/edit-todo.component';
import TodosList from './components/todos-list.component';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h2>MERN-Stack Todo App</h2>
    <Routes>
    
        <Route path="/" exact element={<TodosList/>} />
        <Route path="/edit/:id"  element={<EditTodo/>} />
        <Route path="/create"  element={<CreateTodo/>}/>
      
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
