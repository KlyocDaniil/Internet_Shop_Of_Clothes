import React, { createContext, useState } from 'react';
import Header from "./Header/Header";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ProductCatalog from "./ProductCatalog/ProductCatalog";
import Cart from "./Cart/Cart";
import SpecificProductCard from "./SpecificProductCard/SpecificProductCard";
import products from "./ProductCatalog/products";
import NewCollection from "./NewCollection/NewCollection";
import PersonalAccount from "./PersonalAccount/PersonalAccount";
import Favorites from "./Favorites/Favorites";
import personalInfo from "./PersonalAccount/PersonalInfo";
export const AppStateContext = createContext();

const App = () => {
    // const [items, setItems] = useState([]);
    // const [favorite, isFavorite] = useState(false)

    const [items, setItems] = useState(() => {
        const storedItems = localStorage.getItem('cart');
        return storedItems ? JSON.parse(storedItems) : [];
    });

    const [favorites, setFavorites] = useState(() => {
        const storedFavorites = localStorage.getItem('favorites');
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    });

    const [orders, setOrders] = useState( () => {
        const storedOrders = localStorage.getItem('orders')
        return storedOrders ? JSON.parse(storedOrders) : []
    })

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