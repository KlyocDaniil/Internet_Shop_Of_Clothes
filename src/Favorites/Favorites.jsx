import React, { useContext } from 'react';
import { AppStateContext } from "../App";
import {
    CartContainer,
    CartItem,
    CartItemBrand, CartItemImage,
    CartItemInfo,
    CartItemName,
    CartItemPrice, CentredNotification, CentredNotificationWrapper,
    RemoveButton,

} from "../Cart/styledCart.js";
import {FavContainer, FavItems} from "./styledFavorites.js";
import {ProductCatalogTitle} from "../ProductCatalog/styledProductCatalog.js";
import {DeleteOutlined} from "@ant-design/icons";
import {ProductImage} from "../ProductCatalog/ProductCard/styledProductCard.js";
import {Link} from "react-router-dom";
import notification from "antd/es/notification";
import {AddToCartButton} from "../SpecificProductCard/styledSpecificPC.js";
import {addToCart} from "../utils/favoriteFunctions";


const Favorites = () => {
    const { favorites, setFavorites, setItems , items } = useContext(AppStateContext);

    const handleAddToCart = (product) => {
        addToCart(items, setItems, product);
        removeFromFavorites(product)
    };

    const removeFromFavorites = (product) => {
        const newFavorites = favorites.filter((item) => item !== product);
        setFavorites(newFavorites);
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
    };


    if (!favorites.length) {
        return (
            <FavContainer>
                <CentredNotificationWrapper>
                    <CentredNotification>В избранном пусто :(</CentredNotification>
                    <CentredNotification>В каталоге много вещей которые ждут, когда вы их оцените!</CentredNotification>
                </CentredNotificationWrapper>
            </FavContainer>
        )
    }

    return (
        <FavContainer>
            <ProductCatalogTitle>Избранное</ProductCatalogTitle>
            <FavItems>
                {favorites.map((product, index) => (
                    <CartItem key={product.id}>
                        <Link to={`/card/${product.id}`}>
                            <CartItemImage src={product.image} alt={product.name} />
                        </Link>
                        <CartItemInfo>
                            <CartItemName>{product.name}</CartItemName>
                            <CartItemBrand>{product.brand}</CartItemBrand>
                            <CartItemPrice>{product.price} руб.</CartItemPrice>
                        </CartItemInfo>
                        <AddToCartButton onClick={() => handleAddToCart(product)}>
                            В КОРЗИНУ
                        </AddToCartButton>
                        <RemoveButton onClick={() => removeFromFavorites(product)}>
                            <DeleteOutlined style={{ fontSize: 32, color: 'red' }} />
                        </RemoveButton>
                    </CartItem>
                ))}
            </FavItems>
        </FavContainer>
    );
};

export default Favorites;