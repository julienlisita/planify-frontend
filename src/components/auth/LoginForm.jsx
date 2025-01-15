import React, { useState } from 'react';
import Input from '../common/Input';  
import Button from '../common/Button';  
import { Link } from 'react-router-dom';
import FormLinkStyled from '../common/FormLinkStyled';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    onLogin(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center max-w-sm mx-auto p-6 bg-linen">
      <div flex flex-col items-center>
        <Input 
          placeholder="Email" 
          value={email} 
          onChange={setEmail} 
          className="mt-6" 
        />
        <Input 
          placeholder="Mot de passe" 
          value={password} 
          onChange={setPassword} 
          className="mt-6" 
        />
      </div>
        <Button children="Se connecter" 
          className="mt-6" />
      <div className="flex flex-col items-center">
        <FormLinkStyled
          to="/forgot-password"
          children="Mot de passe oublié ?"
          className="mt-6" />
        <FormLinkStyled
          to="/signup"
          children="Créer un compte"
          className="mt-6" />
      </div>
    </form>
  );
};

export default LoginForm;