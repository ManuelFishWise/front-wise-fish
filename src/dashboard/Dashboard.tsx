import { useEffect, useState } from "react";
import { Appbar, Sidebar } from "./";
import RouterOutlet from "./RouterOutlet";
import "./Dashboard.css";

import Lagos from "../modules/Lagos/Lagos";
import ListTypeFish from "../modules/settings/ListTypeFish/ListTypeFish";

const Dashboard: React.FC = () => {
  const routes = [
    { path: "lagos", element: <Lagos /> },
    { path: "settings/type-fish", element: <ListTypeFish /> },
  ];

  const [sidebarWidth, setSidebarWidth] = useState<string>("var(--width-sidebar-mini)");
  const [menuItemClass, setMenuItemClass] = useState<string>('menu-item-mini');
  const [_, setWindowWidth] = useState<number>(window.innerWidth);
  const [isSidebarMini, setIsSidebarMini] = useState<boolean>(window.innerWidth <= 511);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsSidebarMini(width <= 511);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebarWidth = () => {
    setSidebarWidth(
      sidebarWidth === "var(--width-sidebar-mini)"
        ? "var(--width-sidebar-normal)"
        : "var(--width-sidebar-mini)"
    );
    setMenuItemClass(
      sidebarWidth === "var(--width-sidebar-mini)"
        ? "menu-item-normal"
        : "menu-item-mini"
    );
  };

  const sidebarStyle: React.CSSProperties | { width: string } = isSidebarMini
    ? { position: 'absolute', top: '84px', bottom: 0, left: 0, zIndex: 1, width: sidebarWidth }
    : { width: sidebarWidth };

  return (
    <div className="dashboard-container">
      <div className="dashboard-left-sidebar" style={sidebarStyle}>
        <Sidebar menuItemClass={menuItemClass} />
      </div>
      <div className="dashboard-right-appbar">
        <div className="dashboard-appbar">
          <Appbar isSidebarMini={isSidebarMini} toggleSidebarWidth={toggleSidebarWidth} />
        </div>
        <div className="dashboard-content">
          <RouterOutlet routes={routes} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
