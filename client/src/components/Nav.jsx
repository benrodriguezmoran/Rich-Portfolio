// Bringing in the required import from 'react-router-dom'
import { Link } from "react-router-dom";
import Navbar from "./UI/Navbar";
import React, { useState } from "react";
import styled from "@mui/system/styled";
import { Dropdown } from "@mui/base/Dropdown";
import { MenuButton } from "@mui/base/MenuButton";
import { Menu } from "@mui/base/Menu";
import { MenuItem } from "@mui/base/MenuItem";

// Styled components for the dropdown button and menu items
const StyledMenuButton = styled("button")`
  display: inline-flex;
  align-items: center;
  background-color: #333743;
  color: #BCBFC6;
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  cursor: pointer;
  background-color: #333743;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
`;

const StyledListbox = styled("ul")`
  margin: 8px 0;
  padding: 4px;
  display: flex;
  flex-direction: column;
  background-color: #333743;
  color: #BCBFC6;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: all 1s ease-in-out;
`;

const StyledMenuItem = styled("li")`
  display: flex;
  align-items: center;
  padding: 6px 8px;
  min-height: 24px;
  transition: all 1s ease-in-out;
`;

export default function Nav({ openLoginModal, openSignupModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };
  return (
      <Navbar
        links={[
          <Dropdown key={1}>
            
            <MenuButton slots={{ root: StyledMenuButton }}>
              My account
            </MenuButton>
            <Menu slots={{ listbox: StyledListbox }}>
              <MenuItem slots={{ root: StyledMenuItem }}>Profile</MenuItem>
              <MenuItem slots={{ root: StyledMenuItem }}>
                Language settings
              </MenuItem>
              <MenuItem slots={{ root: StyledMenuItem }}>Log out</MenuItem>
            </Menu>
          </Dropdown>,
          <Link key={2} className="nav-link text-light" to="/">
            Home
          </Link>,
          <Link key={3} className="nav-link text-light" to="/about">
            About
          </Link>,
          <Link key={4} className="nav-link text-light" to="/contact">
            Contact
          </Link>,
          <Link key={5} className="nav-link text-light" to="/Employment">
            Employment
          </Link>,
          <Link key={6} className="nav-link text-light" to="/Projects">
            Projects
          </Link>,
          <button
            key={7}
            className="login-btn"
            onClick={() => {
              console.log("Login button clicked");
              openLoginModal("Login");
            }}
          >
            Login
          </button>,
          <button
            key={8}
            className="signup-btn"
            onClick={() => {
              console.log("Signup button clicked");
              openSignupModal("Signup");
            }}
          >
            Signup
          </button>,
        ]}
      />
  );
}
