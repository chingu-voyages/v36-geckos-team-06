/* eslint-disable import/no-named-as-default */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import device from './MediaQueries';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  gap: 24px;
  border-radius: 16px;
  text-transform: uppercase;
  font-weight: bold;
  background: #491f1e;
  color: #fff;
  text-align: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.3;

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
        <p>ROOM {room.roomNumber}</p>
        <p>{room.property.name}</p>
      </TextContainer>
      <Button onClick={handleOnClick} color="white">
        View Details
      </Button>
    </Container>
  );
};

export default Repair;
