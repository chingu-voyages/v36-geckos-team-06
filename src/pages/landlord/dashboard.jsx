/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import Layout from '../../components/common/Layout';
import Content from '../../components/landlord/common/Content';
import Header from '../../components/landlord/common/Header';
import Properties from '../../components/landlord/dashboard/Properties';
import Repairs from '../../components/landlord/dashboard/Repairs';
import Actions from '../../components/landlord/common/Actions';
import CreateProperty from '../../components/property/forms/CreateProperty';
import { withAuth, getLandlordIdFromLocalStorage } from '../../../utils';
import { GET_LANDLORD } from '../../../services/query';

const Dashboard = () => {
  const [showRepairs, setShowRepairs] = useState('properties');
  const [createProperty, setCreateProperty] = useState(false);

  const landlord = getLandlordIdFromLocalStorage();

  const { loading, error, data } = useQuery(GET_LANDLORD, {
    variables: { landlordId: landlord?.id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <>
      {createProperty && (
        <CreateProperty setCreateProperty={setCreateProperty} landlordID={data.landlord.id} />
      )}
      <Layout>
        <Header setCreateProperty={setCreateProperty} firstName={data?.landlord?.firstName} />
        <Actions setShowRepairs={setShowRepairs} showRepairs={showRepairs} />
        <Content>
          {showRepairs === 'properties' && <Properties properties={data.landlord.properties} />}

          {showRepairs === 'repairs' && <Repairs />}
        </Content>
      </Layout>
    </>
  );
};

export default withAuth(Dashboard);
