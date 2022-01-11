import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
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
`;

export default Button;
