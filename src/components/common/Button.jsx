import React from 'react'

const Button = ({ children, onClick , className }) => {
  return (<div>
    <button
      className={`bg-taupe text-linen hover:bg-mossGreen py-2 px-4 rounded-full ${className}`}
      type='submit'
      onClick={onClick} >
      {children}
    </button>
  </div>
  );
};

export default Button