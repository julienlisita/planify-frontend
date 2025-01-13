import React, { useState } from 'react';
import Input from '../common/Input';  
import Button from '../common/Button';  

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    onLogin(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Input 
          placeholder="Email" 
          value={email} 
          onChange={setEmail} 
        />
      </div>
      <div>
        <Input 
          placeholder="Mot de passe" 
          value={password} 
          onChange={setPassword} 
        />
      </div>
      <Button value="Se connecter" />
    </form>
  );
};

export default LoginForm;