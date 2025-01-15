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
      if(response.status === 200)
      {
        const { token } = response.data;
        const decodedToken = jwtDecode(token);
      
        setUser({ id: decodedToken.userId, email: decodedToken.email, roleId: decodedToken.role_id,});
  
        localStorage.setItem('token', token); 

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      }

    } catch (error) {
      if (error.response?.status === 401 || error.response?.status === 404) {
        throw new Error("Identifiant ou mot de passe incorrect");
      } else {
        throw new Error("Une erreur inattendue s'est produite");
      }
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
      if (error.response) {
        // Vérifier les types d'erreurs spécifiques venant du backend
        const errorMessage = error.response.data.message || 'Erreur d’inscription inconnue';
        throw new Error(errorMessage); // Renvoyer l'erreur pour le composant appelant
      } else {
        //throw new Error('Une erreur réseau ou inconnue s’est produite.');
      }
    }
  };

  return { user, isAuthenticated, login, logout, signup };
};

export default useAuth;