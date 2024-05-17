// styledCart.ts
import { styled } from 'styled-components';

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CentredNotificationWrapper = styled.div `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const CentredNotification = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: xx-large;
  text-align: center;
`;

export const CentredNotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin-top: 32px;
`;

export const CartItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1150px;
  height: 10%;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CartItemImage = styled.img`
  width: 20%;
  object-fit: cover;
  margin-bottom: 16px;
`;

export const CartItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  font-family: 'Montserrat', sans-serif;
`;

export const CartItemName = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-right: 16px;
`;

export const CartItemBrand = styled.span`
  font-weight: bold;
  font-size: 14px;
  margin-right: 16px;
`;

export const CartItemPrice = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const RemoveButton = styled.button`
  background-color: #fff;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
`;

export const Checkbox = styled.input`
  margin-right: 8px;
`;

export const InfoCart = styled.div`
  width: 60%;
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`
export const TotalPrice = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 32px;
`;

export const PromocodeInputButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 16px 0;
`;

export const PromoCodeInput = styled.input`
  width: 50%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ddd;
  margin-right: 16px;
`;

export const ApplyPromoCodeButton = styled.button`
  padding: 8px 16px;
  border-radius: 50px;
  background-color: #565656;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 16px;
  border-radius: 50px;
  background-color: #565656;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export const Delivery = styled.div`
  font-size: 16px;
  margin-top: 16px;
`;

export const Discount = styled.div`
  font-size: 16px;
  margin-top: 16px;
`;

export const TotalCost = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 16px;
`;

export const ItemsCount = styled.div`
  font-size: 16px;
  margin-top: 16px;
`;