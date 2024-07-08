import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import TaskList from './pages/TaskList';
import CreateTask from './pages/CreateTask';
import HomePage from './pages/HomePage';
import './App.css';
import './index.css';
function App() {
   
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/TaskList" element={<TaskList />} />
        <Route path="/CreateTask" element={<CreateTask />} />
      </Routes>
    </Router>
  );
}

export default App;
