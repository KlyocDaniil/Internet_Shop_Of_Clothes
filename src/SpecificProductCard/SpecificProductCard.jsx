import React, {useContext, useEffect} from 'react';
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
} from './styledSpecificPC.ts';

import { CartContext } from '../App';
import { products } from '../ProductCatalog/products.js';

const SpecificProductCard = () => {
    const { id } = useParams();
    const currentProduct = products.find((product) => product.id === parseInt(id));
    const { setItems } = useContext(CartContext);

    const addToCart = (product) => {
        setItems((prevItems) => [...prevItems, product]);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const otherProducts = products.filter((product) => product.id!== parseInt(id));

    return (
        <MainWrap>
            <Wrapper>
                <Image src={currentProduct.image} alt={currentProduct.name} />
                <Info>
                    <ProductDetails>
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
                        <label htmlFor="size">Размер:</label>
                        <Select id="size">
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                        </Select>
                    </SizeSelect>
                    <AddToCartButton onClick={() => addToCart(currentProduct)}>
                        В КОРЗИНУ
                    </AddToCartButton>
                </Info>
            </Wrapper>
            <OtherProductsWrap>
                <OtherProductsTitle>Остальные товары</OtherProductsTitle>
                {otherProducts.map((product) => (
                        <OtherProductCard>
                            <Link to={`/card/${product.id}`} key={product.id}>
                                <OtherProductImage src={product.image} alt={product.name} />
                            </Link>
                            <OtherProductInfo>
                                <OtherProductPrice>{product.name}</OtherProductPrice>
                                <OtherProductPrice>Цена: {product.price} руб.</OtherProductPrice>
                                {/*<OtherProductAddToCartButton onClick={() => addToCart(product)}>В КОРЗИНУ</OtherProductAddToCartButton>*/}
                            </OtherProductInfo>
                        </OtherProductCard>
                ))}
            </OtherProductsWrap>
        </MainWrap>
    );
};

export default SpecificProductCard;