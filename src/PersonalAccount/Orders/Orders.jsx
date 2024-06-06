import React, { useContext, useState } from 'react';
import { AppStateContext } from "../../App";
import { CartItemImage } from "../../Cart/styledCart";
import { OrdersWrapper, OrderItem, OrderInfo, OrderDate, DeliveredButton, OrderStatus, OrderImage, OrdersList, OrdersTitle } from "./styledOrders";
import { Rate } from 'antd';

const Orders = () => {
    const { orders } = useContext(AppStateContext);
    const [ratings, setRatings] = useState({}); // состояние для хранения оценок
    const [delivered, setDelivered] = useState({}); // состояние для хранения информации о доставке

    const handleRatingChange = (id, value) => {
        setRatings((prevRatings) => ({...prevRatings, [id]: value }));
    };

    const handleDeliveredChange = (id) => {
        setDelivered((prevDelivered) => ({...prevDelivered, [id]: true }));
    };

    return (
        <OrdersWrapper>
            <OrdersTitle>Мои заказы</OrdersTitle>
            <OrdersList>
                {orders.map((item) => (
                    <OrderItem key={item.id}>
                        <OrderInfo>
                            <OrderStatus>{item.name}</OrderStatus>
                            <OrderStatus>{item.brand}</OrderStatus>
                            <DeliveredButton
                                onClick={() => handleDeliveredChange(item.id)}
                                style={{
                                    backgroundColor: delivered[item.id]? 'green' : 'gray',
                                    color: 'white',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                }}
                            >
                                {delivered[item.id]? 'Товар доставлен ✔️' : 'Товар не доставлен ❌'}
                            </DeliveredButton>
                        </OrderInfo>
                        <OrderInfo>
                            <OrderDate>Дата и время заказа: {item.orderDate}</OrderDate>
                            <Rate
                                value={ratings[item.id] || 0}
                                onChange={(value) => handleRatingChange(item.id, value)}
                                count={5}
                                allowHalf
                            />
                        </OrderInfo>
                        <OrderImage src={item.image} alt={item.name} />
                    </OrderItem>
                ))}
            </OrdersList>
        </OrdersWrapper>
    );
};

export default Orders;