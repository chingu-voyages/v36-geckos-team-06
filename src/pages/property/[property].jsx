import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/common/Layout';

const Property = () => {
  const router = useRouter();
  const { property } = router.query;

  return (
    <Layout>
      <h1>Property {property} </h1>
    </Layout>
  );
};

export default Property;
