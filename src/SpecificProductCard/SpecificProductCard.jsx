import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    MainWrap,
    Wrapper,
    Image,
    Info,
    ProductDetails,
    SizeSelect,
    Select,
    AddToCartButton,
    OtherProductsWrap,
    OtherProductCard,
    OtherProductImage,
    OtherProductInfo,
    OtherProductPrice,
    OtherProductsTitle,
    DescriptionListItem,
    Price,
    TextCardMain,
    DescriptionLabel,
    DescriptionValue,
    DescriptionList,
    FavoriteButton,
} from './styledSpecificPC.ts';

import { AppStateContext } from '../App';
import { HeartOutlined, HeartTwoTone } from '@ant-design/icons';
import { toggleFavorite } from "../utils/favoriteFunctions";
import products from "../ProductCatalog/products";
import notification from "antd/es/notification";

const SpecificProductCard = () => {
    const { id } = useParams();
    const currentProduct = products.find((product) => product.id === parseInt(id));
    const { favorites, setFavorites, setItems } = useContext(AppStateContext);
    const [isFavorite, setIsFavorite] = useState(favorites.some((fav) => fav.id === id));

    const addToCart = (product) => {
        setItems((prevItems) => [...prevItems, product]);

        notification.success({
            message: 'Успех',
            description: `"${product.name}  ${product.brand}"  добавлен в корзину`,
            placement: 'topLeft',
        });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const otherProducts = products.filter((product) => product.id !== parseInt(id));

    return (
        <MainWrap>
            <Wrapper>
                <Image src={currentProduct.image} alt={currentProduct.name} />
                <Info>
                    <ProductDetails>
                        <FavoriteButton onClick={() => toggleFavorite(favorites, setFavorites, currentProduct.id, currentProduct.image, currentProduct.price, currentProduct.name, currentProduct.brand, setIsFavorite, isFavorite)}>
                            {isFavorite ? (
                                <HeartTwoTone twoToneColor="#eb2f96" style={{ fontSize: '25px' }} />
                            ) : (
                                <HeartOutlined style={{ fontSize: '25px' }} />
                            )}
                        </FavoriteButton>
                        <Price>{currentProduct.name}</Price>
                        <TextCardMain>Бренд: {currentProduct.brand}</TextCardMain>
                        <DescriptionList>
                            {currentProduct.description.map((desc, index) => (
                                <DescriptionListItem key={index}>
                                    <DescriptionLabel>{desc.split('.')[0]}</DescriptionLabel>
                                    <DescriptionValue>{desc.split('.')[1]}</DescriptionValue>
                                </DescriptionListItem>
                            ))}
                        </DescriptionList>
                    </ProductDetails>
                    <Price>Цена: {currentProduct.price} руб.</Price>
                    <SizeSelect>
                        <Select defaultValue="Выберите размер">
                            {currentProduct.sizes.map((size, index) => (
                                <option key={index}>{size}</option>
                            ))}
                        </Select>
                    </SizeSelect>
                    <AddToCartButton onClick={() => addToCart(currentProduct)}>
                        В КОРЗИНУ
                    </AddToCartButton>
                </Info>
            </Wrapper>
            <OtherProductsWrap><OtherProductsTitle>
                <div>Остальные товары</div>
                <Link to={`/catalog`}>
                    <div>В каталог</div>
                </Link>
            </OtherProductsTitle>
                {otherProducts.map((product) => (
                    <OtherProductCard key={product.id}>
                        <Link to={`/card/${product.id}`}>
                            <OtherProductImage src={product.image} alt={product.name} />
                        </Link>
                        <OtherProductInfo>
                            <OtherProductPrice>{product.name}</OtherProductPrice>
                            <OtherProductPrice>Цена: {product.price} руб.</OtherProductPrice>
                        </OtherProductInfo>
                    </OtherProductCard>
                ))}
            </OtherProductsWrap>
        </MainWrap>
    );
};

export default SpecificProductCard;