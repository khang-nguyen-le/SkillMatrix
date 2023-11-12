import { List } from 'antd';
import styled from 'styled-components';
import SurveyFormItem from './SurveyFormItem';
import { useEffect } from 'react';
import { useAppState } from '../../context/appContext';

const data = Array.from({
  length: 23,
}).map((_, i) => ({
  id: i + 1,
  formName: `Form Name ${i + 1}`,
  date: '2023-10-17T15:59:59.138Z',
  owner: 'Kento Momota',
}));

const AssinedSurveyList = () => {
  const { handleSetCurrentTab } = useAppState();

  useEffect(() => {
    handleSetCurrentTab('1');
  }, []);

  return (
    <StyledList
      dataSource={data}
      itemLayout="horizontal"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 5,
      }}
      renderItem={(item) => (
        <SurveyFormItem
          formName={item.formName}
          date={item.date}
          id={item.id}
        />
      )}
    />
  );
};

const StyledList = styled(List)`
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

export default AssinedSurveyList;
