import styled from 'styled-components';

export const StyledButtonHeader = styled.button`
  background-color: #1D1D1D;
  color: white;
  border: none;
  padding: 0 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 20px;
  margin-right: 15px;
  font-family: 'Montserrat', sans-serif;

  &:hover {
    background-color: #3333;
  }
`;

export const StyledIconButton = styled.button`
  background-color: #1D1D1D;
  color: white;
  border: none;
  font-size: 20px;
  padding: 0;
  height: 40px;
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #333333;
  }
`;

export const StyledSpan = styled.span`
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-right: 15px;

  &:hover {
    color: lightgray;
  }
`;