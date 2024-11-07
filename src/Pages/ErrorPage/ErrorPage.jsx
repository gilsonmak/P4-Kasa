import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.scss"




function ErrorPage() {

    return (

        <div className="error">
            <h1 className="error-titre">404</h1>
            <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="error-link">Retourner sur la page d’accueil</Link> 
        </div>
    )
}

export default ErrorPage