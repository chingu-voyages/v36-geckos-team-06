/* eslint-disable import/no-named-as-default */
import styled from 'styled-components';
import device from './MediaQueries';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  background: ${({ color }) => color};
  color: ${({ color }) => (color === 'white' ? 'black' : 'white')};
  text-transform: uppercase;
  padding: 12px;
  width: 100%;
  border-radius: 10px;
  border: none;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: darken(#fdfdfd, 8%);
    transform: translateX(0rem) translateY(-0.1125rem);
  }

  &:active {
    transform: translateX(0rem) translateY(0.125rem);
  }

  @media ${device.tablet} {
    font-size: 18px;
  }
`;

export default Button;
