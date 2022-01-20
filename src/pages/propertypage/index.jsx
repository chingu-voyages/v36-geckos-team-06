import React from 'react';
import styled from 'styled-components';
import { HeaderStyled, HeaderButton } from '../../components/common/Header';
import Layout from '../../components/common/Layout';
import SearchBar from '../../components/common/SearchBar';

const Heading = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: white;
  display: block;
  text-transform: uppercase;
  padding: 5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const index = () => (
  <Layout>
    <HeaderStyled direction="column" justify="center" align="center">
      <Heading>palm springs</Heading>
      <ButtonContainer>
        <HeaderButton>ADD ROOM</HeaderButton>
        <HeaderButton>EDIT PROPERTY</HeaderButton>
      </ButtonContainer>
    </HeaderStyled>
    <SearchBar />
  </Layout>
);

export default index;
