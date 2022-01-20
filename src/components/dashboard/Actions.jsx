/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import SearchBar from '../common/SearchBar';
import Button from '../common/Button';

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

const Actions = ({ setShowRepairs }) => (
  <ActionsContainer>
    <Button onClick={() => setShowRepairs('properties')} color="#A3293A">
      Properties
    </Button>
    <Button onClick={() => setShowRepairs('repairs')} color="#242423">
      Repairs
    </Button>
    <SearchBar />
  </ActionsContainer>
);

export default Actions;
