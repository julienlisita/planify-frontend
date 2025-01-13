import { useState, useEffect } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

 const useAuth = () => {

  const [user, setUser] = useState(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token); 
        return {
          id: decodedToken.userId,
          email: decodedToken.email,
          roleId: decodedToken.role_id,
        };
      } catch (error) {
        console.error('Invalid token', error);
        return null;
      }
    }
    return null;
  });

  const isAuthenticated = !!user;

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', { email, password });
      const { token } = response.data;
      const decodedToken = jwtDecode(token);
      
      setUser({ id: decodedToken.userId, email: decodedToken.email, roleId: decodedToken.role_id,});
  
      localStorage.setItem('token', token); 

      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
    }
  };

  const logout = () => {

    setUser(null);

    localStorage.removeItem('token');
    
    delete axios.defaults.headers.common['Authorization'];
  };

  const signup = async (email, password, username, firstname, lastname) => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/signup', { email, password, username, firstname, lastname });
      const { token } = response.data;
      const decodedToken = jwtDecode(token);
      
      setUser({
        id: decodedToken.userId,
        email: decodedToken.email,
        roleId: decodedToken.role_id,
      });

      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } catch (error) {
      console.error('Signup failed:', error.response?.data || error.message);
    }
  };


  return { user, isAuthenticated, login, logout, signup };
};

export default useAuth;