import React from 'react';
import Footer from './Footer'; // adjust the path as needed
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen' >
      {/* Optional: Header */}
    <Navbar />

      {/* Main content */}
      <main className='flex-grow' >
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
