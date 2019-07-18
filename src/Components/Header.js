import React from 'react';

const Header = (props) => {
    return (
        <div className="header-container">
            <p>Picture of the day</p>
            <p>{props.title}</p>
            <p>{props.date}</p>
        </div>
    );
}

export default Header;