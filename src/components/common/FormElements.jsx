import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const Blur = styled.div`
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(9px);
  z-index: 2;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const Container = styled.section`
  position: absolute;
  height: 100vh;
  width: 100%;
  padding: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  position: relative;
  z-index: 3;
  background-color: #ffffff;
  display: grid;
  grid-gap: 24px;
  grid-template-areas:
    'propertyName propertyName'
    'propertyAddress propertyAddress'
    'city postcode'
    'country capacity'
    'category category'
    'buttons buttons';
  border-radius: 16px;
  padding: 68px 32px;
  width: 650px;
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
  input {
    width: 100%;
    padding: 16px;
    border-radius: 8px;
    border: 0.2px solid;
    background-color: white;
  }
`;

export const CloseButton = styled(AiOutlineCloseCircle)`
  position: absolute;
  font-size: 24px;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  background: ${({ background }) => background};
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

export const Buttons = styled.div`
  display: flex;
  gap: 24px;
`;
