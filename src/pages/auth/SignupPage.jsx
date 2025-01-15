import React from 'react';
import useAuth from '../../hooks/useAuth';
import SignupForm from '../../components/auth/SignupForm';

const SignupPage = () => {

  const { signup } = useAuth(); 

  const handleSignup = (email, password, username, firstname, lastname ) => {
    signup(email, password, username, firstname, lastname );  
  };


  return (
    <div className="flex flex-col justify-center items-center bg-linen">
      <h1 className="text-3xl font-bold text-center text-brownSugar mt-12">Inscription</h1>
      <SignupForm onSignup={handleSignup}/>
    </div>
  );
};

export default SignupPage;