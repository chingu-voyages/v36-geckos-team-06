/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { BsHouse, BsWrench, BsCircle } from 'react-icons/bs';
import { AiFillCar, AiOutlineCarryOut } from 'react-icons/ai';
import { GiElectric } from 'react-icons/gi';
import { parse } from 'fecha';
import { FaFileContract } from 'react-icons/fa';
import ProgressBar from './ProgressBar';
import DoughnutChart from './DoughnutChart';

const TileHeader = styled.h4`
  font-weight: 300;
  width: 100%;
  gap: 10px;
  display: flex;
  justify-content: 'center';
  align-items: center;
`;

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

const Contract = ({ occupant, charges }) => {
  const moveIn = parse(occupant.moveInDate, 'isoDateTime').toDateString();
  const moveOut = parse(occupant.moveOutDate, 'isoDateTime').toDateString();

  return (
    <CurrentBalances>
      <CurrentBalanceTile>
        <TileHeader>
          <FaFileContract /> Contract
        </TileHeader>
        <p style={{ borderBottom: '1px solid #eaeaea', paddingBottom: '10px' }}>
          <BsCircle style={{ color: 'green' }} />
          Start: {moveIn}
        </p>
        <p style={{ borderBottom: '1px solid #eaeaea', paddingBottom: '10px' }}>
          <BsCircle style={{ color: '#491f1e' }} />
          End: {moveOut}
        </p>
        <p>
          <BsCircle style={{ color: 'orange' }} />
          Remaining: 40 days
        </p>
        <ProgressBar
          moveInDate={parse(occupant?.moveInDate, 'isoDateTime')}
          moveOutDate={parse(occupant?.moveOutDate, 'isoDateTime')}
        />
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
        <DoughnutChart charges={charges} />
      </CurrentBalanceTile>
    </CurrentBalances>
  );
};

export default Contract;
