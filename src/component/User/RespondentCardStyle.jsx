import styled from 'styled-components';

export const StyledRespondentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.2rem;
  background-color: var(--color-primary--4);
  border-radius: var(--border-radius-xl);
  cursor: pointer;
  transform: translateY(0);
  transition: all 0.3s;

  &:hover {
    box-shadow: var(--shadow-xl);
    transform: translateY(-5px);
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

export const RespondentAvatarBox = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: var(--border-radius-xl);
`;

export const RespondentAvatar = styled.img`
  width: 100%;
  border-radius: var(--border-radius-xl);
  transform: scale(1);
  transition: all 0.3s;
`;

export const RespondentNameBox = styled.div`
  text-align: center;
  padding: 1.6rem 0;
  color: var(--color-gray--1);
  font-family: var(--font-sans);
`;

export const RespondentName = styled.h3`
  font-size: 20px;
  font-weight: 500;
`;
