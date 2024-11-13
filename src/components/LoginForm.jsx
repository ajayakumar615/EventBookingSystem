import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/LoginForm.css';

const LoginForm = ({ onLogin }) => {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  let navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      onLogin();
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h1>Event Booking System</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Log-In</h2>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          className="input-field"
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="input-field"
        />
        <button type="submit" className="submit-btn">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
