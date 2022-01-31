/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { HeaderStyled, HeaderButton, Buttons } from '../common/Header';
import profilePic from '../../../public/profilePic.jpg';

const ProfileImageContainer = styled.div`
  position: relative;
  width: 213px;
  height: 213px;
  border-radius: 50%;
  overflow: hidden;
`;

const Header = ({ avatar, fullImage, setCreateRepair }) => {
  const router = useRouter();

  const signOut = () => {
    // remove the token
    localStorage.removeItem(`authTenant`);

    router.push('/');
  };

  return (
    <HeaderStyled
      direction="row"
      justify="space-between"
      align="flex-end"
      bg={
        fullImage ||
        'https://ik.imagekit.io/txobowsaxlc/dashbaord-pic-main_Jasm7l6BB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642269286358'
      }
    >
      <ProfileImageContainer>
        <Image layout="fill" src={avatar || profilePic} />
      </ProfileImageContainer>

      <Buttons>
        <HeaderButton onClick={() => setCreateRepair(true)}>ADD REPAIR</HeaderButton>
        <HeaderButton onClick={signOut} bg="#242423" color="#fdfdfd">
          LOG OUT
        </HeaderButton>
      </Buttons>
    </HeaderStyled>
  );
};

export default Header;
