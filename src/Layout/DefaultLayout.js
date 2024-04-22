import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DefaultLayout = ({ children }) => {
  return (
    <>
        {children}
        <Footer />
    </>
  );
};

export default DefaultLayout;