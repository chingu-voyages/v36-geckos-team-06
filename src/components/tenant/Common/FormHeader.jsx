/* eslint-disable react/prop-types */
import styled from 'styled-components';
import React from 'react';

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1;
`;

const Heading = styled.h1`
  font-size: 64px;
`;
const RoomNum = styled.p`
  font-weight: 600;
  font-size: 36px;
`;

const Property = styled.p`
  font-size: 13px;
`;

export const FormHeader = ({ roomNumber, property }) => (
  <TextContainer>
    <Heading>DETAILS</Heading>
    <RoomNum>{roomNumber}</RoomNum>
    <Property>{property}</Property>
  </TextContainer>
);
