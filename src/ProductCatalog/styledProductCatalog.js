import styled from 'styled-components';

export const ProductCatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const ProductCatalogTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ProductCatalogList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;