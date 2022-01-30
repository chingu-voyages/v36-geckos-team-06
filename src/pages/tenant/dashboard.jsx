/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { getUserFromLocalStorage } from '../../../utils';
import profilePic from '../../../public/profilePic.jpg';
import { REPAIR_DATA } from '../../mockData';
import Layout from '../../components/common/Layout';
import AddRepair from '../../components/tenant/forms/AddRepair';
import { HeaderStyled } from '../../components/common/Header';
import { RepairsContainer, RepairsHeading } from '../../components/common/Repairs';
import Repair from '../../components/common/Repair';
import {
  ProfileImageContainer,
  CardContainer,
  Card,
  CardContent,
} from '../../components/tenant/Dashboard';
import Button from '../../components/common/Button';
import { GET_TENANT } from '../../../services/query';

// name charges occupant
const roomOneRepairs = REPAIR_DATA.filter((repair) => repair.room === 'room 1');

const Dashboard = () => {
  const [createRepair, setCreateRepair] = useState(false);
  const [currentRepair, setCurrentRepair] = useState({});
  const tenant = getUserFromLocalStorage(`authTenant`);
  const Router = useRouter();

  const { loading, error, data } = useQuery(GET_TENANT, {
    variables: { email: tenant?.email },
  });

  console.log(data?.tenant?.charges);

  useEffect(() => {
    if (!tenant) {
      // if landlord does not exist in local storage we push the user back to the home page where they have to sign in
      Router.replace(`/`);
      return null;
    }
    return null;
  }, [tenant]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <>
      {createRepair && <AddRepair setCreateRepair={setCreateRepair} />}

      <Layout>
        <HeaderStyled
          direction="row"
          justify="space-between"
          align="flex-end"
          bg={
            data?.tenant?.property?.fullImage ||
            'https://ik.imagekit.io/txobowsaxlc/dashbaord-pic-main_Jasm7l6BB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642269286358'
          }
        >
          <ProfileImageContainer>
            <Image layout="fill" src={data?.tenant?.occupant?.avatar || profilePic} />
          </ProfileImageContainer>
          <Button style={{ width: '272px' }} color="white" onClick={() => setCreateRepair(true)}>
            Add Repair
          </Button>
          <Button style={{ width: '272px' }} color="white" onClick={() => setCreateRepair(true)}>
            Log Out
          </Button>
        </HeaderStyled>
        <CardContainer>
          <Card>
            <CardContent>TEST</CardContent>
            <CardContent>TEST</CardContent>
            <CardContent>TEST</CardContent>
            <CardContent>TEST</CardContent>
            <CardContent>TEST</CardContent>
          </Card>
          <Card>
            <CardContent>${data?.tenant?.charges.rent}</CardContent>
            <CardContent>${data?.tenant?.charges.water}</CardContent>
            <CardContent>${data?.tenant?.charges.electricity}</CardContent>
            <CardContent>${data?.tenant?.charges.parking}</CardContent>
          </Card>
        </CardContainer>
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
    </>
  );
};

export default Dashboard;
