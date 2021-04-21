import React from "react";

import "./AlertButton.css";

const AlertButton = ({message, children})=>{
    const handleClick = ()=> alert(message);
    return (
        <button className="btn"
        onClick={handleClick}>
            {children}
        </button>
    )
    // return React.createElement("button", {message}, children)
}

export default AlertButton;