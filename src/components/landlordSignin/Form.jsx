import styled from 'styled-components';

export const Info = styled.div`
  text-align: center;
  font-weight: 500;
  h1 {
    line-height: 1.2;
    font-size: 40px;

    span {
      text-decoration: underline;
      color: #a2293a;
    }
  }
`;

export const Form = styled.form`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 16px;
  justify-content: center;
  padding: 48px 32px;
  width: 450px;
  box-shadow: 3px 4px 15px -8px rgba(0, 0, 0, 0.71);

  a {
    text-align: center;
    font-weight: 900;
    font-size: 24px;
    text-decoration: underline;
    color: #a2293a;
    cursor: pointer;
  }

  label {
    font-weight: 600;
    font-size: 18px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 24px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  background: #a2293a;
  color: white;
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
