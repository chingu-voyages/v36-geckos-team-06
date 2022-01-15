/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { HeaderStyled, HeaderButton, Buttons } from '../../common/Header';

const UserName = styled.h2`
  font-size: 58px;
  font-weight: 800;
  line-height: 1.3;
  margin: 0;
  color: white;
  z-index: 1;
`;

const Header = ({ setAddProperty, firstName }) => {
  const router = useRouter();

  const signOut = () => {
    localStorage.removeItem(`token`);
    router.push(`/`);
  };

  return (
    <HeaderStyled direction="row" justify="space-between" align="flex-end">
      <UserName>
        Welcome,
        <br />
        {firstName}
      </UserName>
      <Buttons>
        <HeaderButton onClick={() => setAddProperty(true)}>ADD PROPERTY</HeaderButton>
        <HeaderButton onClick={signOut} bg="#242423" color="#fdfdfd">
          LOG OUT
        </HeaderButton>
      </Buttons>
    </HeaderStyled>
  );
};

export default Header;
