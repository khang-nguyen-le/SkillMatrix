import { useEffect } from 'react';

import SurveyFormItem from './SurveyFormItem';
import { useAppState } from '../../context/appContext';
import { StyledList } from './AssignedSurveyListStyle';

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
          id={item.id.toString()}
        />
      )}
    />
  );
};

export default AssinedSurveyList;
