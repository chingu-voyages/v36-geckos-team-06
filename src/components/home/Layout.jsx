/* eslint-disable react/prop-types */
import styled from 'styled-components';
import React from 'react';

const LayoutStyled = styled.main`
  min-height: 100vh;
  width: 100%;
  padding: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, rgba(36, 36, 35, 0.2) 0%, rgba(255, 0, 0, 0.2) 100%), #242423;
`;

const Layout = ({ children }) => <LayoutStyled>{children}</LayoutStyled>;

export default Layout;
