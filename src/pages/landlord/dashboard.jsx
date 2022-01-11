import React, { useState } from 'react';
import Layout from '../../components/common/Layout';
import Content from '../../components/dashboard/Content';
import Header from '../../components/dashboard/Header';
import Properties from '../../components/dashboard/Properties';
import Repairs from '../../components/dashboard/Repairs';
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

        {showRepairs === 'repairs' && <Repairs />}
      </Content>
    </Layout>
  );
};

export default Dashboard;
