/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import Layout from '../../components/common/Layout';
import Content from '../../components/dashboard/common/Content';
import Header from '../../components/dashboard/common/Header';
import Properties from '../../components/dashboard/properties/Properties';
import Repairs from '../../components/dashboard/repairs/Repairs';
import Actions from '../../components/dashboard/common/Actions';
import AddPropertyForm from '../../components/dashboard/propertyform/AddPropertyForm';
import { withAuth, getLandlordIdFromLocalStorage } from '../../../utils';
import { GET_LANDLORD } from '../../../services/query';

const Dashboard = () => {
  const [showRepairs, setShowRepairs] = useState('properties');
  const [addProperty, setAddProperty] = useState(false);

  const landlord = getLandlordIdFromLocalStorage();

  const { loading, error, data } = useQuery(GET_LANDLORD, {
    variables: { landlordId: landlord?.id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <>
      {addProperty && <AddPropertyForm setAddProperty={setAddProperty} />}
      <Layout>
        <Header setAddProperty={setAddProperty} firstName={data?.landlord?.firstName} />
        <Actions setShowRepairs={setShowRepairs} showRepairs={showRepairs} />
        <Content>
          {showRepairs === 'properties' && <Properties properties={data?.properties} />}

          {showRepairs === 'repairs' && <Repairs />}
        </Content>
      </Layout>
    </>
  );
};

export default withAuth(Dashboard);
