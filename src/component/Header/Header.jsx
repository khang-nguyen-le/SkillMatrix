import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Space } from 'antd';
import { DownOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';

import LanguagesIcon from '../../icons/LanguagesIcon';
import NotificationIcon from '../../icons/NotificationIcon';
import {
  HeaderMenuBox,
  IconBox,
  Logo,
  ProfileMenu,
  StyledAvatar,
  StyledHeader,
  SubInfo,
  UserName,
  UserNameBox,
} from './HeaderStyle';

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
      <Link to="/forms/assigned">
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
