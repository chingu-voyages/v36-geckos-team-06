/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { getUserFromLocalStorage } from '../../../utils';
import Layout from '../../components/common/Layout';
import AddRepair from '../../components/tenant/forms/AddRepair';
import { GET_TENANT } from '../../../services/query';
import Header from '../../components/tenant/Header';
import Info from '../../components/tenant/Info';
import TenantRepair from '../../components/tenant/TenantRepair';

// name charges occupant
const Dashboard = () => {
  const [createRepair, setCreateRepair] = useState(false);
  const [currentRepair, setCurrentRepair] = useState({});
  const tenant = getUserFromLocalStorage(`authTenant`);
  const Router = useRouter();

  const { loading, error, data } = useQuery(GET_TENANT, {
    variables: { email: tenant?.email },
  });

  console.log(data?.tenant?.occupant);

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
        <Info charges={data?.tenant?.charges} occupant={data?.tenant?.occupant} />

        <TenantRepair setCurrentRepair={setCurrentRepair} setUpdateRepair={setCreateRepair} />
      </Layout>
    </>
  );
};

export default Dashboard;
