import React from "react";
import "./Tags.scss"

export default function Tags ({tags}) {

    return (

        <div className="tags-container">
            {tags.map((tag, index) => (
                <button key={index} className="tags" >
                    {tag}
                </button>
            ))}
        </div>

    )
}
