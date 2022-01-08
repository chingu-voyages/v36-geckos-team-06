import React from 'react';
import styled from 'styled-components';
import Searchbar from './Searchbar';
import Button from './Button';

const ButtonAndInputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-gap: 20px;
  width: 100%;
  margin: 20px 0;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
`;

function ButtonsAndSearchbar() {
  return (
    <ButtonAndInputContainer>
      <Button color="#A3293A">Properties</Button>
      <Button color="#333">Repairs</Button>
      <Searchbar />
    </ButtonAndInputContainer>
  );
}

export default ButtonsAndSearchbar;
