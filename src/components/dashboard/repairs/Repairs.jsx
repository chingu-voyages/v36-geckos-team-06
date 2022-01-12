/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Repair from '../../common/Repair';
import { REPAIR_DATA } from '../../../mockData';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Repairs = () => (
  <Container>
    {REPAIR_DATA.map((repair) => (
      <Repair repair={repair} />
    ))}
  </Container>
);

export default Repairs;
