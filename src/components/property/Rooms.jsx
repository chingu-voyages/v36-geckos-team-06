/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

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
  justify-content: space-between;
  color: white;
  padding: 24px;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 10px;
  background: ${({ bg }) => bg || '#491f1e'};
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

const RoomNum = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 64px;
  color: #ffffff;
`;

const Status = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 32px;
  color: #ffffff;
`;

const RoomDetails = styled.div``;

const RoomBtn = styled.button`
  background: #ffffff;
  border-radius: 10px;
  width: 100%;
  border: none;
  font-weight: 900;
  font-size: 20px;
  height: 56px;
  color: #242423;
  cursor: pointer;
`;

const Rooms = ({ rooms }) => {
  console.log(rooms.slice().sort((a, b) => a.roomNumber - b.roomNumber));
  return (
    <RoomsContainer>
      {rooms
        // Sort the array, so room numbers are arranged in ascending order
        .slice()
        .sort((a, b) => a.roomNumber - b.roomNumber)
        .map((room) => (
          <Room key={room.id} bg={room.available === 'yes' && '#943939'}>
            <RoomDetails>
              <RoomNum>ROOM {room.roomNumber}</RoomNum>
              <Status> {room.available === 'yes' ? '✅ AVAILABLE' : '🔴 OCCUPIED'}</Status>
            </RoomDetails>
            <Link href={`/room/${room.id}`}>
              <RoomBtn>VIEW ROOM</RoomBtn>
            </Link>
          </Room>
        ))}
    </RoomsContainer>
  );
};

export default Rooms;
