/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import styled from 'styled-components';
import device from '../../common/MediaQueries';
import Button from '../../common/Button';

const ActionsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #242423;
  border-radius: 16px;
  padding: 16px;

  @media ${device.tablet} {
    padding: 10px;
  }
`;

const Actions = ({ setShowSection, showSection }) => (
  <ActionsContainer>
    <Button
      onClick={() => setShowSection('properties')}
      color={showSection === 'properties' ? '#491f1e' : '#242423'}
    >
      Properties
    </Button>
    <Button
      onClick={() => setShowSection('repairs')}
      color={showSection === 'repairs' ? '#491f1e' : '#242423'}
    >
      Repairs
    </Button>

    {/* <Button
      onClick={() => setShowSection('summary')}
      color={showSection === 'summary' ? '#491f1e' : '#242423'}
    >
      SUMMARY
    </Button> */}
  </ActionsContainer>
);
export default Actions;
