import React from "react";
import logo from "../../Assets/logo/LOGO Footer.png"
import "./Footer.scss"

function Footer() {

    return (
        <footer className="footer">
            <img src={logo} className="logo" alt="Logo Footer" />
            <p>© 2020 Kasa. All rights reserved</p>

        </footer>
    )
}
export default Footer