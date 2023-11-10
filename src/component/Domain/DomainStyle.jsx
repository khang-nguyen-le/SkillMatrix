import { Collapse, Input } from 'antd';
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

export const SkillDomainList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const StyledDomainItem = styled(Collapse)`
  &.ant-collapse > .ant-collapse-item > .ant-collapse-header {
    align-items: center;
    font-family: var(--font-sans);
    border-bottom: 1px solid var(--color-gray--5);
  }

  &.ant-collapse > .ant-collapse-item:last-child,
  &.ant-collapse > .ant-collapse-item:last-child > .ant-collapse-header {
    border-radius: 0;
  }
`;

export const ActionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;
