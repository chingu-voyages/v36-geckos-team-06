import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Container = styled.div`
  display: grid;
  grid-template-columns: 264px 264px 264px;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  width: 100%;
  border-radius: 10px;
  text-transform: uppercase;
  font-weight: bold;
  background: url('/repairs.jpg/');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  button {
    height: 72px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.3;
  h3 {
    font-size: 30px;
  }
  p {
    font-size: 24px;
  }
`;

const RepairSection = () => (
  <Container>
    <TextContainer>
      <h3>Room 5</h3>
      <p>Palm Springs</p>
    </TextContainer>
    <TextContainer>
      <h3>Issue:</h3>
      <p>Leaking Pipe</p>
    </TextContainer>
    <Button width="30xp" color="white">
      View Details
    </Button>
  </Container>
);

export default RepairSection;
