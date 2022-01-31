import styled from 'styled-components';

export const CardContainer = styled.div`
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

export const Card = styled.div`
  width: 100%;
  border-radius: 16px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const CardContent = styled.div`
  width: 100%;
  border: solid 1px #1f0100;
  border-radius: 16px;
  padding: 24px;
`;
