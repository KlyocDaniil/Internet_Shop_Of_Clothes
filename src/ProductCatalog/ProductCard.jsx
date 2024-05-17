import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductCardContainer, ProductImage, ProductPrice, ProductName, ProductBrand, BuyButton } from './styledProductCard.ts';
import { useContext } from 'react';
import { Button } from "antd";
import { HeartOutlined, HeartTwoTone } from '@ant-design/icons';
import {AppStateContext} from "../App";
import { toggleFavorite } from "../utils/favoriteFunctions";

const ProductCard = ({ product }) => {
    const { id, image, price, name, brand } = product;
    const { favorites, setFavorites } = useContext(AppStateContext);
    const [isFavorite, setIsFavorite] = useState(favorites.some((fav) => fav.id === id));
    const handleToggleFavorite = () => {
        toggleFavorite(favorites, setFavorites, id, image, price, name, brand, setIsFavorite, isFavorite);
    };

    const productLink = `/card/${id}`;

    return (
        <ProductCardContainer>
            {image && (
                <Link to={productLink}>
                    <ProductImage src={image} alt={name} />
                </Link>
            )}
            <div style={{ position: 'relative', width: '100%' }}>
                <Button
                    type="text"
                    shape="circle"
                    size="large"
                    style={{ position: 'absolute', top: '10px', right: '10px' }}
                    onClick={ handleToggleFavorite }
                >
                    {isFavorite ? (
                        <HeartTwoTone twoToneColor="#eb2f96" style={{ fontSize: '25px' }} />
                    ) : (
                        <HeartOutlined style={{ fontSize: '25px' }} />
                    )}
                </Button>
            </div>
            {price && <ProductPrice>{price} руб.</ProductPrice>}
            {name && <ProductName>{name}</ProductName>}
            {brand && <ProductBrand>{brand}</ProductBrand>}
            {/*<BuyButton onClick={ addToCart }>Купить</BuyButton>*/}
        </ProductCardContainer>
    );
};

export default ProductCard;