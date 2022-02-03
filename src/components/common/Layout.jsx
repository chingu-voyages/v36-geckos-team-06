/* eslint-disable react/prop-types */
import styled from 'styled-components';
import React from 'react';

const LayoutStyled = styled.main`
  max-width: 1400px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Layout = ({ children }) => <LayoutStyled>{children}</LayoutStyled>;

export default Layout;
