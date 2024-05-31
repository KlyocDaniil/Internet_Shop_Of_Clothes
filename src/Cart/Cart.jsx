import React, {useContext, useEffect, useState} from 'react';
import { AppStateContext } from '../App';
import {
    CartItem,
    CartItemImage,
    CartItemInfo,
    CartItemName,
    CartItemBrand,
    CartItemPrice,
    RemoveButton,
    CartItems,
    CartContainer,
    Checkbox,
    TotalPrice,
    Delivery,
    Discount,
    TotalCost,
    ItemsCount,
    InfoCart,
    ApplyPromoCodeButton,
    CheckoutButton,
    PromocodeInputButton,
    PromoCodeInput,
    CentredNotification,
    CentredNotificationContainer,
    CentredNotificationWrapper,
    CartQuantity,
    CartQuantityButton, CartQuantityInput,
} from './styledCart.js';
import { ProductCatalogTitle } from "../ProductCatalog/styledProductCatalog.js";
import {DeleteOutlined, MinusOutlined, PlusOutlined} from "@ant-design/icons";
import notification from "antd/es/notification";
import {Link} from "react-router-dom";
import {Button} from "antd";
import useLocalStorage from '../customHooks/useLocalStorage.jsx';
import moment from "moment";

const Cart = () => {
    const { items, setItems, orders, setOrders } = useContext(AppStateContext);

    const promoCodes = ['SPRING20', 'FORYOU50', 'SANYOK70', 'NASTYA90', 'ZHARR50', 'SFEDU30'];

    const removeFromCart = (product) => {
        setItems((prevItems) => prevItems.filter((item) => item!== product));
    };

    const [selectedItems, setSelectedItems] = useState(
        items.map(() => false)
    );

    const [cart, setCart] = useLocalStorage('cart', items);
    const [ordersState, setOrdersState] = useLocalStorage('orders', orders);

    useEffect(() => {
        setCart(items);
    }, [items]);

    const [promoCode, setPromoCode] = useState('');
    const [discount, setDiscount] = useState(0);

    const handleItemSelectionChange = (productId) => {
        setSelectedItems((prevCheckedItems) => {
            const newCheckedItems = [...prevCheckedItems];
            newCheckedItems[productId] =!prevCheckedItems[productId];
            return newCheckedItems;
        });
    };

    const handleQuantityChange = (productId, quantityChange) => {
        setItems((prevItems) => prevItems.map((item) => {
            if (item.id === productId) {
                return {...item, quantity: Math.max(1, item.quantity + quantityChange) };
            }
            return item;
        }));
    };

    const totalPrice = cart.reduce((acc, item, index) => {
        if (selectedItems[index]) {
            return acc + item.price * item.quantity;
        }
        return acc;
    }, 0);

    const itemsCount = selectedItems.filter(Boolean).length;

    const handleCheckout = () => {
        const selectedItemsArray = cart.filter((item, index) => selectedItems[index]);
        const ordersWithDate = selectedItemsArray.map((item) => ({
            ...item,
            orderDate: moment().format('DD-MM-YYYY HH:mm'), // формат даты и времени заказа
        }));
        setOrdersState((prevOrders) => [...prevOrders,...ordersWithDate]);
        setOrders([...orders,...ordersWithDate]);
        setCart(cart.filter((item) =>!selectedItems.includes(item)));
        setSelectedItems(selectedItems.map(() => false));
        selectedItemsArray.forEach(removeFromCart);
        setCart(cart);
    };

    if (!cart.length) {
        return (
            <CartContainer>
                <CentredNotificationWrapper>
                    <CentredNotification>Корзина пуста</CentredNotification>
                    <CentredNotification>Пора бы закупиться :)</CentredNotification>
                </CentredNotificationWrapper>
            </CartContainer>
        )
    }

    const deliveryCost = 500;

    const handlePromoCodeChange = (e) => {
        setPromoCode(e.target.value);
    };

    const handleApplyPromoCode = () => {
        const promoCodeFound = promoCodes.find((code) => code === promoCode.toUpperCase());
        if (promoCodeFound) {
            const discountAmount = (totalPrice * parseInt(promoCodeFound.slice(5))) / 100;
            setDiscount(discountAmount);
            notification.success({
                message: 'Промокод применен',
                description: `Активирован промокод ${promoCode}! Процент скидки: ${parseInt(promoCodeFound.slice(5))}%`,
                placement: 'topLeft',
            });
        } else {
            setDiscount(0);
        }
    };

    const endPrice = totalPrice + deliveryCost - discount

    return (
        <CartContainer>
            <ProductCatalogTitle>Корзина</ProductCatalogTitle>
            <CartItems>
                {cart.map((product, index) => (
                    <CartItem key={product.id}>
                        <Checkbox
                            type="checkbox"
                            checked={selectedItems[index]}
                            onChange={() => handleItemSelectionChange(index)}
                        />

                        <Link to={`/card/${product.id}`}>
                            <CartItemImage src={product.image} alt={product.name} />
                        </Link>

                        <CartItemInfo>
                            <CartItemName>{product.name}, {product.brand}</CartItemName>
                            <CartItemPrice>{product.price} руб. x {product.quantity}</CartItemPrice>
                        </CartItemInfo>

                        <CartQuantity>
                            <CartQuantityButton
                                type="primary"
                                shape="circle"
                                icon={<MinusOutlined />}
                                onClick={() => handleQuantityChange(product.id, -1)}
                            />
                            <CartQuantityInput style={{ margin: '0 10px' }}>{product.quantity}</CartQuantityInput>
                            <CartQuantityButton
                                type="primary"
                                shape="circle"
                                icon={<PlusOutlined />}
                                onClick={() => handleQuantityChange(product.id, 1)}
                            />
                        </CartQuantity>

                        <RemoveButton onClick={() => removeFromCart(product)}>
                            <DeleteOutlined style={{ fontSize: 32, color: 'ed' }} />
                        </RemoveButton>
                    </CartItem>
                ))}
            </CartItems>
            <InfoCart>
                <ItemsCount>Количество выбранных элементов: {itemsCount}</ItemsCount>
                <TotalCost>Стоимость: {totalPrice} руб.</TotalCost>
                <Discount>Скидка: {discount} руб.</Discount>
                <Delivery>Доставка: {deliveryCost} руб.</Delivery>
                <TotalPrice>Итого: {endPrice.toFixed()} руб.</TotalPrice>
                <PromocodeInputButton>
                    <PromoCodeInput
                        value={promoCode}
                        onChange={handlePromoCodeChange}
                        placeholder="Введите промокод"
                    />
                    <ApplyPromoCodeButton type="primary" onClick={handleApplyPromoCode}>
                        Применить промокод
                    </ApplyPromoCodeButton>
                </PromocodeInputButton>
                <CheckoutButton type="primary" onClick={handleCheckout}>
                    Перейти к оформлению
                </CheckoutButton>
            </InfoCart>
        </CartContainer>
    );
};

export default Cart;