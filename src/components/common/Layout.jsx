/* eslint-disable import/no-named-as-default */
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import React from 'react';
import device from './MediaQueries';

const LayoutStyled = styled.main`
  position: relative;
  height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  overflow: scroll;

  @media ${device.mobile} {
    padding: 8px;
    gap: 8px;
  }
`;

const Layout = ({ children }) => <LayoutStyled>{children}</LayoutStyled>;

export default Layout;
