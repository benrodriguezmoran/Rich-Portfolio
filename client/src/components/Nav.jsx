// Bringing in the required import from 'react-router-dom'
import { Link } from "react-router-dom";
import Navbar from "./UI/Navbar";

export default function Nav({ openLoginModal, openSignupModal}) {
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
        <button
        key={6}
        className="login-btn"
        onClick={() => {
          console.log("Login button clicked");
          openLoginModal("Login");
        }}>
        Login
        </button>,
        <button
          key={7}
          className="signup-btn"
          onClick={() => {
            console.log("Signup button clicked");
            openSignupModal("Signup");
          }}>
          Signup
        </button>      
      ]}
    />
  );
}
