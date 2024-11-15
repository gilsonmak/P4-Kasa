import React, { useEffect, useRef, useState } from 'react';
import arrow from "../../Assets/arrow/down.png";
import "./Collapse.scss";

function Collapse({ title, description }) {
    const [open, setOpen] = useState(false);
    const [height, setHeight] = useState(0);
    const ContentRef = useRef(null);

    const toggleCollapse = () => {
        setOpen(!open);
    };

    useEffect(() => {
        if (ContentRef.current) {
            setHeight(open ? ContentRef.current.scrollHeight : 0);
        }
    }, [open]);

    return (
        <div className={`collapse-container ${open ? "open" : ""}`}>
            <div className="collapse-title" onClick={toggleCollapse}>
                {title}
                <img 
                    src={arrow} 
                    alt="flèche" 
                    className={`arrow-icon ${open ? "arrow-down" : "arrow-up"}`} 
                />
            </div>
            <div
    ref={ContentRef}
    className={`collapse-description ${open ? "open" : ""}`}
    style={{ maxHeight: `${height}px` }}
>
    {description}
</div>

        </div>
    );
}

export default Collapse;
