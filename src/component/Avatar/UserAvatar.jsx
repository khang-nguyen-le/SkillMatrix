import { Avatar } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const UserAvatar = ({ src, name }) => {
  return (
    <UserAvatarBox>
      <Avatar size={40} src={<img src={src} alt="avatar" />} />
      <div>
        <RespondentName>{name}</RespondentName>

        <Role>Contractor</Role>
      </div>
    </UserAvatarBox>
  );
};

UserAvatar.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
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
