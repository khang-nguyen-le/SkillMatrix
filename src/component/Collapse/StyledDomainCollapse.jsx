import { Collapse } from 'antd';
import styled from 'styled-components';

export const StyledDomainCollapse = styled(Collapse)`
  font-family: var(--font-sans);
  &.ant-collapse
    > .ant-collapse-item
    > .ant-collapse-header
    .ant-collapse-header-text {
    font-weight: 700;
    color: var(--color-gray--10);
  }

  &.ant-collapse {
    background-color: var(--color-primary--1);
    color: var(--color-gray--10);
    font-size: 1.6rem;
  }

  &.ant-collapse
    > .ant-collapse-item.ant-collapse-item-active
    > .ant-collapse-header {
    border-radius: 8px 8px 0 0;
    background-color: var(--color-primary--6);
  }

  &.ant-collapse
    > .ant-collapse-item.ant-collapse-item-active
    > .ant-collapse-header
    .ant-collapse-header-text {
    color: var(--color-gray--1);
  }

  &.ant-collapse .ant-collapse-content > .ant-collapse-content-box {
    background-color: var(--color-gray--4);
  }

  &.ant-collapse
    > .ant-collapse-item
    > .ant-collapse-header
    .ant-collapse-arrow {
    color: var(--color-gray--10);
  }

  &.ant-collapse
    > .ant-collapse-item.ant-collapse-item-active
    > .ant-collapse-header
    .ant-collapse-arrow {
    color: var(--color-gray--1);
  }

  &.ant-collapse
    > .ant-collapse-item.ant-collapse-item-active
    > .ant-collapse-header
    > .ant-collapse-extra
    span {
    color: #fff;
  }
`;
