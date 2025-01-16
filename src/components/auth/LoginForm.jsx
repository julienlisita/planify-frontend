import React, { useState } from 'react';
import Input from '../common/Input';  
import Button from '../common/Button';  
import { Link } from 'react-router-dom';
import FormLink from '../common/FormLink';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit =  async (e) => {
    e.preventDefault(); 
    setError('')
    try {
      await onLogin(email, password);  
    } catch (err) {
      setError(err.message);  
    }
  };


  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center max-w-sm mx-auto p-6 bg-linen">
      <div className='flex flex-col items-center'>
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
      {error && <p className="text-red-500 mt-6 ">{error}</p>}  {/* Message d'erreur */} 
      <div className="flex flex-col items-center">
        <FormLink
          to="/forgot-password"
          children="Mot de passe oublié ?"
          className="mt-6" />
        <FormLink
          to="/signup"
          children="Créer un compte"
          className="mt-6" />
      </div>
    </form>
  );
};

export default LoginForm;