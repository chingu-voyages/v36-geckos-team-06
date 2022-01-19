import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_PROPERTY } from '../../../services/query';
import Layout from '../../components/common/Layout';
import Header from '../../components/property/Header';
import UpdateProperty from '../../components/property/forms/UpdateProperty';
import CreateRoom from '../../components/room/forms/CreateRoom';

const Property = () => {
  const [updateProperty, setUpdateProperty] = useState(false);
  const [createRoom, setCreateRoom] = useState(false);
  const router = useRouter();
  const { property } = router.query;
  const { loading, error, data } = useQuery(GET_PROPERTY, {
    variables: { propertyId: property },
  });

  console.log(typeof property);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <>
      {updateProperty && (
        <UpdateProperty setUpdateProperty={setUpdateProperty} property={data.property} />
      )}

      {createRoom && (
        <CreateRoom setCreateRoom={setCreateRoom} propertyName={data?.property.name} />
      )}

      <Layout>
        <Header
          setCreateRoom={setCreateRoom}
          name={data.property.name}
          image={data.property.fullImage}
          setUpdateProperty={setUpdateProperty}
        />
      </Layout>
    </>
  );
};

export default Property;
