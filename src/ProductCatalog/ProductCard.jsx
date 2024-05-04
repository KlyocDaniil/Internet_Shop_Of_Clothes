import React, {useContext, useState} from 'react';
import { Button } from 'antd';
import { HeartOutlined, HeartTwoTone } from '@ant-design/icons';
import { ProductCardContainer, ProductImage, ProductPrice, ProductName, ProductBrand, BuyButton } from './styledProductCard.ts';
import { CartContext } from '../App';
import notification from 'antd/es/notification';
import {Link} from "react-router-dom";

const ProductCard = ({ image, price, name, brand, linkTo }) => {
    const { setItems } = useContext(CartContext);
    const [isFavorite, setIsFavorite] = useState(false); // new state to track favorited status
    const addToCart = () => {
        setItems((prevItems) => [...prevItems, { image, price, name, brand }]);
        notification.success({
            message: 'Товар добавлен в корзину',
            description: `Товар "${name + ' ' + brand}" был добавлен в корзину`,
            placement: 'topLeft',
        });
    };

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <ProductCardContainer>
            <Link to={linkTo}>
                <ProductImage src={image} alt={name} />
            </Link>
            <div style={{ position: 'relative', width: '100%' }}>
                <Button
                    type="text"
                    shape="circle"
                    size="large"
                    style={{ position: 'absolute', top: '10px', right: '10px' }}
                    onClick={toggleFavorite}
                >
                    {isFavorite? (
                        <HeartTwoTone twoToneColor="#eb2f96" style={{ fontSize: '25px' }} />
                    ) : (
                        <HeartOutlined style={{ fontSize: '25px' }} />
                    )}
                </Button>
            </div>
            <ProductPrice>{price} руб.</ProductPrice>
            <ProductName>{name}</ProductName>
            <ProductBrand>{brand}</ProductBrand>
            <BuyButton onClick={addToCart}>Купить</BuyButton>
        </ProductCardContainer>
    );
};

export default ProductCard;