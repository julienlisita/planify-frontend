import React from 'react';
import useAuth from '../../hooks/useAuth';  
import LoginForm from '../../components/auth/LoginForm';

const LoginPage = () => {
  const { login } = useAuth();  

  const handleLogin = async (email, password) => {
    await login(email, password);  
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-center text-brownSugar mt-12">Connexion</h1>
      <LoginForm onLogin={handleLogin} /> 
    </div>
  );
};

export default LoginPage;