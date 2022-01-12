import styled from 'styled-components';

export const Container = styled.section`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 16px;
  justify-content: center;
  padding: 32px;
  height: 700px;
  width: 600px;
  box-shadow: 3px 4px 15px -8px rgba(0, 0, 0, 0.71);
  h1 {
    line-height: 1.2;
    text-align: center;
    font-size: 88px;
    font-weight: 900;

    span {
      text-decoration: underline;
      color: #a2293a;
    }
  }

  p {
    text-align: center;
    font-weight: 700;
    font-size: 24px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  background: ${({ background }) => background};
  color: white;
  text-transform: uppercase;
  padding: 12px;
  width: 100%;
  border-radius: 10px;
  border: none;
  height: 100px;
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
