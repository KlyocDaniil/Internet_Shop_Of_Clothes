import React, { createContext, useState } from 'react';
import Header from "./Header/Header";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ProductCatalog from "./ProductCatalog/ProductCatalog";
import Cart from "./Cart/Cart";
import SpecificProductCard from "./SpecificProductCard/SpecificProductCard";
import products from "./ProductCatalog/products";
import NewCollection from "./NewCollection/NewCollection";
import PersonalAccount from "./PersonalAccount/PersonalAccount";

export const CartContext = createContext();

const App = () => {
    const [items, setItems] = useState([]);

    return (
        <CartContext.Provider value={{ items, setItems }}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/catalog" element={
                        <div>
                            <NewCollection />
                            <ProductCatalog products={products} />
                        </div>
                    }/>
                    <Route path="/account" element={<PersonalAccount />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/card/:id" element={<SpecificProductCard products={products} />} />
                    <Route path="/" element={<Navigate to="/catalog" />} />
                </Routes>
            </BrowserRouter>
        </CartContext.Provider>
    );
};

export default App;