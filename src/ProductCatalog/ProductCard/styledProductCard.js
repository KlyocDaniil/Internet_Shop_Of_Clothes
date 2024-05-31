import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 50%;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  padding: 20px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

export const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #1D1D1D;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const ProductName = styled.p`
  font-size: 16px;
  color: #1D1D1D;
  margin-bottom: 5px;
`;

export const ProductBrand = styled.p`
  font-size: 14px;
  color: #666666;
  margin-bottom: 10px;
`;

export const BuyButton = styled.button`
  background-color: #1D1D1D;
  color: white;
  border: none;
  font-size: 14px;
  font-weight: bold;
  padding: 5px 15px;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;&:hover {
  background-color: #333333;
}
`;