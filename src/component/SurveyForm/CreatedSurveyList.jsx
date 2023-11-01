import { useEffect, useState } from 'react';

import SurveyFormItem from './SurveyFormItem';
import { StyledList } from './CreatedSurveyListStyle';
import { useNavigate } from 'react-router-dom';

import CEmpty from '../Empty/Empty';
import CSpinner from '../Spinner/Spinner';
import { surveyFormApi } from '../../api/surveyForm';

const CreatedSurveyList = () => {
  const [createdForms, setCreatedForms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchForms = async () => {
      try {
        setIsLoading(true);
        const res = await surveyFormApi.fetchForms();

        setCreatedForms(res.data);
      } catch (err) {
        alert('There was an error fetching created forms');
      } finally {
        setIsLoading(false);
      }
    };
    fetchForms();
  }, []);

  const handleEmptyAction = () => {
    navigate('/forms/create/info');
  };

  if (isLoading) return <CSpinner />;

  if (createdForms.length === 0)
    return (
      <CEmpty
        onDescription="Make it easier to collect data by creating your first survey form."
        onActionText={'Create New'}
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
        />
      )}
    />
  );
};

export default CreatedSurveyList;
