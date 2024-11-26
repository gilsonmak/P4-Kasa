import React from "react";
import starRed from "../../Assets/ratings/starRed.png"
import starGrey from "../../Assets/ratings/starGrey.png"
import "./Ratings.scss"

export default function Ratings ({rating}) {
    const maxStars = [];

    for (let i = 0; i < 5; i++) {
        const star = (i < rating) ? starRed : starGrey;

        maxStars.push(<img src={star} alt="rating" key={i} className="ratings" />)
    }

    return maxStars;

}