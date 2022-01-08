import React from 'react';
import styled from 'styled-components';
import Searchbar from '../components/Searchbar';
import Button from '../components/Button';
import PageContainer from '../components/Pagecontainer';
import Header from '../components/Header';
import { PROPERTY_DATA, LANDLORD } from '../mockData';

const UserName = styled.h2`
  font-size: 45px;
  margin: 0;
  color: white;
  z-index: 1;
`;

const ButtonAndInputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-gap: 20px;
  width: 100%;
  margin: 20px 0;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
`;

const PropertyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  width: 100%;
  height: 500px;
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

const propertyArray = [
  { name: 'Building One', location: 'Palm Springs', capacity: 200 },
  { name: 'Building One', location: 'Palm Springs', capacity: 201 },
  { name: 'Building One', location: 'Palm Springs', capacity: 203 },
  { name: 'Building One', location: 'Palm Springs', capacity: 204 },
  { name: 'Building One', location: 'Palm Springs', capacity: 205 },
  { name: 'Building One', location: 'Palm Springs', capacity: 206 },
  { name: 'Building One', location: 'Palm Springs', capacity: 207 },
  { name: 'Building One', location: 'Palm Springs', capacity: 208 },
  { name: 'Building One', location: 'Palm Springs', capacity: 209 },
  { name: 'Building One', location: 'Palm Springs', capacity: 210 },
  { name: 'Building One', location: 'Palm Springs', capacity: 211 },
  { name: 'Building One', location: 'Palm Springs', capacity: 212 },
  { name: 'Building One', location: 'Palm Springs', capacity: 213 },
  { name: 'Building One', location: 'Palm Springs', capacity: 214 },
  { name: 'Building One', location: 'Palm Springs', capacity: 215 },
];

function LandlordDashboardPage() {
  return (
    <PageContainer>
      <Header justify="space-between" align="flex-end" direction="row">
        <UserName>
          Welcome,
          <br />
          {LANDLORD.name.split(' ')[0]}.
        </UserName>
        <Button color="white">Add Property</Button>
      </Header>
      <ButtonAndInputContainer>
        <Button color="#A3293A">Properties</Button>
        <Button color="#333">Repairs</Button>
        <Searchbar />
      </ButtonAndInputContainer>
      <PropertyContainer>
        {PROPERTY_DATA.map((property) => (
          <Property key={property.id} bg={property.propertyImage}>
            <PropertyName>{property.name}</PropertyName>
            <PropertyLocation>{property.address}</PropertyLocation>
            <PropertyCapacity>{property.capacity}</PropertyCapacity>
          </Property>
        ))}
      </PropertyContainer>
    </PageContainer>
  );
}

export default LandlordDashboardPage;
