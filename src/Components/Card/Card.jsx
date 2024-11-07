import React from "react";
import "./Card.scss"



function Card({id,title,cover}) {


    return (

        <div className="card">
            <img src={cover} alt={title} className="card-image" />
            <div className="card-text">
                <h2>{title}</h2>

            </div>

        </div>

        
    )



}

export default Card