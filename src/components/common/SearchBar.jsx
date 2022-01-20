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
  font-size: 22px;
  background: #242423;
  color: white;
  text-transform: uppercase;
  border: none;
  border-radius: 0 10px 10px 0;
  padding: 12px;
  width: 100%;
  max-width: 150px;
  border: none;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: #e46979;
  }
`;

const SearchBar = () => (
  <SearchContainer>
    <Input type="text" />
    <SearchButton>Search</SearchButton>
  </SearchContainer>
);

export default SearchBar;
