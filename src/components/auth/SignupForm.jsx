import React, { useState } from 'react';  
import Input from '../common/Input';  
import Button from '../common/Button';  

const SignupForm = ({onSignup}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    onSignup(email, password, username, firstname, lastname);
    };

  return (
    <form onSubmit={handleSignUp} className="flex flex-col items-center max-w-sm mx-auto p-6 bg-linen">
      <Input
        placeholder="Nom d'utilisateur"
        value={username}
        onChange={setUsername}
        className="mt-6" 
      />
      <Input
        placeholder="Prénom"
        value={firstname}
        onChange={setFirstname}
        className="mt-6" 
      />
      <Input
        placeholder="Nom de famille"
        value={lastname}
        onChange={setLastname}
        className="mt-6" 
      />
      <Input
        placeholder="Email"
        type="email"
        value={email}
        onChange={setEmail}
        className="mt-6" 
      />
      <Input
        placeholder="Mot de passe"
        type="password"
        value={password}
        onChange={setPassword}
        className="mt-6" 
      />
      <Input
        placeholder="Confirmation du mot de passe"
        type="password"
        value={password2}
        onChange={setPassword2}
        className="mt-6" 
      />
      <Button children="S'inscrire" 
        className="mt-6" />
    </form>
  );
};

export default SignupForm;