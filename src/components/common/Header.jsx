// import React from 'react';

// import logo from '../../assets/logo.svg'
// import userIcon from '../../assets/user.svg';
// import notificationIcon from '../../assets/notification.svg';
// import settingsIcon from '../../assets/settings.svg';
// import logoutIcon from '../../assets/logout.svg';

// // Configuration responsive
// const Header = () => {
//   return (
//     <header className="bg-taupe p-4 shadow-md w-full">
//       <div className="flex flex-wrap justify-between items-center w-full"> {/*add container max-auto pour comparer */}
//         <div className="flex items-center w-full sm:w-auto mb-16 sm:mb-0">

//           <img src={logo} alt="Logo" className="h-13 w-13 mr-12" />
//           <nav className="w-full sm:w-auto sm:ml-24">
//             <ul className="flex flex-wrap sm:flex-nowrap space-x-10 justify-center w-full uppercase text-sm sm:text-base">
//               <li>
//                 <a href="/" className="text-linen hover:text-brownSugar">Accueil</a>
//               </li>
//               <li>
//                 <a href="/about" className="text-linen hover:text-brownSugar">Recettes</a>
//               </li>
//               <li>
//                 <a href="/contact" className="text-linen hover:text-brownSugar">Planification</a>
//               </li>
//               <li>
//                 <a href="/contact" className="text-linen hover:text-brownSugar">Actus</a>
//               </li>
//             </ul>
//           </nav>
//         </div>

//         <div className="flex items-center w-full sm:w-1/4 justify-center mt-4 sm:mt-0 order-last sm:order-none">
//           <input
//             type="text"
//             placeholder="Rechercher..."
//             className="p-2 rounded-full border bg-linen h-8 w-full"
//           />
//         </div>

//         <div className="flex items-center space-x-10 w-full sm:w-auto justify-end mt-4 sm:mt-0">
//           <div className="group">
//             <img src={userIcon} alt="User"
//               className="h-6 w-6 cursor-pointer group-hover:opacity-50" />
//           </div>
//           <div className="group">
//             <img src={notificationIcon} alt="Notification" className="h-8 w-8 cursor-pointer group-hover:opacity-50" />
//           </div>
//           <div className="group">
//             <img src={settingsIcon} alt="Settings" className="h-8 w-8 cursor-pointer group-hover:opacity-50" />
//           </div>
//           <div className="group">
//             <img src={logoutIcon} alt="Logout" className="h-8 w-8 cursor-pointer group-hover:opacity-50" />
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Header

import React from 'react';
import UserMenu from './UserMenu';
import NavBar from './navbar';
import Logo from './Logo';
import SearchBar from './SearchBar';
import useSearch from '../../hooks/useSearch';


const Header = () => {

  const { search } = useSearch(); 

  const handleSearchChange = async (query) => {
    await search(query);  
  };

  return (
    <header className="p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center ">
        <Logo />
        <NavBar />
        <SearchBar onSearch={handleSearchChange}/>
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
