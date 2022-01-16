import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_PROPERTY } from '../../../services/query';
import Layout from '../../components/common/Layout';
import Header from '../../components/property/Header';
import EditPropertyForm from '../../components/dashboard/propertyform/EditPropertyForm';

const Property = () => {
  const [editProperty, setEditProperty] = useState(false);
  const router = useRouter();
  const { property } = router.query;
  const { loading, error, data } = useQuery(GET_PROPERTY, {
    variables: { propertyId: property },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <>
      {editProperty && (
        <EditPropertyForm setEditProperty={setEditProperty} property={data.property} />
      )}

      <Layout>
        <Header
          name={data.property.name}
          image={data.property.fullImage}
          setEditProperty={setEditProperty}
        />
      </Layout>
    </>
  );
};

export default Property;
