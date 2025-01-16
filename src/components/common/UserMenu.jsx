import React from 'react';
import { Link } from 'react-router-dom'; // pour la navigation
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa'; // icônes de connexion, création de compte et paramètres

const UserMenu = () => {
  return (
    <div className="flex space-x-12">
      <Link to="/login" className="text-brownSugar hover:text-mossGreen">
        <FaSignInAlt size={24} title="Se connecter" />
      </Link>
      <Link to="/signup" className="text-brownSugar hover:text-mossGreen">
        <FaUserPlus size={24} title="Créer un compte" />
      </Link>
    </div>
  );
};

export default UserMenu;