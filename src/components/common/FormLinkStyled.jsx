// LinkStyled.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const FormLinkStyled = ({ to, children, className }) => {
  return (
    <Link
      to={to}
      className={`font-bold hover:text-mossGreen text-taupe ${className}`}
    >
      {children}
    </Link>
  );
};

export default FormLinkStyled;