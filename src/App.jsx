// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8 text-center">
        <Outlet /> {/* This will render the current route's element (Home, About, Contact) */}
      </div>
    </div>
  );
};

export default App;
