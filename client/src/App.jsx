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

  const closeModal = () => {
    setIsOpen(false);
    setCurrentTab('');
  }
  const openSignupModal = () => {
    setIsOpen(true);
    setCurrentTab('Signup');
  }
  const openLoginModal = () => {
    setIsOpen(true);
    setCurrentTab('Login');
  }
  const toggleModal = () => {
    if (currentTab === "Login") {
      openSignupModal();
    } else if (currentTab === "Signup") {
      openLoginModal();
    }
  }

  return (
    <>
      {isOpen && <Modal isOpen={isOpen} onClose={closeModal} currentTab={currentTab} toggleModal={toggleModal}/>}
      <Nav openLoginModal={openLoginModal} openSignupModal={openSignupModal} toggleModal={toggleModal}/>
      <Outlet />
    </>
  );
}

export default App;
