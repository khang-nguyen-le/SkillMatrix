import { Tabs } from 'antd';
import styled from 'styled-components';
import { Outlet, useNavigate } from 'react-router-dom';
import SurveyFormHeader from './SurveyFormHeader';
import { useEffect, useState } from 'react';

const items = [
  {
    key: '1',
    label: 'Assigned',
    children: <Outlet />,
  },
  {
    key: '2',
    label: 'Created',
    children: <Outlet />,
  },
  {
    key: '3',
    label: 'Draft',
    children: <Outlet />,
  },
  {
    key: '4',
    label: 'Domain',
    children: <Outlet />,
  },
];

const SurveyFormTabs = () => {
  const [key, setKey] = useState('');
  const navigate = useNavigate();

  const handleChangeTab = (key) => {
    setKey(key);

    switch (key) {
      case '1': {
        navigate('/forms/assigned');
        return;
      }
      case '2': {
        return navigate('/forms/created');
      }
      case '3': {
        return navigate('/forms/drafts');
      }
      case '4': {
        return navigate('/forms/domains');
      }
    }
  };

  const handleChangeHeader = (key) => {
    switch (key) {
      case '1': {
        return <SurveyFormHeader title="Assigned Forms" />;
      }
      case '2': {
        return <SurveyFormHeader title="Created Forms" />;
      }
      case '3': {
        return <SurveyFormHeader title="Draft Forms" />;
      }
      case '4': {
        return <SurveyFormHeader title="Domains" />;
      }
    }
  };

  useEffect(() => {
    if (!key) return navigate('/forms/assigned');
  }, [key, navigate]);

  return (
    <>
      {handleChangeHeader(key)}
      <SurveyFormBodyWrapper>
        <StyledTabs
          type="card"
          items={items}
          tabBarGutter={4}
          onChange={handleChangeTab}
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
