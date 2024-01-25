// Bringing in the required import from 'react-router-dom'
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import './App.css';
import Modal from './components/Modal/Modal';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  const [isOpen, setIsOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState('');

  const openModal = (tab) => {
    console.log('Opening modal for tab:', tab);
    setIsOpen(true);
    setCurrentTab(tab);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentTab('');
  }
  return (
    <>
      {isOpen && <Modal isOpen={isOpen} onClose={closeModal} currentTab={currentTab} />}
      <Nav openModal={openModal} />
      <Outlet />
    </>
  );
}

export default App;
