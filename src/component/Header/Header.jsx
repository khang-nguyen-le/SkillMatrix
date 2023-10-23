import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Dropdown, Space } from 'antd';
import { DownOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import LanguagesIcon from '../../icons/LanguagesIcon';
import NotificationIcon from '../../icons/NotificationIcon';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 8rem;
  background-color: var(--color-primary--6);
  position: sticky;
  top: 0;
  z-index: 99;
`;

const Logo = styled.span`
  text-transform: uppercase;
  font-weight: 700;
  color: var(--color-gray--1);
  font-size: 2.4rem;
`;

const HeaderMenuBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
`;

const IconBox = styled.div`
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

const ProfileMenu = styled(Dropdown)``;

const UserNameBox = styled.div`
  max-width: 150px;
`;

const UserName = styled.p`
  color: var(--color-gray--1);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SubInfo = styled.p`
  color: var(--color-gray--1);
  font-size: 1.2rem;
`;

const StyledAvatar = styled(Avatar)``;

const headerMenuItem = [
  {
    label: 'Manage your account',
    key: '0',
    icon: <UserOutlined />,
  },
  {
    type: 'divider',
  },
  {
    label: 'Logout',
    key: '2',
    icon: <LogoutOutlined />,
  },
];

const Header = () => {
  const [isScrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  return (
    <StyledHeader
      style={
        isScrolled
          ? {
              boxShadow:
                '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            }
          : { boxShadow: 'none' }
      }
    >
      <Link to="">
        <Logo>Skill Matrix</Logo>
      </Link>
      <HeaderMenuBox>
        <IconBox>
          <LanguagesIcon size={20} />
        </IconBox>
        <IconBox>
          <NotificationIcon size={20} />
        </IconBox>
        <ProfileMenu menu={{ items: headerMenuItem }} trigger={['click']}>
          <Link onClick={(e) => e.preventDefault()}>
            <Space size="middle">
              <StyledAvatar src="https://i.pravatar.cc/300" size={40} />
              <div>
                <UserNameBox>
                  <UserName>Viktor Axelsen</UserName>
                </UserNameBox>
                <SubInfo>Viktor@gmail.com</SubInfo>
              </div>
              <DownOutlined style={{ color: '#fff', fontSize: '12px ' }} />
            </Space>
          </Link>
        </ProfileMenu>
      </HeaderMenuBox>
    </StyledHeader>
  );
};

export default Header;
