/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: $({(direction)} => direction);
  justify-content: space-between;
  align-items: flex-end;
  height: 300px;
  width: 100%;
  background: url('https://ucarecdn.com/bf7bc147-a50f-45fb-8620-d618fbae3c43/propertyImage.webp');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  padding: 30px;
  text-transform: capitalize;
`;

function Header({ children }) {
  return (
    <HeaderStyled justify="space-between" align="flex-end">
      {children}
    </HeaderStyled>
  );
}

export default Header;
