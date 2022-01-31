/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { getUserFromLocalStorage } from '../../../utils';
import { REPAIR_DATA } from '../../mockData';
import Layout from '../../components/common/Layout';
import AddRepair from '../../components/tenant/forms/AddRepair';
import { RepairsContainer, RepairsHeading } from '../../components/common/Repairs';
import Repair from '../../components/common/Repair';
import { GET_TENANT } from '../../../services/query';
import Header from '../../components/tenant/Header';
import Info from '../../components/tenant/Info';

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
        <Header
          avatar={data?.tenant?.occupant?.avatar}
          fullImage={data?.tenant?.property?.fullImage}
          setCreateRepair={setCreateRepair}
        />
        <Info charges={data?.tenant?.charges} />

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
