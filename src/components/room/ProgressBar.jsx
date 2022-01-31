/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  background-color: lightgrey;
  border-radius: 10px;
  height: 30px;
  overflow: hidden;
  margin-top: 20px;
  transform: scale(0.95);
`;
const ProgressBarStyled = styled.div`
  background-color: #242423;
  width: ${({ percentage }) => `${percentage}%`};
`;

const calculatePercentagePassed = (moveInDate, moveOutDate) => {
  const lengthDays = (time) => time / (1000 * 3600 * 24);
  const today = new Date();
  const contractLengthTime = moveOutDate.getTime() - moveInDate.getTime();
  const remainingTime = moveOutDate.getTime() - today.getTime();
  const contractLengthDays = lengthDays(contractLengthTime);
  const remainingDays = lengthDays(remainingTime);
  const percentageRemaining = 100 - (100 * remainingDays) / contractLengthDays;

  return Math.floor(percentageRemaining);
};

const ProgressBar = ({ moveInDate, moveOutDate }) => (
  <ProgressBarContainer>
    <ProgressBarStyled percentage={calculatePercentagePassed(moveInDate, moveOutDate)} />
  </ProgressBarContainer>
);

export default ProgressBar;
