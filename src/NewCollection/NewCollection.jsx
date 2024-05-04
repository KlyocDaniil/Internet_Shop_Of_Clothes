import React from 'react';

const NewCollection = () => {
    const handleImageClick = () => {
        window.scrollBy({
            top: 750,
            behavior: 'smooth'
        });
    };

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center', // Add this
                cursor: "pointer"
            }}
        >
            <img
                src="https://sun9-5.userapi.com/impg/0rv-mJr_7P7n5WcM1eforD1ykdyJZwLa5p7uhw/GFOIcsWd0_E.jpg?size=1266x633&quality=96&sign=e4359a4701640ee8147fbf4819171caa&type=album"
                onClick={handleImageClick}
                style={{ maxWidth: '100%' }}
            />
        </div>
    );
};

export default NewCollection;