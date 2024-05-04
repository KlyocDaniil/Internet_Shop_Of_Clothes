import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import {
    AddToCartButton,
    Info,
    SizeSelect,
    Wrapper,
    Image,
    MainWrap,
    DescriptionListItem,
    DescriptionLabel,
    DescriptionValue, Price, Select, TextCardMain
} from './styledSpecificPC.ts';
import { CartContext } from '../App';
import products from "../ProductCatalog/products";
import notification from "antd/es/notification";

const SpecificProductCard = () => {
    const { index } = useParams();
    const product = products[index];

    const { setItems } = useContext(CartContext);

    const addToCart = (product) => {
        setItems((prevItems) => [...prevItems, product]);
        notification.success({
            message: 'Товар добавлен в корзину',
            description: `Товар "${product.name + ' ' + product.brand}" был добавлен в корзину`,
            placement: 'bottomRight',
        });
    };

    return (
        <MainWrap>
            <Wrapper>
                <Image src={product.image} alt={product.name} />
                <Info>
                    <Price>{product.name}</Price>
                    <Price>Цена: {product.price} руб.</Price>
                    <TextCardMain>Бренд: {product.brand}</TextCardMain>
                    <ul>
                        {product.description.map((desc, index) => (
                            <DescriptionListItem key={index}>
                                <DescriptionLabel>{desc.split('.')[0]}</DescriptionLabel>

                                <DescriptionValue>{desc.split('.')[1]}</DescriptionValue>
                            </DescriptionListItem>
                        ))}
                    </ul>
                    <SizeSelect>
                        <label htmlFor="size">Размер:</label>
                        <Select id="size">
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                        </Select>
                    </SizeSelect>
                    <AddToCartButton onClick={() => addToCart(product)}>В КОРЗИНУ</AddToCartButton>
                </Info>
            </Wrapper>
        </MainWrap>
    );
}

export default SpecificProductCard;