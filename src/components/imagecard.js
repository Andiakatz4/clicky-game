import React from 'react';

const imageCard = (props) => {
    <div 
        role="img"
        onClick={() => props.handleClick()}
        style={{ background: `url("${props.image}")`}}
    />
}

export default imageCard