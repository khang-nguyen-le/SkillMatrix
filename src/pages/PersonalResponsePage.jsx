import { Col, Row } from 'antd';
import styled from 'styled-components';
import { EditOutlined, ArrowLeftOutlined } from '@ant-design/icons';

import { PrimaryButton, TextButton } from '../component/Button/Button';
import RespondentCard from '../component/User/RespondentCard';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { responseApi } from '../api/response';
import { surveyFormApi } from '../api/surveyForm';
import { respondentApi } from '../api/respondent';
import SpinnerFullPage from '../component/Spinner/SpinnerFullPage';
import CollectedSkillDomain from '../component/Responses/CollectedSkillDomain';

const PersonalResponsePage = () => {
  const { id } = useParams();

  const [response, setResponse] = useState(null);
  const [respondent, setRespondent] = useState({});
  const [surveyForm, setSurveyForm] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getInfo = async (id) => {
      const getRespondent = respondentApi.getRespondentById(id);
      const getResponse = responseApi.getResponseByRespondentId(id);

      try {
        setIsLoading(true);
        const res = await Promise.all([getRespondent, getResponse]);

        setRespondent(res[0].data);
        setResponse(res[1].data.at(0));
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    getInfo(id);
  }, [id]);

  useEffect(() => {
    const getSurveyForm = async (formId) => {
      try {
        const res = await surveyFormApi.getFormById(formId);

        setSurveyForm(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getSurveyForm(response?.formId);
  }, [response]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClickBack = () => {
    navigate(-1);
  };

  if (isLoading) return <SpinnerFullPage />;

  return (
    <PageWrapper>
      <PageTitleWrapper>
        <Container>
          <PageTitleContent>
            <TitleBox>
              <TextButton
                icon={<ArrowLeftOutlined style={{ fontSize: '24px' }} />}
                onClick={handleClickBack}
              />
              <PageTitle>{surveyForm.formName}</PageTitle>
            </TitleBox>

            <PrimaryButton size="large" icon={<EditOutlined />}>
              Edit
            </PrimaryButton>
          </PageTitleContent>
        </Container>
      </PageTitleWrapper>
      <Main>
        <Container>
          <Wrapper>
            <Row gutter={16}>
              <Col span={4}>
                <RespondentCard
                  src={respondent.avatar}
                  respondentName={respondent.respondentName}
                />
              </Col>
              <Col span={20}>
                <CollectedSkillDomainList>
                  {response &&
                    response.skillDomains.map((skillDomain) => (
                      <li key={skillDomain.id}>
                        <CollectedSkillDomain
                          skillDomainName={skillDomain.skillDomainName}
                          questions={skillDomain.questions}
                        />
                      </li>
                    ))}
                </CollectedSkillDomainList>
              </Col>
            </Row>
          </Wrapper>
        </Container>
      </Main>
    </PageWrapper>
  );
};

const PageWrapper = styled.main`
  background-color: var(--color-primary--5);
`;

const PageTitleWrapper = styled.section`
  padding: 1.6rem;
`;

const PageTitleContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  max-width: 114rem;
  margin: 0 auto;
`;

const PageTitle = styled.h2`
  color: var(--color-gray--1);
  font-size: 28px;
  text-transform: capitalize;
`;

const Main = styled.section`
  background-color: #fff;
  height: 100vh;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const Wrapper = styled.div`
  padding: 3.2rem 0;
`;

const CollectedSkillDomainList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default PersonalResponsePage;
