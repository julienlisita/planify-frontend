import React from 'react';
import useAuth from '../../hooks/useAuth';  
import LoginForm from '../../components/auth/LoginForm';

const LoginPage = () => {
  const { login } = useAuth();  

  const handleLogin = (email, password) => {
    login(email, password);  
  };

  return (
    <div>
      <h1>Connexion</h1>
      <LoginForm onLogin={handleLogin} /> 
    </div>
  );
};

export default LoginPage;