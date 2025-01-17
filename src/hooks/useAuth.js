import { useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import authService from '../services/authService';

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
        const { token } = await authService.login(email, password);
        const decodedToken = jwtDecode(token);
        setUser({ id: decodedToken.userId, email: decodedToken.email, roleId: decodedToken.role_id,});
        localStorage.setItem('token', token); 
        authService.setAuthToken(token);
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
    authService.clearAuthToken();
  };

  const signup = async (email, password, username, firstname, lastname) => {
    try {
      const { token } = await authService.signup(email, password, username, firstname, lastname)
      const decodedToken = jwtDecode(token);
      
      setUser({
        id: decodedToken.userId,
        email: decodedToken.email,
        roleId: decodedToken.role_id,
      });

      localStorage.setItem('token', token);
      authService.setAuthToken(token);
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