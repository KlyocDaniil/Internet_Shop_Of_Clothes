import styled from 'styled-components';

export const MainWrap = styled.div`
  display: flex;
  justify-content: center;
  height: 1020px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: 30px 30px;
`;

export const Image = styled.img`
  flex-basis: 40%;
  max-width: 600px;
  height: 85%;
  margin-right: 20px;
`;

export const Info = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

export const DescriptionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const DescriptionListItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DescriptionLabel = styled.span`
  width: 30%;
  text-align: left;
  font-weight: bold;
`;

export const DescriptionValue = styled.span`
  width: 70%;
  text-align: right;
  font-weight: normal;
  margin-right: 100px;
  border: 1px solid black;
  padding: 20px;
`;

export const DescriptionDots = styled.span`
  flex-grow: 1;
  text-align: center;
  font-size: 12px;
  color: #ccc;
`;
export const SizeSelect = styled.div`
  margin-bottom: 10px;
`;

export const Select = styled.select`
  width: 80%;
  padding: 10px;
  margin-left: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 12px;
`;

export const AddToCartButton = styled.button`
  padding: 10px 20px;
  background-color: #565656;
  width: 173px;
  height: 40px;
  color: #fff;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
`;

export const Price = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const TextCardMain = styled.p`
  font-size: 20px;
  //font-weight: bold;
`;

