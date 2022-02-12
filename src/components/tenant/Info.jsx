/* eslint-disable import/no-named-as-default */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { parse } from 'fecha';
import { BsCircle } from 'react-icons/bs';
import ProgressBar from '../room/ProgressBar';
import device from '../common/MediaQueries';

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  width: 100%;
  background: linear-gradient(#491f1e, #1f0100);
  border-radius: 16px;
  padding: 44px;
  gap: 44px;

  @media ${device.tablet} {
    flex-direction: column;
  }

  @media ${device.mobile} {
    padding: 24px;
  }
`;

const Card = styled.div`
  width: 100%;
  text-align: center;
  border-radius: 16px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const CardContent = styled.div`
  width: 100%;
  border: solid 1px #1f0100;
  border-radius: 10px;
  padding: 24px;
  background-color: #242423;
  color: #fff;
  font-size: 24px;
  font-weight: bold;

  span {
    text-decoration: underline;
  }
`;

const Info = ({ charges, occupant }) => {
  const moveIn = parse(occupant.moveInDate, 'isoDateTime').toDateString();
  const moveOut = parse(occupant.moveOutDate, 'isoDateTime').toDateString();

  return (
    <CardContainer>
      <Card>
        <h1>RENT</h1>
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
      </Card>
      <Card>
        <h1>CHARGES</h1>
        <CardContent>
          {' '}
          <span>Water:</span>${charges.water}
        </CardContent>
        <CardContent>
          <span>Electricity:</span> ${charges.electricity}
        </CardContent>
        <CardContent>
          {' '}
          <span>Parking:</span> ${charges.parking}
        </CardContent>
      </Card>
    </CardContainer>
  );
};

export default Info;
