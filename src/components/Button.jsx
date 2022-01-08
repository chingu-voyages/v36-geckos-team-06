/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  background: ${({ color }) => color};
  color: ${({ color }) => (color === 'white' ? 'black' : 'white')};
  text-transform: uppercase;
  padding: 15px 15px;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  z-index: 1;
  cursor: pointer;
  &:hover {
    transform: scale(0.98);
    transition: transform 0.3s ease-in-out;
  }
`;

function Button({ color, children }) {
  return <ButtonStyled color={color}>{children}</ButtonStyled>;
}

export default Button;
