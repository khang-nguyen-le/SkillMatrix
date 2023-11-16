import { Tabs } from 'antd';
import styled from 'styled-components';

export const Box = styled.div`
  background-color: #fff;
  padding: 1.2rem;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  margin-top: -32px;
  margin-bottom: 2.4rem;
`;

export const StyledTabs = styled(Tabs)`
  &.ant-tabs {
    font-family: var(--font-sans);
  }

  &.ant-tabs-top > .ant-tabs-nav {
    margin: 0;
  }

  &.ant-tabs-top > .ant-tabs-nav::before,
  &.ant-tabs-bottom > .ant-tabs-nav::before,
  &.ant-tabs-top > div > .ant-tabs-nav::before,
  &.ant-tabs-bottom > div > .ant-tabs-nav::before {
    border-bottom: 0;
  }

  &.ant-tabs-large > .ant-tabs-nav .ant-tabs-tab {
    padding: 5px 0;
  }

  &.ant-tabs-top > .ant-tabs-nav .ant-tabs-ink-bar {
    height: 3px;
    border-top-left-radius: 1000px;
    border-top-right-radius: 1000px;
  }
`;
