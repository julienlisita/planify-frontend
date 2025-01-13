import React from 'react';
import useAuth from '../../hooks/useAuth';
import SignupForm from '../../components/auth/SignupForm';

const SignupPage = () => {

  const { signup } = useAuth(); 

  const handleSignup = (email, password, username, firstname, lastname ) => {
    signup(email, password, username, firstname, lastname );  
  };


  return (
    <div className="signup-page">
      <h1>Inscription</h1>
      <SignupForm onSignup={handleSignup}/>
    </div>
  );
};

export default SignupPage;