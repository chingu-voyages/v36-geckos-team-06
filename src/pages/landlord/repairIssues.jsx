import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/common/Layout';
import { HeaderStyled, HeaderButton } from '../../components/common/Header';
import Button from '../../components/common/Button';
import Searchbar from '../../components/common/SearchBar';
import { Container } from '../../components/common/Container';
import RepairSection from '../../components/common/Repair';
import { REPAIR_DATA } from '../../mockData';

const Welcome = styled.h1`
  font-size: 72px;
  color: white;
  font-weight: bold;
  line-height: 1;
`;

const ActionsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-gap: 20px;
  width: 100%;
  /* @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  } */
`;
const RepairIssues = () => (
  <Layout>
    <HeaderStyled direction="row" justify="space-between" align="flex-end">
      <Welcome>
        Welcome
        <br />
        Sammie.
      </Welcome>
      <HeaderButton>Add Property</HeaderButton>
    </HeaderStyled>
    <ActionsContainer>
      <Button color="#A3293A">Properties</Button>
      <Button color="#242423">Repairs</Button>
      <Searchbar />
    </ActionsContainer>
    <Container>
      {REPAIR_DATA.map((repair) => (
        <RepairSection repair={repair} />
      ))}
    </Container>
  </Layout>
);
export default RepairIssues;
