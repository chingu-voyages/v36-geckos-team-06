/* eslint-disable react/prop-types */
/* eslint-disable import/no-named-as-default */
import styled from 'styled-components';
import React from 'react';
import Repair from './Repair';
import device from './MediaQueries';

export const RepairsHeading = styled.h2`
  text-transform: uppercase;
  font-size: 2rem;
`;

export const RepairsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  max-height: 750px;
  overflow: scroll;
`;

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Repairs = ({ repairs, setCurrentRepair, setUpdateRepair }) => (
  <Container>
    {repairs.map((repair) => (
      <Repair
        repair={repair}
        room={repair.room}
        key={repair.id}
        setCurrentRepair={setCurrentRepair}
        setUpdateRepair={setUpdateRepair}
      />
    ))}
  </Container>
);

export default Repairs;
