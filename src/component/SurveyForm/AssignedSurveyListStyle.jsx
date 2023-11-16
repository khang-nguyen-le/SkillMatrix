import { List } from 'antd';
import styled from 'styled-components';

export const StyledList = styled(List)`
  &.ant-list .ant-list-item .ant-list-item-meta .ant-list-item-meta-title > a {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }

  &.ant-list
    .ant-list-item
    .ant-list-item-meta
    .ant-list-item-meta-description {
    font-family: 'Roboto', sans-serif;
  }

  &.ant-list-split .ant-list-item {
    border-bottom: 1px solid #d9d9d9ff;
  }
`;
