import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { IconType } from "react-icons";

import { NAVIGATION } from "./navigation";

import "./Sidebar.css";

interface SidebarProps {
  menuItemClass: string;
}

interface MenuItem {
  id: number;
  title: string;
  link: string;
  icon: IconType;
  children?: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ menuItemClass }) => {
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  console.log(location);

  const renderMenuItem = (menuItem: MenuItem) => {
    const Icon = menuItem.icon;
    const isActive =
      menuItem.link === location.pathname ||
      (menuItem.children &&
        menuItem.children.some((child) => child.link === location.pathname));

    const handleMenuClick = (id: number) => {
      if (openMenuId === id) {
        setOpenMenuId(null);
      } else {
        setOpenMenuId(id);
      }
    };

    const menuItemMini = (
      <div className="mini-menu" style={{ width: "100%" }}>
        <div
          className={`container-mini-menu-item ${isActive ? "active" : ""}`}
          onClick={() => navigate(menuItem.link)}
        >
          {Icon && <Icon />}
        </div>
      </div>
    );

    const menuItemNormal = (
      <div className="normal-menu" style={{ width: "100%" }}>
        <div
          className={`container-normal-menu-item ${isActive ? "active" : ""}`}
          onClick={() => navigate(menuItem.link)}
        >
          <div className="item-normal">
            <div className="item-normal-icon">{Icon && <Icon />}</div>
            <div className="item-normal-desc">{menuItem.title}</div>
          </div>
        </div>
      </div>
    );

    return (
      <div key={menuItem.id} className={menuItemClass}>
        <div onClick={() => handleMenuClick(menuItem.id)}>
          {menuItemClass !== "menu-item-mini" ? menuItemNormal : menuItemMini}
        </div>
        {menuItem.children && openMenuId === menuItem.id && (
          <div
            className={
              menuItemClass !== "menu-item-mini"
                ? "submenu-item-normal"
                : "submenu-item-mini"
            }
          >
            {menuItem.children.map((childItem) => (
              <div
                key={childItem.id}
                className={`submenu-item ${location.pathname == childItem.link ? "active" : ""}`}
                onClick={() => navigate(childItem.link)}
              >
                {childItem.icon && <childItem.icon />}
                <div className="submenu-normal-desc">
                  {menuItemClass !== "menu-item-mini" ? childItem.title : ""}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return <div className="sidebar-menu">{NAVIGATION.map(renderMenuItem)}</div>;
};

export default Sidebar;
