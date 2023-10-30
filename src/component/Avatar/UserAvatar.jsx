import { Avatar } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UserAvatar = () => {
  return (
    <UserAvatarBox>
      <Avatar
        size={40}
        src={<img src="https://i.pravatar.cc/100" alt="avatar" />}
      />
      <div>
        <Link to="/forms/1/1">
          <RespondentName>Respondent Name</RespondentName>
        </Link>
        <Role>Contractor</Role>
      </div>
    </UserAvatarBox>
  );
};

const UserAvatarBox = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

const RespondentName = styled.p`
  font-weight: 500;
`;

const Role = styled.p`
  color: var(--color-gray--6);
`;

export default UserAvatar;
