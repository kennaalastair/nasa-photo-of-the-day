import React from 'react';
import Image from "./StyledWidgets.js";

const Picture = (props) => {
    return (
        <Image src={props.url} />
    )
}

export default Picture;