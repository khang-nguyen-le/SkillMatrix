import { useNavigate } from 'react-router-dom';

import SurveyFormItem from './SurveyFormItem';
import { StyledList } from './CreatedSurveyListStyle';

import CEmpty from '../Empty/Empty';
import CSpinner from '../Spinner/Spinner';
import { useCreatedFormState } from '../../context/createdFormContext';

const CreatedSurveyList = () => {
  const { createdForms, isLoading } = useCreatedFormState();
  const navigate = useNavigate();

  const handleEmptyAction = () => {
    navigate('/forms/create/info');
  };

  if (isLoading) return <CSpinner />;

  if (createdForms.length === 0)
    return (
      <CEmpty
        onDescription="Make it easier to collect data by creating your first survey form."
        onActionText="Create New"
        onAction={handleEmptyAction}
      />
    );

  return (
    <StyledList
      itemLayout="horizontal"
      dataSource={createdForms}
      pagination={{ hideOnSinglePage: true, pageSize: 10 }}
      renderItem={(item) => (
        <SurveyFormItem
          formName={item.formName}
          date={item.createdAt}
          owner={item.owner}
          id={item.id}
        />
      )}
    />
  );
};

export default CreatedSurveyList;
