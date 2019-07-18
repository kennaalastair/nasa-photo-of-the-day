import React from 'react';
// import Image from "./StyledWidgets.js";

const Header = (props) => {
    return (
        <div className="header-container">
            <p className="header">Picture of the day</p>
            <p className="title">{props.title}</p>
            <p className="date">{props.date}</p>
        </div>
    );
}

export default Header;