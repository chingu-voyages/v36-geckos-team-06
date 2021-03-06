/* eslint-disable import/no-named-as-default */
import styled from 'styled-components';
import device from './MediaQueries';

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  height: 360px;
  gap: 24px;
  width: 100%;
  background: url(${({ bg }) => bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 16px;
  padding: 48px;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
    height: 280px;
  }
  @media ${device.mobile} {
    height: auto;
  }
`;

export const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 800;
  background: ${({ bg }) => bg || '#fdfdfd'};
  color: ${({ color }) => color || '#242423'};
  padding: 12px 24px;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(0rem) translateY(-0.1125rem);
  }

  &:active {
    transform: translateX(0rem) translateY(0.125rem);
  }

  @media ${device.tablet} {
    font-size: 18px;
  }

  @media ${device.mobile} {
    width: 100%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 24px;

  @media ${device.mobile} {
    flex-direction: column;
    gap: 16px;
  }
`;
