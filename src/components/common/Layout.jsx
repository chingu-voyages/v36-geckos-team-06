/* eslint-disable react/prop-types */
import styled from 'styled-components';
import React from 'react';

const LayoutStyled = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  padding: 24px 120px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Layout = ({ children }) => <LayoutStyled>{children}</LayoutStyled>;

export default Layout;
