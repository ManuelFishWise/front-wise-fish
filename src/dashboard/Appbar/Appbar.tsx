import React from "react";
import { FaBars } from "react-icons/fa";
import { Avatar, Dropdown } from "../../shared";
import "./Appbar.css";

import LogoAppbar from "../../assets/img/logo-mini.png";

interface AppbarProps {
  toggleSidebarWidth: () => void;
  isSidebarMini: boolean
}

const Appbar: React.FC<AppbarProps> = ({ toggleSidebarWidth, isSidebarMini }) => {
  const dropdownContent = (
    <>
      <div>
        <h2>Dropdown Content</h2>
      </div>
      <div>
        <p>Additional Content</p>
      </div>
    </>
  );

  return (
    <React.Fragment>
      <Dropdown
        position="bottom-left"
        toggleContent={<Avatar size="medium">M</Avatar>}
        dropdownContent={dropdownContent}
      />
      <FaBars className="icon-expand" onClick={toggleSidebarWidth} />
    </React.Fragment>
  );
};

export default Appbar;
