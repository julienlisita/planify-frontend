import React from 'react';
import logo from '../../assets/logo.svg';

// Configuration responsive
const Footer = () => {
  return (
    <footer className="bg-taupe p-4 shadow-md w-full">
      <div className="flex flex-wrap justify-between items-center w-full">
        <div className="flex items-center w-full sm:w-auto mb-16 sm:mb-0">
          <img src={logo} alt="Logo" className="h-13 w-13 mr-12" />

          <nav className="w-full sm:w-auto sm:ml-24">
            <ul className="flex flex-wrap sm:flex-nowrap space-x-16 justify-center w-full text-sm sm:text-base">
              <li>
                <a href="/contact" className="text-linen hover:text-brownSugar">Contact</a>
              </li>
              <li>
                <a href="/about" className="text-linen hover:text-brownSugar">À propos</a>
              </li>
              <li>
                <a href="/newsletter" className="text-linen hover:text-brownSugar">Newsletter</a>
              </li>
              <li>
                <a href="/legal" className="text-linen hover:text-brownSugar">Mentions légales</a>
              </li>
              <li>
                <a href="/terms" className="text-linen hover:text-brownSugar">CGU</a>
              </li>
              <li>
                <a href="/privacy" className="text-linen hover:text-brownSugar">Politique de confidentialité</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="w-full mt-6 text-center">
          <p className="text-linen">
            © {new Date().getFullYear()} Planify. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
