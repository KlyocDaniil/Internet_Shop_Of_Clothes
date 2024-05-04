import React from 'react';

const ImageComponent = ({ src }) => {
    return (
        <img src={src} alt="Image" style={{  margin: '2% auto' }} />
    );
};

export default ImageComponent;