import { Tabs } from 'antd';
import styled from 'styled-components';
import AssinedSurveyList from './AssignedSurveyList';
import CreatedSurveyList from './CreatedSurveyList';

const handleChangeTab = (id) => {
  if (id === '1') {
    return <AssinedSurveyList />;
  } else if (id === '2') {
    return <CreatedSurveyList />;
  } else if (id === '3') {
    return <CreatedSurveyList />;
  } else if (id === '4') {
    return <CreatedSurveyList />;
  }
};

const handeChangeTabLabel = (id) => {
  let label;
  switch (id) {
    case '1': {
      label = 'Assigned';
      break;
    }
    case '2': {
      label = 'Created ';
      break;
    }
    case '3': {
      label = 'Draft';
      break;
    }
    case '4': {
      label = 'Domain';
    }
  }
  return label;
};

const SurveyFormTabs = () => {
  return (
    <StyledTabs
      onChange={handleChangeTab}
      type="card"
      items={new Array(4).fill(null).map((_, i) => {
        const id = String(i + 1);
        return {
          label: handeChangeTabLabel(id),
          key: id,
          children: handleChangeTab(id),
        };
      })}
      tabBarGutter={4}
    />
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

export default SurveyFormTabs;
