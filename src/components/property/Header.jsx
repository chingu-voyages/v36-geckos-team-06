/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { HeaderStyled, HeaderButton, Buttons } from '../common/Header';

const UserName = styled.h2`
  font-size: 58px;
  font-weight: 800;
  line-height: 1.3;
  margin: 0;
  color: white;
  z-index: 1;
`;

const Header = ({ image, name, setUpdateProperty }) => (
  <HeaderStyled direction="column" justify="center" align="center" bg={image}>
    <UserName>{name}</UserName>
    <Buttons>
      <HeaderButton>ADD ROOM</HeaderButton>
      <HeaderButton onClick={() => setUpdateProperty(true)}>EDIT PROPERTY</HeaderButton>
    </Buttons>
  </HeaderStyled>
);

export default Header;
