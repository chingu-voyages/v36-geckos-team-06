/* eslint-disable react/prop-types */
import styled from 'styled-components';
import React from 'react';

const ContentStyled = styled.section``;

const Content = ({ children }) => <ContentStyled>{children}</ContentStyled>;

export default Content;
