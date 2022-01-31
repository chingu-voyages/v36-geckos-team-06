/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  width: 100%;
  background: linear-gradient(#491f1e, #1f0100);
  border-radius: 16px;
  padding: 44px;
  gap: 44px;
`;

const Card = styled.div`
  width: 100%;
  border-radius: 16px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const CardContent = styled.div`
  width: 100%;
  border: solid 1px #1f0100;
  border-radius: 16px;
  padding: 24px;
`;

const Info = ({ charges }) => (
  <CardContainer>
    <Card>
      <CardContent>TEST</CardContent>
      <CardContent>TEST</CardContent>
      <CardContent>TEST</CardContent>
      <CardContent>TEST</CardContent>
      <CardContent>TEST</CardContent>
    </Card>
    <Card>
      <CardContent>${charges.rent}</CardContent>
      <CardContent>${charges.water}</CardContent>
      <CardContent>${charges.electricity}</CardContent>
      <CardContent>${charges.parking}</CardContent>
    </Card>
  </CardContainer>
);

export default Info;
