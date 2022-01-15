/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const PropertyContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  width: 100%;
  overflow: scroll;
`;

const Property = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  color: white;
  padding: 24px;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 10px;
  background: ${({ bg }) => `url(${bg})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  text-transform: capitalize;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(0.98);
    transition: transform 0.3s ease-in-out;
  }
`;

const PropertyName = styled.h3`
  font-size: 18px;
  margin: 0;
`;

const PropertyLocation = styled.p`
  font-size: 12px;
  margin: 0;
`;

const PropertyCapacity = styled.p`
  font-size: 10px;
  margin: 0;
`;

const Properties = ({ properties }) => (
  <>
    <PropertyContainer>
      {properties?.map((property) => (
        <Link href={`/property/${property.id}`}>
          <Property key={property.id} bg={property.thumbnail}>
            <PropertyName>{property.name}</PropertyName>
            <PropertyLocation>{property.address}</PropertyLocation>
            <PropertyCapacity>{property.capacity}</PropertyCapacity>
          </Property>
        </Link>
      ))}
    </PropertyContainer>
  </>
);

export default Properties;
