import React, { useState, useEffect, useContext } from 'react';
import { ProductCatalogContainer, ProductCatalogList, ProductCatalogTitle } from '../ProductCatalog/styledProductCatalog.js';
import ProductCard from '../ProductCatalog/ProductCard/ProductCard';
import { AppStateContext } from '../App';
import products from "../ProductCatalog/products";
import {SearchContainer, SearchInput} from "./styledSearch";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);
    const { setItems } = useContext(AppStateContext);

    const addToCart = (product) => {
        setItems((prevItems) => [...prevItems, product]);
    };

    useEffect(() => {
        const filteredProducts = products.filter((product) => {
            const productName = product.name.toLowerCase();
            const productBrand = product.brand.toLowerCase();
            const searchTermLower = searchTerm.toLowerCase();
            return (
                productName.includes(searchTermLower) ||
                productBrand.includes(searchTermLower)
            );
        });
        setFilteredProducts(filteredProducts);
    }, [searchTerm]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <SearchContainer>
            <SearchInput
                type="search"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Поиск товаров"
            />
            <ProductCatalogContainer>
                <ProductCatalogTitle>Каталог</ProductCatalogTitle>
                <ProductCatalogList>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onBuyClick={addToCart}
                            />
                        ))
                    ) : (
                        <p>:(
                        Ни один товар не подходит под ваш запрос</p>
                    )}
                </ProductCatalogList>
            </ProductCatalogContainer>
        </SearchContainer>
    );
};

export default Search;