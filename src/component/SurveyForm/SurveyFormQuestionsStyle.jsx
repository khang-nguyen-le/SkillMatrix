import styled from 'styled-components';

export const InfoWrapper = styled.div`
  background-color: var(--color-primary--5);
  margin-top: 1rem;
  padding: 2rem;
  border-radius: var(--border-radius-lg);
`;

export const BasicInfoBox = styled.div`
  font-family: var(--font-sans);
  background-color: #fff;
  padding: 1rem 2rem;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  margin-bottom: 2.4rem;
  font-size: 1.6rem;
`;

export const FormTitle = styled.h2`
  color: var(--color-gray--10);
  font-size: 2.4rem;
  font-weight: 500;
`;

export const FormDurationBox = styled.p`
  color: var(--color-gray--8);
`;

export const FormDuration = styled.span`
  font-weight: 600;
`;

export const FormNoDesc = styled.p`
  font-weight: 300;
  color: var(--color-gray--6);
  margin-top: 1.2rem;
`;

export const CollapseList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 1.2rem;
`;

export const FormDesc = styled.p`
  color: var(--color-gray--8);
  margin-top: 12px;
`;
