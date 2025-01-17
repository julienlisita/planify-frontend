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
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    try {
      //Vérifier que les champs requis sont remplies
      if (!username || !email || !password) {
        setError('Tous les champs sont requis : username, email, password.');
         return;
      }
      // Vérifier la validité du mot de passe 
      if (!validatePassword(password)) {
        setError('Le mot de passe doit contenir au moins 8 caractères, une majuscule et un caractère spécial.');
        return;
      }
      // Vérifier que les mots de passe correspondent
      if (password !== password2) {
        setError("Les mots de passe ne correspondent pas.");
      return; // Ne pas soumettre le formulaire si les mots de passe ne correspondent pas
      }

      await onSignup(email, password, username, firstname, lastname);
    
    } catch (err) {
      setError(err.message); 
    }
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
    return regex.test(password);
  };

  return (
    <form onSubmit={handleSignUp} className="flex flex-col items-center max-w-sm mx-auto p-6">
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
      {error && <p className="text-red-500 mt-6">{error}</p>} {/* Affiche le message d'erreur */}
    </form>
  );
};

export default SignupForm;