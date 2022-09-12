import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/logo192.png";
import "./Sidebar.css";
export const Sidebar = () => {
  const { logout } = useAuth();
  const [isClose, setIsClose] = useState(true);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleOpen = () =>{
    setIsClose(false);
  }
  const handleClose = () =>{
    setIsClose(true);
  }
  const handleSwitch = () =>{
    setIsClose(!isClose);
  }
  const sidebarData = {
    menu: [
      {
        icon: <ion-icon name="home-outline"></ion-icon>,
        label: "Dashboard",
        route: "/home",
      },
      {
        icon: <ion-icon name="people-outline"></ion-icon>,
        label: "Usuarios",
        route: "/users",
      },
      {
        icon: <ion-icon name="cloudy-outline"></ion-icon>,
        label: "Cloud Function",
        route: "/cloud-function",
      },
      {
        icon: <ion-icon name="fish-outline"></ion-icon>,
        label: "Ingredientes",
        route: "/ingredients",
      },
      {
        icon: <ion-icon name="extension-puzzle-outline"></ion-icon>,
        label: "Menus",
        route: "/menu",
      },
      {
        icon: <ion-icon name="barbell-outline"></ion-icon>,
        label: "Rutinas",
        route: "/rutine",
      },
    ],
    bottom: [
      {
        icon: <ion-icon name="construct-outline"></ion-icon>,
        label: "Configuración",
        route: "/config",
      },
      {
        icon: <ion-icon name="log-out-outline"></ion-icon>,
        label: "Cerrar Sesión",
        route: "/login",
        isLogout: true,
      },
    ],
  };
  return (
    <nav className={`sidebar ${isClose? "close" : ""} bg-primary`}>
      <header>
        <div className="image-text">
          <span className="image">
            <img src={logo} alt="logo" />
          </span>
          <div className="header-text"></div>
        </div>
        <ion-icon name="add-outline" onClick={handleSwitch}></ion-icon>
      </header>
      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links">
            {sidebarData.menu.map((menuoption)=> (
              <li className="nav-link">
              <NavLink id="NavLink" to={menuoption.route} className="menu-item is-active" onClick={handleClose}>
                {menuoption.icon}
                <span className="text nav-text">{menuoption.label}</span>
              </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="bottom-content">
          {sidebarData.bottom.map((menuoption)=> (
              <li className="nav-link" onClick = {menuoption.isLogout ? handleLogout : ""}>
              <NavLink id="NavLink" to={menuoption.route} className="menu-item is-active" onClick={handleClose}>
                {menuoption.icon}
                <span className="text nav-text">{menuoption.label}</span>
              </NavLink>
              </li>
            ))}
        </div>
      </div>
    </nav>
  );
};
