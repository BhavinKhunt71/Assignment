// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Company Registration</h1>
        <nav>
          <Link to="/register">Register</Link> | 
          <Link to="/login">Login</Link> | 
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <Routes>
          <Route  path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
