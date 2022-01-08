import React from 'react';
import styled from 'styled-components';
import Searchbar from '../components/Searchbar';
import ButtonStyled from '../components/Button';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  min-height: 600px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px 40px;
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Header = styled.header`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 300px;
  width: 100%;
  background: linear-gradient(to left, #ff00005a 5%, #00000083 100%), url('/apartmentImage.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  padding: 30px;
`;

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
  background: linear-gradient(to left, #ff00005a 5%, #00000083 100%), url('/apartmentImage.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
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
      <Header>
        <UserName>
          Welcome,
          <br />
          Sammie.
        </UserName>
        <ButtonStyled color="white">Add Property</ButtonStyled>
      </Header>
      <ButtonAndInputContainer>
        <ButtonStyled color="#A3293A">Properties</ButtonStyled>
        <ButtonStyled color="#333">Repairs</ButtonStyled>
        <Searchbar />
      </ButtonAndInputContainer>
      <PropertyContainer>
        {propertyArray.map((property) => (
          <Property key={property.capacity}>
            <PropertyName>{property.name}</PropertyName>
            <PropertyLocation>{property.location}</PropertyLocation>
            <PropertyCapacity>{property.capacity}</PropertyCapacity>
          </Property>
        ))}
      </PropertyContainer>
    </PageContainer>
  );
}

export default LandlordDashboardPage;
