import React from "react";
import { NavLink } from "react-router-dom";
import logo  from "../../Assets/logo/LOGO-Header.png"
import "./Header.scss"

function Header() {

    return (
        <header className="header">
            <img src={logo} className="logo" alt="Logo Header" />
            <nav className="nav-header">
                <NavLink to="/" activeclassname="active">Accueil</NavLink>
                <NavLink to="/aboutpage"  activeclassname="active">A Propos</NavLink> 
            </nav>

        </header>
    )
}
export default Header