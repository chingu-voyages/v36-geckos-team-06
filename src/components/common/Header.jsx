import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  height: 350px;
  width: 100%;
  background: url('https://ucarecdn.com/bf7bc147-a50f-45fb-8620-d618fbae3c43/propertyImage.webp');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 16px;
  padding: 48px;
`;

export const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 800;
  background: #fdfdfd;
  color: #242423;
  padding: 16px;
  width: 100%;
  max-width: 250px;
  border-radius: 16px;
  border: none;
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
