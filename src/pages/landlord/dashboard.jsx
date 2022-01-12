import React, { useState } from 'react';
import Layout from '../../components/common/Layout';
import Content from '../../components/dashboard/common/Content';
import Header from '../../components/dashboard/common/Header';
import Properties from '../../components/dashboard/properties/Properties';
import Repairs from '../../components/dashboard/repairs/Repairs';
import Actions from '../../components/dashboard/common/Actions';

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
