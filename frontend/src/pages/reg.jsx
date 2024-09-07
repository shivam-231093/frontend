import React, { useState } from 'react';
import axios from 'axios';

const AuthForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email,setEmail]=useState('')
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and register
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin ? '/api/login' : '/api/register';
    try {
      const { data } = await axios.post(url, { username, password });
      if (isLogin) {
        localStorage.setItem('token', data.token);
        setMessage('Logged in successfully');
      } else {
        setMessage('User registered successfully');
      }
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  return (
    <div>
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="${isLogin ? hidden : visible}">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Switch to Register' : 'Switch to Login'}
      </button>
      <p>{message}</p>
    </div>
  );
};

export default AuthForm;
