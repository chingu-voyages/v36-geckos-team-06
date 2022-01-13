import React, { useState } from 'react';
import Layout from '../../components/common/Layout';
import Content from '../../components/dashboard/common/Content';
import Header from '../../components/dashboard/common/Header';
import Properties from '../../components/dashboard/properties/Properties';
import Repairs from '../../components/dashboard/repairs/Repairs';
import Actions from '../../components/dashboard/common/Actions';
import AddProperty from '../../components/dashboard/addpropertyform/AddProperty';

const Dashboard = () => {
  const [showRepairs, setShowRepairs] = useState('properties');
  const [addProperty, setAddProperty] = useState(true);

  console.log(showRepairs);
  return (
    <>
      {addProperty && <AddProperty setAddProperty={setAddProperty} />}
      <Layout>
        <Header setAddProperty={setAddProperty} />
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
