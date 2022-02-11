import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useQuery } from '@apollo/client';
import { GET_PROPERTY } from '../../../services/query';
import Layout from '../../components/common/Layout';
import Header from '../../components/property/Header';
import UpdateProperty from '../../components/property/forms/UpdateProperty';
import CreateRoom from '../../components/room/forms/CreateRoom';
import Rooms from '../../components/property/Rooms';

const Property = () => {
  const [updateProperty, setUpdateProperty] = useState(false);
  const [createRoom, setCreateRoom] = useState(false);
  const router = useRouter();
  const { property } = router.query;
  const { loading, error, data } = useQuery(GET_PROPERTY, {
    variables: { propertyId: property },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <>
      <Head>
        <title>{data?.property?.name?.toUpperCase()}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {updateProperty && (
        <UpdateProperty setUpdateProperty={setUpdateProperty} property={data.property} />
      )}

      {createRoom && <CreateRoom setCreateRoom={setCreateRoom} propertyId={property} />}

      <Layout>
        <Header
          setCreateRoom={setCreateRoom}
          name={data.property.name}
          image={data.property.fullImage}
          setUpdateProperty={setUpdateProperty}
        />

        <Rooms rooms={data.property.rooms} />
      </Layout>
    </>
  );
};

export default Property;
