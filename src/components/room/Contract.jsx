/* eslint-disable react/prop-types */
/* eslint-disable import/no-named-as-default */

import React from 'react';
import styled from 'styled-components';
import { BsCircle } from 'react-icons/bs';
import { AiFillCar, AiOutlineCarryOut } from 'react-icons/ai';
import { parse } from 'fecha';
import ProgressBar from './ProgressBar';
import DoughnutChart from './DoughnutChart';
import device from '../common/MediaQueries';

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
  grid-template-columns: repeat(3, 1fr);
  padding: 20px;
  color: #666;
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;
  flex: 1;
  background: #491f1e;
  border-radius: 10px;
  width: 100%;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const CurrentBalanceTile = styled.div`
  display: flex;
  flex-direction: column;
  height: 320px;
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
          <AiOutlineCarryOut />
          Overview
        </TileHeader>
        <DoughnutChart charges={charges} />
      </CurrentBalanceTile>

      <CurrentBalanceTile>
        <TileHeader>RENT</TileHeader>
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
          <AiFillCar />
          CHARGES
        </TileHeader>
      </CurrentBalanceTile>
    </CurrentBalances>
  );
};

export default Contract;
