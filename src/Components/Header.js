import React from 'react';

const Header = (props) => {
    return (
        <div className="header-container">
            <p>Picture of the day</p>
            <p>{props.titleState}</p>
            <p>{props.dateState}</p>
        </div>
    );
}

export default Header;