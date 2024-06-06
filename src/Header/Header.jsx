import React, {useContext, useEffect, useState} from 'react';
import { ConfigProvider, Space } from 'antd';
import {HeartOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined} from '@ant-design/icons';
import {
    CartIconButton, CounterItemsHeader, FavoritesIconButton, HeaderContainer, LocationFromProfile, Logo,
    SearchIconButton,
    UserIconButton
} from './styledHeader.js';
import { useNavigate } from 'react-router-dom';
import { AppStateContext } from '../App';

const Header = () => {
    const navigate = useNavigate();
    const { items, favorites } = useContext(AppStateContext);
    const [itemsCount, setItemsCount] = useState(0);
    const [personalInfo, setPersonalInfo] = useState('');

    const handleNavigation = (route) => {
        navigate(route);
    };

    useEffect(() => {
        setItemsCount(items.length);
        const info = localStorage.getItem('personalInfo');
        if (info) {
            setPersonalInfo(JSON.parse(info));
        }
    }, [items]);

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#1D1D1D',
                },
            }}
        >
            <HeaderContainer>
                <Logo onClick={() => handleNavigation('/catalog')}>KlyocShop</Logo>
                <Logo>
                    <LocationFromProfile/>
                    {personalInfo.city}
                </Logo>
                <Space>
                    <SearchIconButton onClick={() => handleNavigation('/search')}> <SearchOutlined /> </SearchIconButton>
                    <UserIconButton onClick={() => handleNavigation('/account')}> <UserOutlined /> </UserIconButton>
                    <FavoritesIconButton onClick={() => handleNavigation('/favorites')}>
                        <HeartOutlined />
                        {favorites.length > 0 && (
                            <CounterItemsHeader>
                                {favorites.length}
                            </CounterItemsHeader>
                        )}
                    </FavoritesIconButton>
                    <CartIconButton onClick={() => handleNavigation('/cart')}>
                        <ShoppingCartOutlined />
                        {items.length > 0 && (
                            <CounterItemsHeader>
                                {items.length}
                            </CounterItemsHeader>
                        )}
                    </CartIconButton>
                </Space>
            </HeaderContainer>
        </ConfigProvider>
    );
};

export default Header;