/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { LANDLORD } from '../../../mockData';
import { HeaderStyled, HeaderButton } from '../../common/Header';

const UserName = styled.h2`
  font-size: 58px;
  font-weight: 800;
  line-height: 1.3;
  margin: 0;
  color: white;
  z-index: 1;
`;

const Header = ({ setAddProperty }) => (
  <HeaderStyled direction="row" justify="space-between" align="flex-end">
    <UserName>
      Welcome,
      <br />
      {LANDLORD.name.split(' ')[0]}.
    </UserName>
    <HeaderButton onClick={() => setAddProperty(true)}>ADD PROPERTY</HeaderButton>
  </HeaderStyled>
);

export default Header;
