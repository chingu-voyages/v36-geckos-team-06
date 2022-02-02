/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Container = styled.div`
  display: grid;
  grid-template-columns: 264px 264px 264px;
  padding: 60px;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  width: 100%;
  border-radius: 16px;
  text-transform: uppercase;
  font-weight: bold;
  background: #491f1e;
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

const Repair = ({ repair, room, setCurrentRepair, setUpdateRepair }) => {
  const handleOnClick = () => {
    setCurrentRepair(repair);
    setUpdateRepair(true);
  };

  return (
    <Container>
      <TextContainer>
        <h3>{room.roomNumber}</h3>
        <p>{room.property.name}</p>
      </TextContainer>
      <TextContainer>
        <h3>Issue:</h3>
        <p>{repair.issue}</p>
      </TextContainer>
      <Button onClick={handleOnClick} color="white">
        View Details
      </Button>
    </Container>
  );
};

export default Repair;
