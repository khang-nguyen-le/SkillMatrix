import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useDomains } from '../../context/domainContext';
import SkillDomainItem from '../Domain/SkillDomainItem';
import { useEffect, useState } from 'react';

const duration = (startDate, endDate) => {
  const ms1 = new Date(startDate).getTime();
  const ms2 = new Date(endDate).getTime();
  return Math.ceil((ms2 - ms1) / (24 * 60 * 60 * 1000));
};
const SurveyFormQuestions = ({ surveyForm }) => {
  const { domains } = useDomains();
  const [skillDomainList, setSkillDomainList] = useState([]);

  useEffect(() => {
    if (surveyForm) {
      const domain = domains.find((domain) =>
        surveyForm.domain.id.includes(domain.id),
      );

      const arrSkillDomains = domain.skillDomains.map((skillDomain) => (
        <SkillDomainItem key={skillDomain.id} skillDomain={skillDomain} />
      ));

      setSkillDomainList(arrSkillDomains);
    }
  }, [surveyForm, domains]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <InfoWrapper>
      <BasicInfoBox>
        <FormTitle>{surveyForm?.formName}</FormTitle>
        <FormDurationBox>
          <FormDuration>
            {new Date(surveyForm?.startDate).toDateString().slice(4)}
          </FormDuration>{' '}
          to{' '}
          <FormDuration>
            {new Date(surveyForm?.endDate).toDateString().slice(4)}
          </FormDuration>
          &nbsp;{' '}
          {`(${duration(surveyForm?.startDate, surveyForm?.endDate)} days)`}
        </FormDurationBox>
        {surveyForm?.description ? (
          <FormDesc>{surveyForm?.description}</FormDesc>
        ) : (
          <FormNoDesc>No description</FormNoDesc>
        )}
      </BasicInfoBox>

      <CollapseList>{skillDomainList}</CollapseList>
    </InfoWrapper>
  );
};

SurveyFormQuestions.propTypes = {
  surveyForm: PropTypes.object,
};

const InfoWrapper = styled.div`
  background-color: var(--color-primary--5);
  margin-top: 1rem;
  padding: 2rem;
  border-radius: var(--border-radius-lg);
`;

const BasicInfoBox = styled.div`
  font-family: var(--font-sans);
  background-color: #fff;
  padding: 1rem 2rem;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  margin-bottom: 2.4rem;
  font-size: 1.6rem;
`;

const FormTitle = styled.h2`
  color: var(--color-gray--10);
  font-size: 2.4rem;
  font-weight: 500;
`;

const FormDurationBox = styled.p`
  color: var(--color-gray--8);
`;

const FormDuration = styled.span`
  font-weight: 600;
`;

const FormNoDesc = styled.p`
  font-weight: 300;
  color: var(--color-gray--6);
  margin-top: 1.2rem;
`;

const CollapseList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 1.2rem;
`;

const FormDesc = styled.p`
  color: var(--color-gray--8);
  margin-top: 12px;
`;

export default SurveyFormQuestions;
