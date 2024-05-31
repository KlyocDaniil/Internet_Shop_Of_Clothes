import React from 'react';
import {Image, ImageContainer} from "./styledImage";

const NewCollection = () => {
    const handleImageClick = () => {
        window.scrollBy({
            top: 750,
            behavior: 'smooth'
        });
    };

    return (
        <ImageContainer>
            <Image
                src="https://sun9-5.userapi.com/impg/0rv-mJr_7P7n5WcM1eforD1ykdyJZwLa5p7uhw/GFOIcsWd0_E.jpg?size=1266x633&quality=96&sign=e4359a4701640ee8147fbf4819171caa&type=album"
                onClick={handleImageClick}
                alt={'adv'}
            />
        </ImageContainer>
    );
};

export default NewCollection;