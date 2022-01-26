/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import Image from 'next/image';
import RepairSection from '../../components/common/Repair';
import Layout from '../../components/common/Layout';
import profilePic from '../../../public/profilePic.jpg';
import { REPAIR_DATA, PROPERTY_DATA } from '../../mockData';
import { GET_ROOM } from '../../../services/query';
import Contract from '../../components/room/Contract';
import Header from '../../components/room/Header';
import Tenant from '../../components/room/Tenant';
import UpdateRoom from '../../components/room/forms/UpdateRoom';
import UpdateRepair from '../../components/repairs/forms/UpdateRepair';

const roomData = PROPERTY_DATA[0].rooms[0];
// name charges occupant
const roomOneRepairs = REPAIR_DATA.filter((repair) => repair.room === 'room 1');

const ProfileSection = styled.div`
  display: flex;
  gap: 20px;
`;

const ImageInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    font-size: 2rem;
  }
  p {
    font-size: 1.5rem;
  }
`;

const ImageWrapper = styled.div`
  height: 300px;
  overflow: hidden;
  width: 300px;
  border-radius: 10px;
`;

const ProfileImage = styled(Image)``;

const RepairsHeading = styled.h2`
  text-transform: uppercase;
  font-size: 2rem;
`;

const RepairsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  max-height: 750px;
  overflow: scroll;
`;

const RoomPage = () => {
  const [editRoom, setEditRoom] = useState(false);
  const [updateRepair, setUpdateRepair] = useState(false);
  const [currentRepair, setCurrentRepair] = useState({});
  const router = useRouter();
  const { room } = router.query;
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const { loading, error, data } = useQuery(GET_ROOM, {
    variables: { roomId: room },
  });

  if (loading) return '...loading';
  if (error) return '...error';

  return (
    <>
      {editRoom && <UpdateRoom room={data?.room} setEditRoom={setEditRoom} />}
      {updateRepair && (
        <UpdateRepair setUpdateRepair={setUpdateRepair} currentRepair={currentRepair} />
      )}
      <Layout>
        <Header
          roomNumber={data?.room.roomNumber}
          property={data?.room.property}
          setEditRoom={setEditRoom}
        />

        {data?.room?.occupant && (
          <ProfileSection>
            <Tenant occupant={data?.room?.occupant} />
            <Contract occupant={data?.room?.occupant} charges={data?.room?.charges} />
          </ProfileSection>
        )}

        <RepairsHeading>Repairs</RepairsHeading>
        <RepairsContainer>
          {roomOneRepairs.map((repair) => (
            <RepairSection
              key={repair.id}
              repair={repair}
              setCurrentRepair={setCurrentRepair}
              setUpdateRepair={setUpdateRepair}
            />
          ))}
        </RepairsContainer>
      </Layout>
    </>
  );
};

export default RoomPage;
