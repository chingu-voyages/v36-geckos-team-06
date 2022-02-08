/* eslint-disable import/no-named-as-default */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useQuery, gql } from '@apollo/client';
import { HeaderStyled, HeaderButton, Buttons } from '../../common/Header';
import device from '../../common/MediaQueries';

const UserName = styled.h2`
  font-size: 58px;
  font-weight: 800;
  line-height: 1.3;
  margin: 0;
  color: white;
  z-index: 1;

  @media ${device.tablet} {
    display: none;
  }
`;

const UserNameSmall = styled.h2`
  font-size: 48px;
  color: white;
  font-weight: 800;
  line-height: 1.3;
  margin: 0;
  color: white;
  z-index: 1;

  @media screen and (min-width: 850px) {
    display: none;
  }

  @media ${device.mobile} {
    font-size: 32px;
    text-align: center;
  }
`;

// Query apollo cache to check if landlord is signed in
const IS_LOGGED_IN = gql`
  {
    landlordIsLoggedIn @client
  }
`;

const Header = ({ setCreateProperty, firstName }) => {
  const router = useRouter();
  // query hook for user logged-in state,
  // including the client for referencing the Apollo store
  const { client } = useQuery(IS_LOGGED_IN);

  const signOut = () => {
    // remove the token
    localStorage.removeItem(`authLandlord`);
    // clear the application's cache
    client.resetStore();
    // update local state
    client.writeQuery({
      query: gql`
        query getAuth {
          isLoggedIn
        }
      `,
      data: {
        isLoggedIn: false,
      },
    });
    router.push('/');
  };

  return (
    <HeaderStyled
      direction="row"
      justify="space-between"
      align="flex-end"
      bg="https://ik.imagekit.io/txobowsaxlc/dashbaord-pic-main_Jasm7l6BB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642269286358"
    >
      <UserName>
        WELCOME,
        <br />
        {firstName?.toUpperCase()}
      </UserName>

      <UserNameSmall>WELCOME, {firstName?.toUpperCase()}</UserNameSmall>
      <Buttons>
        <HeaderButton onClick={() => setCreateProperty(true)}>ADD PROPERTY</HeaderButton>
        <HeaderButton onClick={signOut} bg="#242423" color="#fdfdfd">
          LOG OUT
        </HeaderButton>
      </Buttons>
    </HeaderStyled>
  );
};

export default Header;
