import { Input } from 'antd';
import styled from 'styled-components';

export const DomainActionsBox = styled.div`
  display: flex;
  gap: 1.2rem;
  padding: 1.2rem;
  border-radius: var(--border-radius-xl);
  border: 1px solid var(--color-gray--5);
  background-color: #fff;
  box-shadow: var(--shadow-md);
  margin-bottom: 2rem;
`;

export const SearchBox = styled(Input)`
  & .anticon.anticon-search {
    color: var(--color-gray--7);
  }
`;

export const DomainList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
