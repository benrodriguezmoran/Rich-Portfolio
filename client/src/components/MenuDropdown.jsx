import React, {useState} from "react";
import styled from "@mui/system/styled";
import { Dropdown } from "@mui/base/Dropdown";
import { MenuButton } from "@mui/base/MenuButton";
import { Menu } from "@mui/base/Menu";
import { MenuItem } from "@mui/base/MenuItem";
import "./Menu.css";

const StyledMenuButton = styled("button")``;
const StyledListbox = styled("ul")``;
const StyledMenuItem = styled("li")``;

export default function MenuDropdown({ openLoginModal, openSignupModal }) {
  const [isButtonClicked, setIsButtonClicked] =  useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(true);
    setTimeout(() => {
      setIsButtonClicked(false);
    }, 1000);
  };

  const handleLanguageSettingsClick = () => {
    alert("cringe joke > doing what's needed");
  };

  return (
    <Dropdown key={1}>
      <MenuButton 
      slots={{ root: StyledMenuButton }} 
      className={`StyledMenuButton ${isButtonClicked ? "active" :""}`}
      onClick={handleButtonClick}
      >
        My account
      </MenuButton>
      <Menu slots={{ listbox: StyledListbox }} className="StyledListbox">
        <MenuItem slots={{ root: StyledMenuItem }} className="StyledMenuItem">Profile</MenuItem>
        <MenuItem 
        slots={{ root: StyledMenuItem }} 
        className="StyledMenuItem"
        onClick={handleLanguageSettingsClick}
        >
          Language settings
        </MenuItem>
        <MenuItem slots={{ root: StyledMenuItem }} className="StyledMenuItem">Log out</MenuItem>
      </Menu>
    </Dropdown>
  );
}

