import styled from 'styled-components';

export const RegistrationFormWrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input `
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 50px;
  width: 60%;
`;

export const Button = styled.button `
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  background-color: #565656;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
`;