import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PageLayout from '../component/Layout/PageLayout';
import { surveyFormApi } from '../api/surveyForm';
import SpinnerFullPage from '../component/Spinner/SpinnerFullPage';
import SurveyFormQuestions from '../component/SurveyForm/SurveyFormQuestions';
import RespondentsTable from '../component/Table/RespondentsTable';
import { Box, StyledTabs } from './CreatedFormPageStyle';

const CreatedFormPage = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [surveyForm, setSurveyForm] = useState();
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState('');
  const [keyTab, setKeyTab] = useState('1');

  const items = [
    {
      label: 'Questions',
      key: '1',
    },
    {
      label: 'Responses',
      key: '2',
    },
  ];

  useEffect(() => {
    const getSurveyForm = async (id) => {
      try {
        setIsLoading(true);
        setError('');
        const res = await surveyFormApi.getFormById(id);

        setSurveyForm(res.data);
      } catch (err) {
        if (err.code === 'ERR_NETWORK') {
          setError('Something went wrong with fetching the survey form');
        }
      } finally {
        setIsLoading(false);
      }
    };

    getSurveyForm(id);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChangeTabs = (key) => {
    setKeyTab(key);
  };

  if (isLoading) return <SpinnerFullPage />;

  return (
    <PageLayout pageTitle={surveyForm?.formName}>
      <Box>
        <StyledTabs
          defaultActiveKey="1"
          centered
          items={items}
          size="large"
          onChange={(e) => {
            handleChangeTabs(e);
          }}
        />
      </Box>
      {keyTab === '1' ? (
        <SurveyFormQuestions surveyForm={surveyForm} />
      ) : (
        <RespondentsTable formId={id} />
      )}
    </PageLayout>
  );
};

export default CreatedFormPage;
