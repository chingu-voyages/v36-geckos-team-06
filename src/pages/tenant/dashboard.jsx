/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { getUserFromLocalStorage } from '../../../utils';
import profilePic from '../../../public/profilePic.jpg';
import { REPAIR_DATA } from '../../mockData';

import Layout from '../../components/common/Layout';
import AddRepair from '../../components/tenant/forms/AddRepair';
import { HeaderStyled, HeaderButton } from '../../components/common/Header';
import { RepairsContainer, RepairsHeading } from '../../components/common/Repairs';
import Repair from '../../components/common/Repair';

// name charges occupant
const roomOneRepairs = REPAIR_DATA.filter((repair) => repair.room === 'room 1');

console.log(roomOneRepairs);

const ProfileImageContainer = styled.div`
  position: relative;
  width: 213px;
  height: 213px;
  border-radius: 50%;
  overflow: hidden;
`;

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  background: linear-gradient(#491f1e, #1f0100);
  height: 300px;
  border-radius: 10px;
`;

const Dashboard = () => {
  const [createRepair, setCreateRepair] = useState(true);
  const [currentRepair, setCurrentRepair] = useState({});
  const tenant = getUserFromLocalStorage(`authTenant`);
  const router = useRouter();

  useEffect(() => {
    if (!tenant) {
      // if landlord does not exist in local storage we push the user back to the home page where they have to sign in
      Router.replace(`/`);
      return null;
    }
    return null;
  }, [tenant]);

  return (
    <Layout>
      {createRepair && <AddRepair setCreateRepair={setCreateRepair} />}
      <HeaderStyled
        direction="row"
        justify="space-between"
        align="flex-end"
        bg="https://ik.imagekit.io/txobowsaxlc/dashbaord-pic-main_Jasm7l6BB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642269286358"
      >
        <ProfileImageContainer>
          <Image layout="responsive" src={profilePic} />
        </ProfileImageContainer>
        <HeaderButton onClick={() => setCreateRepair(true)}>Add Repair</HeaderButton>
      </HeaderStyled>
      <CardContainer>hello</CardContainer>
      <RepairsHeading>Repairs</RepairsHeading>
      <RepairsContainer>
        {roomOneRepairs.map((repair) => (
          <Repair
            key={repair.id}
            repair={repair}
            setCurrentRepair={setCurrentRepair}
            setUpdateRepair={setCreateRepair}
          />
        ))}
      </RepairsContainer>
    </Layout>
  );
};

export default Dashboard;
