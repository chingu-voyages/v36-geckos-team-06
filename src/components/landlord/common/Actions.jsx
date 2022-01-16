/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import Searchbar from '../../common/SearchBar';
import Button from '../../common/Button';

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

const Actions = ({ setShowRepairs, showRepairs }) => (
  <ActionsContainer>
    <Button
      onClick={() => setShowRepairs('properties')}
      color={showRepairs === 'properties' ? '#A3293A' : '#242423'}
    >
      Properties
    </Button>
    <Button
      onClick={() => setShowRepairs('repairs')}
      color={showRepairs === 'repairs' ? '#A3293A' : '#242423'}
    >
      Repairs
    </Button>
    <Searchbar />
  </ActionsContainer>
);
export default Actions;
