import React, {useContext, useEffect} from 'react';
import ProductCard from './ProductCard';
import { ProductCatalogContainer, ProductCatalogList, ProductCatalogTitle } from './styledProductCatalog.js';
import { AppStateContext } from '../App';
import products from "./products";

const ProductCatalog = () => {
    const { setItems } = useContext(AppStateContext);

    const addToCart = (product) => {
        setItems((prevItems) => [...prevItems, product]);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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