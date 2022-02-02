/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import Layout from '../../components/common/Layout';
import Content from '../../components/landlord/common/Content';
import Header from '../../components/landlord/common/Header';
import Properties from '../../components/landlord/dashboard/Properties';
import Repairs from '../../components/landlord/dashboard/Repairs';
import Actions from '../../components/landlord/common/Actions';
import CreateProperty from '../../components/property/forms/CreateProperty';
import { getUserFromLocalStorage } from '../../../utils';
import { GET_LANDLORD } from '../../../services/query';
import UpdateRepair from '../../components/repairs/forms/UpdateRepair';

const Dashboard = () => {
  const [showSection, setShowSection] = useState('properties');
  const [createProperty, setCreateProperty] = useState(false);
  const [currentRepair, setCurrentRepair] = useState({});
  const [updateRepair, setUpdateRepair] = useState(false);

  const landlord = getUserFromLocalStorage(`authLandlord`);
  const Router = useRouter();

  useEffect(() => {
    if (!landlord) {
      // if landlord does not exist in local storage we push the user back to the home page where they have to sign in
      Router.replace(`/`);
      return null;
    }
    return null;
  }, [landlord]);

  const { loading, error, data } = useQuery(GET_LANDLORD, {
    variables: { landlordId: landlord?.id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <>
      {updateRepair && (
        <UpdateRepair setUpdateRepair={setUpdateRepair} currentRepair={currentRepair} />
      )}
      {createProperty && (
        <CreateProperty setCreateProperty={setCreateProperty} landlordID={data.landlord.id} />
      )}
      <Layout>
        <Header setCreateProperty={setCreateProperty} firstName={data?.landlord?.firstName} />
        <Actions setShowSection={setShowSection} showSection={showSection} />
        <Content>
          {showSection === 'properties' && <Properties properties={data.landlord.properties} />}

          {showSection === 'repairs' && (
            <Repairs setCurrentRepair={setCurrentRepair} setUpdateRepair={setUpdateRepair} />
          )}
        </Content>
      </Layout>
    </>
  );
};

export default Dashboard;
