import { Button, Dropdown, Input } from 'antd';
import styled from 'styled-components';

export const SectionHeadBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-gray--1);
  padding: 0.8rem 1.6rem;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
`;

export const SectionTitle = styled.p`
  text-transform: uppercase;
  font-size: 2rem;
  letter-spacing: 0.3px;
  font-weight: 500;
  color: var(--color-gray--10);
`;

export const SectionActionMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const SearchBox = styled(Input)`
  & .anticon.anticon-search {
    color: var(--color-gray--7);
  }
`;

export const SearchDomainBox = styled(Input)`
  & .anticon.anticon-search {
    color: var(--color-gray--7);
  }
`;

export const SortButton = styled(Button)`
  &.ant-btn {
    border: none;
    box-shadow: none;
    font-size: 2rem;
    padding: 0 15px;
  }
`;

export const FilterByTime = styled(Dropdown)``;
