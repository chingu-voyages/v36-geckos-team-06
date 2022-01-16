import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_PROPERTY } from '../../../services/query';
import Layout from '../../components/common/Layout';
import Header from '../../components/property/Header';

const Property = () => {
  const router = useRouter();
  const { property } = router.query;
  const { loading, error, data } = useQuery(GET_PROPERTY, {
    variables: { propertyId: property },
  });

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <Layout>
      <Header name={data.property.name} image={data.property.fullImage} />
    </Layout>
  );
};

export default Property;
