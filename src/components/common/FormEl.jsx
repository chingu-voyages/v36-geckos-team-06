/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import React from 'react';

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

export const Blur = styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(9px);
  z-index: 2;
  height: 100vh;
  width: 100%;
  padding: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const CloseButton = styled(AiOutlineCloseCircle)`
  position: absolute;
  font-size: 24px;
  top: 20px;
  right: 20px;
  cursor: pointer;
  color: ${({ color }) => color || 'black'}; ;
`;

export const Inputs = styled.div`
  display: flex;
  gap: 16px;
`;

const InputStyled = styled.input`
  background: #f9f9f9;
  border: 1px solid #491f1e;
  width: 100%;
  padding: 16px;
  border-radius: 5px;
  font-weight: 500;
  font-size: 14.6095px;
  letter-spacing: 0.208707px;
  color: #491f1e;

  &::placeholder {
    font-weight: 500;
    font-size: 14.6095px;
    letter-spacing: 0.208707px;
    color: #491f1e;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 132px;
  background: #f9f9f9;
  border: 1px solid #491f1e;
  padding: 16px;
  border-radius: 5px;
  font-weight: 500;
  font-size: 14.6095px;
  letter-spacing: 0.208707px;
  color: #491f1e;

  &::placeholder {
    font-weight: 500;
    font-size: 14.6095px;
    letter-spacing: 0.208707px;
    color: #491f1e;
  }
`;

export const Form = styled.form`
  z-index: 3;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 16px;
  justify-content: center;
  padding: 68px 32px;
  width: 650px;
  box-shadow: 3px 4px 15px -8px rgba(0, 0, 0, 0.71);
`;

export const Buttons = styled.div`
  display: flex;
  gap: 24px;
`;

const HeaderStyled = styled.header`
  border: 2px solid #242423;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 8px;
  text-align: center;

  h1 {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    color: #242423;
  }
`;

const ButtonStyled = styled.button`
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

export const Input = ({ placeholder, name, type, value, onChange }) => (
  <InputStyled
    placeholder={placeholder}
    name={name}
    type={type}
    value={value}
    onChange={onChange}
  />
);

export const ReadOnlyInput = ({ placeholder, name, type, value, onChange }) => (
  <InputStyled placeholder={placeholder} name={name} type={type} value={value} readOnly disabled />
);

export const Button = ({ type, onClick, text, background }) => (
  <ButtonStyled type={type} onClick={onClick} background={background}>
    {text}
  </ButtonStyled>
);

export const Header = ({ text }) => (
  <HeaderStyled>
    <h1>{text}</h1>
  </HeaderStyled>
);
