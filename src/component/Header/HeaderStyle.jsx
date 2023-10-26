import { Avatar, Dropdown } from 'antd';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 8rem;
  background-color: var(--color-primary--6);
  position: sticky;
  top: 0;
  z-index: 99;
`;

export const Logo = styled.span`
  text-transform: uppercase;
  font-weight: 700;
  color: var(--color-gray--1);
  font-size: 2.4rem;
`;

export const HeaderMenuBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.8rem;
  border-radius: 50%;
  background-color: transparent;
  transition: all 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const ProfileMenu = styled(Dropdown)``;

export const UserNameBox = styled.div`
  max-width: 150px;
`;

export const UserName = styled.p`
  color: var(--color-gray--1);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const SubInfo = styled.p`
  color: var(--color-gray--1);
  font-size: 1.2rem;
`;

export const StyledAvatar = styled(Avatar)``;
