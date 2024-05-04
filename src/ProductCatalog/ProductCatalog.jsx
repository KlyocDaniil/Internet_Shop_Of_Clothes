import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import {ProductCatalogContainer, ProductCatalogList, ProductCatalogTitle} from './styledProductCatalog.ts';
import { CartContext } from '../App';
import products from "./products";

const ProductCatalog = () => {
    const { setItems } = useContext(CartContext);

    const addToCart = (product) => {
        setItems((prevItems) => [...prevItems, product]);
    };

    const productCards = products.map((product, index) => (
        <ProductCard
            key={index}
            image={product.image}
            price={product.price}
            name={product.name}
            brand={product.brand}
            onBuyClick={addToCart}
            linkTo={`/card/${index}`}
        />
    ));

    return (
        <ProductCatalogContainer>
            <ProductCatalogTitle> Каталог товаров </ProductCatalogTitle>
            <p>Количество товаров: {products.length}</p>
            <ProductCatalogList>{productCards}</ProductCatalogList>
        </ProductCatalogContainer>
    );
};

export default ProductCatalog;