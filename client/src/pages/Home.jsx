import React, {useState} from 'react';
import '../app.css';
import Modal from '../components/Modal/Modal';
import Nav from '../components/Nav';


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState('');

  const openModal = (tab) => {
    setIsModalOpen(true);
    setCurrentTab(tab);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className='highlight-box-container'>
      <div className="highlight-box">
        <h1>Home Page</h1>
        <p className='highlight-box-content'>
          'INSERT BASIC INFO HERE'
        </p>
      </div>
      <div className="highlight-box">
        <h2>About</h2>
        <p className='highlight-box-content'>
          'INSERT BASIC INFO HERE'
        </p>
      </div>
      <div className="highlight-box">
        <h2>Contact</h2>
        <p className='highlight-box-content'>
          'INSERT BASIC INFO HERE'
        </p>
      </div>
      <div className="highlight-box">
        <h2>Employment</h2>
        <p className='highlight-box-content'>
          'INSERT BASIC INFO HERE'
        </p>
      </div>
      <div className="highlight-box">
        <h2>Projects</h2>
        <p className='highlight-box-content'>
          'INSERT BASIC INFO HERE'
        </p>
      </div>


      {currentTab === 'Login' && (
        <Modal isOpen={isModalOpen} onClose={closeModal} currentTab={currentTab}>
          <h2>Login Form</h2>
          <form>
            <label>
              Username:
              <input type="text" />
            </label>
            <label>
              Password:
              <input type="password" />
            </label>
            <button type="submit">Login</button>
          </form>
        </Modal>
      )}
      {currentTab === 'Signup' && (
        <Modal isOpen={isModalOpen} onClose={closeModal} currentTab={currentTab}>
          <h2>Signup Form</h2>
          <form>
            <label>
              Email:
              <input type="text" />
            </label>
            <label>
              Username:
              <input type="text" />
            </label>
            <label>
              Password:
              <input type="password" />
            </label>
            <label>
              Confirm Password:
              <input type="password" />
            </label>
            <button type="submit">Signup</button>
          </form> 
        </Modal>
      )}
    </div>
  );
}
