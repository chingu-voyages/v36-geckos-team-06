import React from 'react';
import styled from 'styled-components';

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
`;

const Header = styled.header`
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
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  background: ${({ color }) => color};
  color: ${({ color }) => (color === 'white' ? 'black' : 'white')};
  text-transform: uppercase;
  padding: 15px 15px;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    transform: scale(0.98);
    transition: transform 0.3s ease-in-out;
  }
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

const SearchContainer = styled.div`
  display: flex;
  overflow: hidden;
  @media (max-width: 768px) {
    grid-column: span 2;
  }
`;

const Input = styled.input`
  flex: 1;
  border-right: none;
  border-radius: 10px 0 0 10px;
  padding-left: 10px;
  &:focus {
    outline: none !important;
    border: 2px solid #a3293a;
    border-right: none;
    overflow: hidden;
  }
`;
const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  background: #333;
  color: white;
  text-transform: uppercase;
  padding: 15px 15px;
  border: none;
  border-radius: 0 10px 10px 0;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #e46979;
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
  { name: 'Building One', location: 'Palm Springs', capacity: 200 },
  { name: 'Building One', location: 'Palm Springs', capacity: 200 },
  { name: 'Building One', location: 'Palm Springs', capacity: 200 },
  { name: 'Building One', location: 'Palm Springs', capacity: 200 },
  { name: 'Building One', location: 'Palm Springs', capacity: 200 },
  { name: 'Building One', location: 'Palm Springs', capacity: 200 },
  { name: 'Building One', location: 'Palm Springs', capacity: 200 },
  { name: 'Building One', location: 'Palm Springs', capacity: 200 },
  { name: 'Building One', location: 'Palm Springs', capacity: 200 },
  { name: 'Building One', location: 'Palm Springs', capacity: 200 },
  { name: 'Building One', location: 'Palm Springs', capacity: 200 },
  { name: 'Building One', location: 'Palm Springs', capacity: 200 },
  { name: 'Building One', location: 'Palm Springs', capacity: 200 },
  { name: 'Building One', location: 'Palm Springs', capacity: 200 },
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
        <Button color="white">Add Property</Button>
      </Header>
      <ButtonAndInputContainer>
        <Button color="#A3293A">Properties</Button>
        <Button color="#333">Repairs</Button>
        <SearchContainer>
          <Input type="text" />
          <SearchButton>Search</SearchButton>
        </SearchContainer>
      </ButtonAndInputContainer>
      <PropertyContainer>
        {propertyArray.map((property) => (
          <Property>
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
