import PropTypes from 'prop-types';

import { useDomains } from '../../context/domainContext';
import SkillDomainItem from '../Domain/SkillDomainItem';
import { useEffect, useState } from 'react';
import {
  BasicInfoBox,
  CollapseList,
  FormDesc,
  FormDuration,
  FormDurationBox,
  FormNoDesc,
  FormTitle,
  InfoWrapper,
} from './SurveyFormQuestionsStyle';

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

export default SurveyFormQuestions;
