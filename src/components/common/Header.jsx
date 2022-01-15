import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  height: 350px;
  width: 100%;
  background: url('https://ik.imagekit.io/txobowsaxlc/dashbaord-pic-main_Jasm7l6BB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642269286358');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 16px;
  padding: 48px;
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
`;

export const Buttons = styled.div`
  display: flex;
  gap: 24px;
`;
