import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { PROPERTY_DATA } from '../../../mockData';

const PropertyContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  width: 100%;
  height: 750px;
  overflow: scroll;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Property = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  color: white;
  background: black;
  aspect-ratio: 1;
  border-radius: 10px;
  padding: 15px;
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

const Properties = () => (
  <>
    <PropertyContainer>
      {PROPERTY_DATA.map((property) => (
        <Link href={`/property/${property.id}`}>
          <Property key={property.id} bg={property.propertyImage}>
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
