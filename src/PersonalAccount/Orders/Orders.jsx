import React, {useContext} from 'react';
import {AppStateContext} from "../../App";
import {CartItemImage} from "../../Cart/styledCart";
import {OrdersWrapper, OrderItem, OrderInfo, OrderDate, DeliveredButton, OrderStatus, OrderImage, OrdersList, OrdersTitle} from "./styledOrders";

const Orders = () => {

    const { orders } = useContext(AppStateContext);

    return (
        <OrdersWrapper>
            <OrdersTitle>Мои заказы</OrdersTitle>
            <OrdersList>
                {orders.map((item) => (
                    <OrderItem key={item.id}>
                        <OrderInfo>
                            <OrderStatus>{item.name}</OrderStatus>
                            <DeliveredButton>Товар доставлен</DeliveredButton>
                        </OrderInfo>
                        <OrderDate>Дата и время заказа: {item.orderDate}</OrderDate>
                        <OrderImage src={item.image} alt={item.name} />
                    </OrderItem>
                ))}
            </OrdersList>
        </OrdersWrapper>
    );
};

export default Orders;