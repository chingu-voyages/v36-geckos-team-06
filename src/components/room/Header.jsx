/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const RoomHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-image: url(${({ image }) => image};);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 272px;
  border-radius: 10px;
  text-transform: uppercase;
  padding: 20px;
`;

const Button = styled.button`
  width: 200px;
  height: 60px;
  border: none;
  background: white;
  border-radius: 16px;
  font-size: 1.6rem;
  font-weight: bold;
  text-transform: uppercase;
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

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.1;
  color: white;
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 1.6rem;
  }
`;
const Header = ({ roomNumber, property, setEditRoom }) => (
  <RoomHeader image={property?.fullImage}>
    <TextContainer>
      <h1>Room {roomNumber}</h1>
      <p>{property?.name}</p>
    </TextContainer>
    <Button onClick={() => setEditRoom(true)}>Edit Room</Button>
  </RoomHeader>
);

export default Header;
