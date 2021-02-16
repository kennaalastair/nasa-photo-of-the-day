import React from 'react';
// import HeaderTitle from "./StyledWidgets.js";
import styled from "styled-components";

const HeaderTitle = styled.p`
    background: #EC9EFF;
    font-weight: bold;
    padding: 15px 0;
`;

const PhotoTitle = styled.p`
    background: #BB9EFF;
    padding: 15px 0;
`;

const Date = styled.p`
    background: #9EB1FF;
    padding: 15px 0;
    margin-bottom: 20px;
`;

const Header = (props) => {
    return (
        <div className="header-container">
            <HeaderTitle>Picture of the day</HeaderTitle>
            <PhotoTitle>Title: {props.title}</PhotoTitle>
            <Date>Date: {props.date}</Date>
        </div>
    );
}

export default Header;