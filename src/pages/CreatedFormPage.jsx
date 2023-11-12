import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tabs } from 'antd';
import styled from 'styled-components';

import PageLayout from '../component/Layout/PageLayout';
import { surveyFormApi } from '../api/surveyForm';
import SpinnerFullPage from '../component/Spinner/SpinnerFullPage';
import SurveyFormQuestions from '../component/SurveyForm/SurveyFormQuestions';

import RespondentsTable from '../component/Table/RespondentsTable';

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

const Box = styled.div`
  background-color: #fff;
  padding: 1.2rem;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  margin-top: -32px;
  margin-bottom: 2.4rem;
`;

const StyledTabs = styled(Tabs)`
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

export default CreatedFormPage;
