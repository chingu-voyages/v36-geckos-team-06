/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { GiFamilyHouse, GiMoneyStack, GiSpanner, GiWaterDrop, GiElectric } from 'react-icons/gi';
import { FaFileContract } from 'react-icons/fa';
import { AiFillCar, AiOutlineCarryOut } from 'react-icons/ai';
import { BsHouse, BsWrench, BsCircle } from 'react-icons/bs';
import Image from 'next/image';

import DoughnutChart from '../../components/Room/DoughnutChart';
import RepairSection from '../../components/common/RepairSection';
import Layout from '../../components/common/Layout';
import profilePic from '../../../public/profilePic.jpg';
import ProgressBar from '../../components/Room/ProgressBar';
import { REPAIR_DATA, PROPERTY_DATA } from '../../mockData';

const roomData = PROPERTY_DATA[0].rooms[0];
// name charges occupant
const roomOneRepairs = REPAIR_DATA.filter((repair) => repair.room === 'room 1');

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
  width: 200px;
  height: 60px;
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

const ProfileSection = styled.div`
  display: flex;
  gap: 20px;
`;

const ImageInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    font-size: 2rem;
  }
  p {
    font-size: 1.5rem;
  }
`;

const ImageWrapper = styled.div`
  height: 300px;
  overflow: hidden;
  width: 300px;
  border-radius: 10px;
`;

const ProfileImage = styled(Image)``;

const CurrentBalances = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 20px;
  color: #666;
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 300px;
  background: #491f1e;
  border-radius: 10px;
  height: 700px;
`;

const CurrentBalanceTile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  border-radius: 10px;
  background: white;
  padding: 15px;
  gap: 15px;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 1rem;
  }
`;

const TileHeader = styled.h4`
  font-weight: 300;
  width: 100%;
  gap: 10px;
  display: flex;
  justify-content: 'center';
  align-items: center;
`;

const RepairsHeading = styled.h2`
  text-transform: uppercase;
  font-size: 2rem;
`;

const RepairsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
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
    <ProfileSection>
      <ImageInfoContainer>
        <ImageWrapper>
          <ProfileImage src={profilePic} />
        </ImageWrapper>
        <h4>Rose Smith</h4>
        <p>Rose@gmail.com</p>
        <p>07715572035</p>
      </ImageInfoContainer>
      <CurrentBalances>
        <CurrentBalanceTile>
          <TileHeader>
            <FaFileContract /> Contract
          </TileHeader>
          <p style={{ borderBottom: '1px solid #eaeaea', paddingBottom: '10px' }}>
            <BsCircle style={{ color: 'green' }} />
            Start: 20/03/2021
          </p>
          <p style={{ borderBottom: '1px solid #eaeaea', paddingBottom: '10px' }}>
            <BsCircle style={{ color: '#491f1e' }} />
            End: 20/03/2022
          </p>
          <p>
            <BsCircle style={{ color: 'orange' }} />
            Remaining: 40 days
          </p>
          <ProgressBar moveInDate={roomData.moveInDate} moveOutDate={roomData.moveOutDate} />
        </CurrentBalanceTile>
        <CurrentBalanceTile>
          <TileHeader>
            <BsWrench />
            Repairs
          </TileHeader>
        </CurrentBalanceTile>
        <CurrentBalanceTile>
          <TileHeader>
            <GiElectric /> Utilities
          </TileHeader>
        </CurrentBalanceTile>
        <CurrentBalanceTile>
          <TileHeader>
            <BsHouse />
            Rent
          </TileHeader>
        </CurrentBalanceTile>

        <CurrentBalanceTile>
          <TileHeader>
            <AiFillCar />
            Parking
          </TileHeader>
        </CurrentBalanceTile>
        <CurrentBalanceTile>
          <TileHeader>
            <AiOutlineCarryOut />
            Overview
          </TileHeader>
          <DoughnutChart charges={roomData.charges} />
        </CurrentBalanceTile>
      </CurrentBalances>
    </ProfileSection>
    <RepairsHeading>Repairs</RepairsHeading>
    <RepairsContainer>
      {roomOneRepairs.map((repair) => (
        <RepairSection key={repair.id} repair={repair} />
      ))}
    </RepairsContainer>
  </Layout>
);

export default RoomPage;
