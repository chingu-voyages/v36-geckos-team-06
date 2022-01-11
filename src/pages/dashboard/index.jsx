import React, { useState } from 'react';
import Layout from '../../components/common/Layout';
import Content from '../../components/dashboard/Content';
import Header from '../../components/dashboard/Header';
import Properties from '../../components/dashboard/Properties';
import Actions from '../../components/dashboard/Actions';

const Dashboard = () => {
  const [showRepairs, setShowRepairs] = useState('properties');

  console.log(showRepairs);
  return (
    <Layout>
      <Header />
      <Actions setShowRepairs={setShowRepairs} />
      <Content>
        {showRepairs === 'properties' && <Properties />}

        {showRepairs === 'repairs' && <h1>Repairs</h1>}
      </Content>
    </Layout>
  );
};

export default Dashboard;
