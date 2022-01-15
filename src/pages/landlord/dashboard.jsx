/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import Layout from '../../components/common/Layout';
import Content from '../../components/dashboard/common/Content';
import Header from '../../components/dashboard/common/Header';
import Properties from '../../components/dashboard/properties/Properties';
import Repairs from '../../components/dashboard/repairs/Repairs';
import Actions from '../../components/dashboard/common/Actions';
import AddProperty from '../../components/dashboard/addpropertyform/AddProperty';
import utils from '../../../utils';

const { withAuth } = utils;

const GET_LANDLORD = gql`
  query ($landlordId: ID!) {
    landlord(id: $landlordId) {
      role
      avatar
      firstName
      properties {
        id
        name
        address
        postcode
        city
        country
      }
    }
  }
`;

const getLandlordIdFromLocalStorage = () => {
  let authLandlord;
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('authLandlord');
    if (saved != null) {
      authLandlord = JSON.parse(saved);
    }
  }
  return authLandlord;
};

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
      {addProperty && <AddProperty setAddProperty={setAddProperty} />}
      <Layout>
        <Header setAddProperty={setAddProperty} firstName={data?.landlord?.firstName} />
        <Actions setShowRepairs={setShowRepairs} showRepairs={showRepairs} />
        <Content>
          {showRepairs === 'properties' && <Properties />}

          {showRepairs === 'repairs' && <Repairs />}
        </Content>
      </Layout>
    </>
  );
};

export default Dashboard;
