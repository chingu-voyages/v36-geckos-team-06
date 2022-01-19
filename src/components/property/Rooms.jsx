/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const RoomsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  width: 100%;
  max-height: 760px;
  overflow: scroll;
`;

const Room = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  color: white;
  padding: 24px;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 10px;
  background: #491f1e;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  text-transform: capitalize;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(0.98);
    transition: transform 0.3s ease-in-out;
  }
`;

const Rooms = ({ rooms }) => {
  const test = 34;
  return (
    <RoomsContainer>
      {rooms.map((room) => (
        <Room key={room.id}>Test</Room>
      ))}
    </RoomsContainer>
  );
};

export default Rooms;
