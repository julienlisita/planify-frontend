import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header/>
      <main>{children}</main>
     <Footer/>
    </div>
  );
};

export default MainLayout;