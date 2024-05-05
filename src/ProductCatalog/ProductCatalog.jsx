import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import { ProductCatalogContainer, ProductCatalogList, ProductCatalogTitle } from './styledProductCatalog.ts';
import { CartContext } from '../App';
import products from "./products";

const ProductCatalog = () => {
    const { setItems } = useContext(CartContext);

    const addToCart = (product) => {
        setItems((prevItems) => [...prevItems, product]);
    };

    return (
        <ProductCatalogContainer>
            <ProductCatalogTitle> Каталог товаров </ProductCatalogTitle>
            <p>Количество товаров: {products.length}</p>
            <ProductCatalogList>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onBuyClick={addToCart}
                    />
                ))}
            </ProductCatalogList>
        </ProductCatalogContainer>
    );
};

export default ProductCatalog;