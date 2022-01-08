import React from 'react';
import styled from 'styled-components';

const PageContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  min-height: 600px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px 40px;
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

// eslint-disable-next-line react/prop-types
function PageContainer({ children }) {
  return <PageContainerStyled>{children}</PageContainerStyled>;
}

export default PageContainer;
