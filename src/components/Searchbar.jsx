import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  overflow: hidden;
  @media (max-width: 768px) {
    grid-column: span 2;
  }
`;

const Input = styled.input`
  flex: 1;
  border-right: none;
  border-radius: 10px 0 0 10px;
  padding-left: 10px;
  &:focus {
    outline: none !important;
    border: 2px solid #a3293a;
    border-right: none;
    overflow: hidden;
  }
`;

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  background: #333;
  color: white;
  text-transform: uppercase;
  padding: 15px 15px;
  border: none;
  border-radius: 0 10px 10px 0;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #e46979;
  }
`;

function Searchbar() {
  return (
    <SearchContainer>
      <Input type="text" />
      <SearchButton>Search</SearchButton>
    </SearchContainer>
  );
}

export default Searchbar;
