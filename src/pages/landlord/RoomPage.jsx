import React from 'react';
import styled from 'styled-components';
import RepairSection from '../../components/common/RepairSection';
import Layout from '../../components/common/Layout';

import { REPAIR_DATA } from '../../mockData';

const roomOneRepairs = REPAIR_DATA.filter((repair) => repair.room === 'room 1');

console.log(roomOneRepairs);

const RoomHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-image: url('https://ucarecdn.com/bf7bc147-a50f-45fb-8620-d618fbae3c43/propertyImage.webp');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 272px;
  border-radius: 10px;
  text-transform: uppercase;
  padding: 20px;
`;

const Button = styled.button`
  width: 264px;
  height: 104px;
  background: white;
  border-radius: 16px;
  font-size: 32px;
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
    font-size: 96px;
  }
  p {
    font-size: 36px;
  }
`;

const RepairsHeading = styled.h2`
  text-transform: uppercase;
  font-size: 72px;
`;

const RepairsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 32px;
  max-height: 750px;
  overflow: scroll;
`;

// eslint-disable-next-line prettier/prettier
const RoomPage = () => (
  <Layout>
    <RoomHeader>
      <TextContainer>
        <h1>Room 1</h1>
        <p>Palm Springs</p>
      </TextContainer>
      <Button>Edit Room</Button>
    </RoomHeader>
    <RepairsHeading>Repairs</RepairsHeading>
    <RepairsContainer>
      {roomOneRepairs.map((repair) => (
        <RepairSection key={repair.id} repair={repair} />
      ))}
    </RepairsContainer>
  </Layout>
);

export default RoomPage;
