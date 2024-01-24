import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
const handleInputChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
};
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
        username: '',
        password: '',
    });
};
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
        {currentTab === 'Login' && <h2>Login</h2>}
        {currentTab === 'Signup' && <h2>Signup</h2>}
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleInputChange} />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange}/>
        
        {currentTab === 'Signup' && (
            <>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange}/>
            </>
            )}

<button type="submit">{currentTab === 'Login' ? 'Login' : 'Signup'}</button>
        </form>
        <p>
          {currentTab === 'Login' ? "Don't have an account? " : "Already have an account? "}
          <a href="#">{currentTab === 'Login' ? 'Sign up here' : 'Login here'}</a>.
        </p>
      </div>
    </div>
  );
};

export default Modal;
