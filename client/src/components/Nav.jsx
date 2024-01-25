// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';
import React, {useState} from 'react';

export default function Nav() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState('');

  const openModal = (tab) => {
    console.log('Opening modal for tab:', tab);
    setIsModalOpen(true);
    setCurrentTab(tab);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentTab('');
  }
  return (
    <Navbar
      links={[
        <Link key={1} className="nav-link text-light" to="/">
          Home
        </Link>,
        <Link key={2} className="nav-link text-light" to="/about">
          About
        </Link>,
        <Link key={3} className="nav-link text-light" to="/contact">
          Contact
        </Link>,
        <Link key={4} className="nav-link text-light" to="/Employment">
          Employment
        </Link>,
        <Link key={5} className="nav-link text-light" to="/Projects">
          Projects
        </Link>,
        <button key={6} className='login-btn' onClick={() => openModal('Login')}>
        Login
      </button>,
      <button key={7} className='signup-btn' onClick={() => openModal('Signup')}>
        Signup
      </button>
      ]}
    />
  );
}
