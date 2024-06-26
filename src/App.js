import React, {createContext, useEffect, useState} from 'react';
import Header from "./Header/Header";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ProductCatalog from "./ProductCatalog/ProductCatalog";
import Cart from "./Cart/Cart";
import SpecificProductCard from "./SpecificProductCard/SpecificProductCard";
import products from "./ProductCatalog/products";
import NewCollection from "./NewCollection/NewCollection";
import PersonalAccount from "./PersonalAccount/PersonalAccount";
import Favorites from "./Favorites/Favorites";
import useLocalStorage from "./customHooks/useLocalStorage";
import Search from "./Search/Search"; // Импорт кастомного хука
export const AppStateContext = createContext();

const App = () => {
    const [items, setItems] = useLocalStorage('cart', []); // Использование кастомного хука
    const [favorites, setFavorites] = useLocalStorage('favorites', []);
    const [orders, setOrders] = useLocalStorage('orders', []);

    return (
        <AppStateContext.Provider value={{ items, setItems, favorites, setFavorites, orders, setOrders }}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/catalog" element={
                        <div>
                            <NewCollection />
                            <ProductCatalog products={products} />
                        </div>
                    }/>
                    <Route path="/search" element={<Search />} />
                    <Route path="/account" element={<PersonalAccount />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/card/:id" element={<SpecificProductCard products={products} />} />
                    <Route path="/" element={<Navigate to="/catalog" />} />
                    <Route path="/favorites" element={<Favorites/>} />
                </Routes>
            </BrowserRouter>
        </AppStateContext.Provider>
    );
};

export default App;