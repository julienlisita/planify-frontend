import React from 'react';
import useAuth from '../../hooks/useAuth';
import SignupForm from '../../components/auth/SignupForm';

const SignupPage = () => {

  const { signup } = useAuth(); 

  const handleSignup = async (email, password, username, firstname, lastname ) => {
    await signup(email, password, username, firstname, lastname );  
  };


  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-center text-brownSugar mt-12">Inscription</h1>
      <SignupForm onSignup={handleSignup}/>
    </div>
  );
};

export default SignupPage;