import { Tabs } from 'antd';
import styled from 'styled-components';
import SurveyFormHeader from './SurveyFormHeader';
import { useAppState } from '../../context/appContext';
import { useEffect, useState } from 'react';
import AssinedSurveyList from './AssignedSurveyList';
import CreatedSurveyList from './CreatedSurveyList';
import Domain from '../Domain/Domain';

const items = [
  {
    key: '1',
    label: 'Assigned',
    children: <AssinedSurveyList />,
  },
  {
    key: '2',
    label: 'Created',
    children: <CreatedSurveyList />,
  },
  {
    key: '3',
    label: 'Draft',
    children: <CreatedSurveyList />,
  },
  {
    key: '4',
    label: 'Domain',
    children: <Domain />,
  },
];

const SurveyFormTabs = () => {
  const { currentTab, handleSetCurrentTab } = useAppState();
  const [title, setTitle] = useState('');

  useEffect(() => {
    switch (currentTab) {
      case '1': {
        return setTitle('Assigned Forms');
      }
      case '2': {
        return setTitle('Created Forms');
      }
      case '3': {
        return setTitle('Draft Forms');
      }
      case '4': {
        return setTitle('Domains');
      }
    }
  }, [currentTab]);

  return (
    <>
      <SurveyFormHeader title={title} />
      <SurveyFormBodyWrapper>
        <StyledTabs
          type="card"
          items={items}
          tabBarGutter={4}
          onChange={(e) => {
            handleSetCurrentTab(e);
          }}
          activeKey={currentTab}
        />
      </SurveyFormBodyWrapper>
    </>
  );
};

const StyledTabs = styled(Tabs)`
  &.ant-tabs .ant-tabs-tab {
    color: var(--color-gray--1);
    font-weight: 500;
  }

  &.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab {
    background-color: var(--color-primary--6);
  }

  &.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab:hover {
    background-color: var(--color-primary--5);
  }

  &.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab-active,
  &.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab-active:hover {
    background-color: var(--color-gray--1);
  }

  &.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab {
    border: none;
  }

  &.ant-tabs-top > .ant-tabs-nav {
    margin: 0;
  }

  &.ant-tabs-top > .ant-tabs-nav::before {
    border-bottom: none;
  }

  &.ant-tabs .ant-tabs-content-holder {
    background-color: #fff;
    border-radius: var(--border-radius-md);
    border-top-left-radius: 0;
    padding: 1.6rem;
  }
`;

const SurveyFormBodyWrapper = styled.section`
  padding: 2.4rem 0 4.8rem;
`;

export default SurveyFormTabs;
