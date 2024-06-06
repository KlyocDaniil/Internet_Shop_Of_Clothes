import styled from "styled-components";

export const OrdersWrapper = styled.div`
  padding: 20px;
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 55%;
  display: flex;
  flex-direction: column;
`;

export const OrderItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid black;
  &:last-child {
    border-bottom: none;
  }
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
`;

export const OrderDate = styled.span`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  color: #666;
  margin-bottom: 5px;
`;

export const OrderStatus = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const DeliveredButton = styled.button`
  background-color: transparent;
  border: none;
  color: #007bff;
  font-size: 14px;
  cursor: pointer;
  margin-left: auto;
`;

export const OrderImage = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  border-radius: 5px;
`;

export const OrdersList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const OrdersTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;