/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Dropdown from '../../common/Dropdown';

const Blur = styled.div`
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(9px);
  z-index: 2;
  position: absolute;
  height: 100vh;
  width: 100%;
  padding: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Container = styled.section`
  position: absolute;
  height: 100vh;
  width: 100%;
  padding: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  z-index: 3;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 16px;
  justify-content: center;
  padding: 68px 32px;
  width: 550px;
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

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  border: 0.2px solid;
`;

const Button = styled.button`
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

const Buttons = styled.div`
  display: flex;
  gap: 24px;
`;

const Inputs = styled.div`
  display: flex;
  gap: 16px;
`;

const AddProperty = ({ setAddProperty }) => (
  <Container>
    <Form>
      <InputContainer>
        <label htmlFor="property-name">PROPERTY NAME</label>
        <Input name="property-name" type="text" id="property-name" />
      </InputContainer>

      <InputContainer>
        <label htmlFor="property-address">PROPERTY ADDRESS</label>
        <Input name="property-address" type="text" id="property-address" />
      </InputContainer>

      <Inputs>
        <InputContainer>
          <label htmlFor="city">CITY</label>
          <Input name="city" type="text" id="city" />
        </InputContainer>

        <InputContainer>
          <label htmlFor="postcode">POSTCODE</label>
          <Input name="postcode" type="text" id="postcode" />
        </InputContainer>
      </Inputs>

      <Inputs>
        <InputContainer>
          <label htmlFor="country">COUNTRY</label>
          <Dropdown name="country" id="country" />
          {/* <Input name="country" type="text" id="country" /> */}
        </InputContainer>

        <InputContainer>
          <label htmlFor="capacity">CAPACITY</label>
          <Input name="capacity" type="number" id="capacity" min="1" />
        </InputContainer>
      </Inputs>

      <Buttons>
        <Button background="#a2293a"> ADD PROPERTY</Button>
        <Button background="#242423" onClick={() => setAddProperty(false)}>
          {' '}
          CANCEL
        </Button>
      </Buttons>
    </Form>
    <Blur onClick={() => setAddProperty(false)} />
  </Container>
);

export default AddProperty;
