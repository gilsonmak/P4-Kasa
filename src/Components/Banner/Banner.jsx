import React from "react";
import "./Banner.scss"





function Banner(props) {
    return (

        <div className="banner">
            <img src={props.bannerImage} alt="Banner Home" />
            <div className="banner-text">
                {props.bannerText && <h1>{props.bannerText}</h1>}
            </div>
        </div>
    )
}

export default Banner