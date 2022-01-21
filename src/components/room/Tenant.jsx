/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import profilePic from '../../../public/profilePic.jpg';

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

const capitalize = (str) => str?.charAt(0).toUpperCase() + str?.slice(1);

const Tenant = ({ occupant }) => (
  <ImageInfoContainer>
    <ImageWrapper>
      <ProfileImage src={profilePic} />
    </ImageWrapper>
    <h4>
      {capitalize(occupant?.firstName)} {`  `}
      {capitalize(occupant?.lastName)}
    </h4>
    <p>{occupant?.email}</p>
    <p>{occupant?.phoneNumber}</p>
  </ImageInfoContainer>
);

export default Tenant;
