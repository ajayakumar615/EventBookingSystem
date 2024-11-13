import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import data from './data.json';
import './App.css'

function App() {
  let [isAuthenticated, setIsAuthenticated] = useState(false);
  let [events, setEvents] = useState(data.events);

  let handleLogout = () => {
    setIsAuthenticated(false);
    setEvents(data.events);
  };

  let handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={<Home events={events} setEvents={setEvents} isAuthenticated={isAuthenticated} />}
        />
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
}

export default App;
