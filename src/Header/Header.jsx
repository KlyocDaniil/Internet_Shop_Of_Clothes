import React, {useContext, useEffect, useState} from 'react';
import { ConfigProvider, Space } from 'antd';
import {HeartOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined} from '@ant-design/icons';
import { StyledButtonHeader, StyledIconButton, StyledSpan } from './styledHeader.js';
import { useNavigate } from 'react-router-dom';
import { AppStateContext } from '../App';

const Header = () => {
    const navigate = useNavigate();
    const { items, favorites } = useContext(AppStateContext);
    const [itemsCount, setItemsCount] = useState(0);


    const handleCartClick = () => {
        navigate('/cart');
    };

    const handleMainClick = () => {
        navigate('/catalog')
    }

    const handleAccountClick = () => {
        navigate('/account')
    }

    const handleFavoritesClick = () => {
        navigate('/favorites')
    }

    useEffect(() => {
        setItemsCount(items.length);
    }, [items]);


    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#1D1D1D',
                },
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1D1D1D', padding: '0 20px', height: '80px' }}>
                <div>
                    <StyledSpan onClick={handleMainClick}> KlyocShop</StyledSpan>
                    <StyledSpan>Таганрог</StyledSpan>
                </div>
                <Space>
                    {/*<StyledButtonHeader>Скидки</StyledButtonHeader>*/}
                    {/*<StyledButtonHeader>Женщинам</StyledButtonHeader>*/}
                    {/*<StyledButtonHeader>Мужчинам</StyledButtonHeader>*/}
                    {/*<StyledButtonHeader>Детям</StyledButtonHeader>*/}
                </Space>
                <Space>
                    <StyledIconButton > <SearchOutlined /> </StyledIconButton>
                    <StyledIconButton onClick={handleAccountClick}> <UserOutlined /> </StyledIconButton>
                    <StyledIconButton onClick={handleFavoritesClick} >
                        <HeartOutlined />
                        {favorites.length > 0 &&
                            <span style={{ marginLeft: '5px', fontSize: '12px', fontWeight: 'bold' }}>
                                {favorites.length}
                            </span>}
                    </StyledIconButton>
                    <StyledIconButton onClick={handleCartClick} >
                        <ShoppingCartOutlined />
                        {items.length > 0 && (
                            <span style={{ marginLeft: '5px', fontSize: '12px', fontWeight: 'bold' }}>
                                {items.length}
                            </span>
                        )}
                    </StyledIconButton>
                </Space>
            </div>
        </ConfigProvider>
    );
};

export default Header;