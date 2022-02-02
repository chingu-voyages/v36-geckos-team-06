/* eslint-disable react/prop-types */
import React from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import Repair from '../../common/Repair';
import { GET_REPAIRS } from '../../../../services/query';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Repairs = ({ setCurrentRepair, setUpdateRepair }) => {
  const { data, loading, error } = useQuery(GET_REPAIRS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <Container>
      {data?.repairs.map((repair) => (
        <Repair
          repair={repair}
          setUpdateRepair={setUpdateRepair}
          setCurrentRepair={setCurrentRepair}
          displayRoomNumber="true"
        />
      ))}
    </Container>
  );
};

export default Repairs;
