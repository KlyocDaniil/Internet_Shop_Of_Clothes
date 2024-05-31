import styled from 'styled-components';
import {EnvironmentOutlined} from "@ant-design/icons";

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

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1D1D1D;
  padding: 0 20px;
  height: 80px;
  position: sticky;
`;

export const Logo = styled(StyledSpan)`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-right: 15px;

  &:hover {
    color: lightgray;
  }
`;

export const SearchIconButton = styled(StyledIconButton)`
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

export const UserIconButton = styled(StyledIconButton)`
  font-size: 20px;
  padding: 0;
  height: 40px;
  margin-right: 10px;
  border-radius: 5px;cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #333333;
  }
`;

export const FavoritesIconButton = styled(StyledIconButton)`
  position: relative;
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



export const CartIconButton = styled(StyledIconButton)`
  position: relative;
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

export const CounterItemsHeader = styled.span`
  position: absolute;
  top: -2px;
  right: -10px;
  background-color: red;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 0 5px;
  border-radius: 50%;
`;

export const LocationFromProfile = styled(EnvironmentOutlined)`
  margin-right: 8px;
`