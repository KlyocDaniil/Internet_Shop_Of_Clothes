import styled from 'styled-components';

export const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: 30px 30px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 500px;
  height: 600px;
  object-fit: fill;
  border-radius: 10px;
  margin-right: 30px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  margin-left: 30px;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Price = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const TextCardMain = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const DescriptionList = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const DescriptionListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  border: 1px solid black;
  padding: 5px;
  width: 90%; /* adjust the width to your liking */
`;

export const DescriptionLabel = styled.span`
  font-weight: bold;
  text-align: left;
`;

export const DescriptionValue = styled.span`
  text-align: right;
`;

export const SizeSelect = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Select = styled.select`
  margin-left: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const AddToCartButton = styled.button`
  padding: 10px 20px;
  background-color: #333333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const OtherProductsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px 0;
  width: 90%; /* Увеличенная ширина */
`;

export const OtherProductsTitle = styled.div`
  width: 100%;
  padding: 10px;
  background-color: #f2f2f2;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

export const OtherProductCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
`;

export const OtherProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const OtherProductInfo = styled.div`
  padding: 10px;
`;

export const OtherProductPrice = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const OtherProductAddToCartButton = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;