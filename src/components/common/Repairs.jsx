/* eslint-disable react/prop-types */
import styled from 'styled-components';
import React from 'react';
import Repair from './Repair';

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
  display: flex;
  flex-direction: column;
  gap: 24px;
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
