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
    <form onSubmit={handleSignUp} className="signup-form">
      <h2>Créer un compte</h2>

      <Input
        placeholder="Nom d'utilisateur"
        value={username}
        onChange={setUsername}
      />
      <Input
        placeholder="Prénom"
        value={firstname}
        onChange={setFirstname}
      />
      <Input
        placeholder="Nom de famille"
        value={lastname}
        onChange={setLastname}
      />
      <Input
        placeholder="Email"
        type="email"
        value={email}
        onChange={setEmail}
      />
      <Input
        placeholder="Mot de passe"
        type="password"
        value={password}
        onChange={setPassword}
      />
      <Input
        placeholder="Confirmation du mot de passe"
        type="password"
        value={password2}
        onChange={setPassword2}
      />

      <Button value="S'inscrire" />
    </form>
  );
};

export default SignupForm;