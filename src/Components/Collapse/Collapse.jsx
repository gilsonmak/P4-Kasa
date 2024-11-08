import React, { useState } from 'react';
import arrow from "../../Assets/arrow/down.png"
import "./Collapse.scss"



function Collapse ({title, description}) {

    const [open, setOpen] = useState(false);


    const toggleCollapse = () => {
        setOpen(!open);
    };

    return (
        <div className={`collapse-container ${open ? "open" : ""}`}>

            <div className='collapse-title' onClick={toggleCollapse}> {title}
                <img src={arrow} alt='flèche' className={`arrow-icon ${open ? "arrow-down" : "arrow-up"}`} />
            </div>

            <div className={`collapse-description ${open ? "open" : ""}`}> 
                {description}
            </div>
        </div>


    )


}

export default Collapse




