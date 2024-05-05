import React, { useContext, useState } from 'react';
import { CartContext } from '../App';
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
} from './styledCart.ts';
import { ProductCatalogTitle } from "../ProductCatalog/styledProductCatalog.ts";
import {DeleteOutlined} from "@ant-design/icons";
import notification from "antd/es/notification";

const Cart = () => {
    const { items, setItems } = useContext(CartContext);

    const promoCodes = ['SPRING20', 'FORYOU50', 'SANYOK70', 'NASTYA90'];

    const removeFromCart = (product) => {
        setItems((prevItems) => prevItems.filter((item) => item!== product));
    };

    const [selectedItems, setSelectedItems] = useState(
        items.map(() => false)
    );

    const [promoCode, setPromoCode] = useState('');
    const [discount, setDiscount] = useState(0);

    const handleItemSelectionChange = (productId) => {
        setSelectedItems((prevCheckedItems) => {
            const newCheckedItems = [...prevCheckedItems];
            newCheckedItems[productId] =!prevCheckedItems[productId];
            return newCheckedItems;
        });
    };

    const totalPrice = items.reduce((acc, item, index) => {
        if (selectedItems[index]) {
            return acc + item.price;
        }
        return acc;
    }, 0);

    const itemsCount = selectedItems.filter(Boolean).length;

    if (!items.length) {
        return <CartContainer>Корзина пуста</CartContainer>;
    }

    const deliveryCost = 500;

    const handlePromoCodeChange = (e) => {
        setPromoCode(e.target.value);
    };

    const handleApplyPromoCode = () => {
        const promoCodeFound = promoCodes.find((code) => code === promoCode.toUpperCase());
        if (promoCodeFound) {
            const discountAmount = (totalPrice * parseInt(promoCodeFound.slice(6))) / 100;
            setDiscount(discountAmount);
            notification.success({
                message: 'Промокод применен',
                description: `Активирован промокод ${promoCode}! Процент скидки: ${parseInt(promoCodeFound.slice(6))}%`,
                placement: 'topLeft',
            });
        } else {
            setDiscount(0);
        }
    };

    return (
        <CartContainer>
            <ProductCatalogTitle>Корзина</ProductCatalogTitle>
            <CartItems>
                {items.map((product, index) => (
                    <CartItem key={product.id}>
                        <CartItemImage src={product.image} />
                        <CartItemInfo>
                            <Checkbox
                                type="checkbox"
                                checked={selectedItems[index]}
                                onChange={() => handleItemSelectionChange(index)}
                            />
                            <CartItemName>{product.name}</CartItemName>
                            <CartItemBrand>{product.brand}</CartItemBrand>
                            <CartItemPrice>{product.price} руб.</CartItemPrice>
                        </CartItemInfo>
                        <RemoveButton onClick={() => removeFromCart(product)}>
                            <DeleteOutlined style={{ fontSize: 32, color: 'red' }} />
                        </RemoveButton>
                    </CartItem>
                ))}
            </CartItems>
            <InfoCart>
                <ItemsCount>Количество элементов: {itemsCount}</ItemsCount>
                <TotalCost>Стоимость: {totalPrice} руб.</TotalCost>
                <Discount>Скидка: {discount} руб.</Discount>
                <Delivery>Доставка: {deliveryCost} руб.</Delivery>
                <TotalPrice>Итого: {totalPrice + deliveryCost - discount} руб.</TotalPrice>
                <PromocodeInputButton>
                    <PromoCodeInput
                        value={promoCode}
                        onChange={handlePromoCodeChange}
                        placeholder="Введите промокод"
                    />
                    <ApplyPromoCodeButton type="primary" onClick={handleApplyPromoCode}>
                        Применить
                    </ApplyPromoCodeButton>
                </PromocodeInputButton>
                <CheckoutButton type="primary">
                    Перейти к оформлению
                </CheckoutButton>
            </InfoCart>
        </CartContainer>
    );
};

export default Cart;