import PropTypes from 'prop-types';

import QuestionsTable from '../Table/QuestionsTable';
import { useEffect, useState } from 'react';
import {
  Label,
  StyledAverage,
  StyledRadio,
  StyledSkillDomainCollapse,
} from './CollectedSkillDomainStyle';

const CollectedSkillDomain = ({ skillDomainName, questions }) => {
  const [skillDomainAverage, setSkillDomainAverage] = useState(0);

  useEffect(() => {
    const proficiencyLevels = questions.map(
      (question) => question.proficiencyLevel,
    );
    const sumProficiencyLevels = proficiencyLevels.reduce((acc, cur) => {
      return acc + cur;
    }, 0);

    const aveProficiencyLevels =
      sumProficiencyLevels / proficiencyLevels.length;

    setSkillDomainAverage(aveProficiencyLevels);
  }, [questions]);

  const data = questions.map((question, i) => ({
    key: i + 1,
    question: question.question,
    proficiency0: (
      <Label>
        <StyledRadio
          type="radio"
          name={question.question}
          value="1"
          disabled
          checked={question.proficiencyLevel === 0 ? true : false}
        />
      </Label>
    ),
    proficiency1: (
      <Label>
        <StyledRadio
          type="radio"
          name={question.question}
          value="2"
          disabled
          checked={question.proficiencyLevel === 1 ? true : false}
        />
      </Label>
    ),
    proficiency2: (
      <Label>
        <StyledRadio
          type="radio"
          name={question.question}
          value="3"
          disabled
          checked={question.proficiencyLevel === 2 ? true : false}
        />
      </Label>
    ),
    proficiency3: (
      <Label>
        <StyledRadio
          type="radio"
          name={question.question}
          value="4"
          disabled
          checked={question.proficiencyLevel === 3 ? true : false}
        />
      </Label>
    ),
    proficiency4: (
      <Label>
        <StyledRadio
          type="radio"
          name={question.question}
          value="5"
          disabled
          checked={question.proficiencyLevel === 4 ? true : false}
        />
      </Label>
    ),
    proficiency5: (
      <Label>
        <StyledRadio
          type="radio"
          name={question.question}
          value="HTML"
          disabled
          checked={question.proficiencyLevel === 5 ? true : false}
        />
      </Label>
    ),
  }));

  const skillDomainItem = [
    {
      key: '1',
      label: (
        <p>
          {skillDomainName}{' '}
          <StyledAverage>({skillDomainAverage})</StyledAverage>
        </p>
      ),
      children: <QuestionsTable columns={columns} dataSource={data} />,
    },
  ];

  return <StyledSkillDomainCollapse items={skillDomainItem} />;
};

const columns = [
  {
    title: '',
    dataIndex: 'question',
    key: 'question',
    width: 350,
    ellipsis: true,
  },
  {
    title: '0',
    dataIndex: 'proficiency0',
    key: 'proficiency0',
    align: 'center',
  },
  {
    title: '1',
    dataIndex: 'proficiency1',
    key: 'proficiency1',
    align: 'center',
  },
  {
    title: '2',
    dataIndex: 'proficiency2',
    key: 'proficiency2',
    align: 'center',
  },
  {
    title: '3',
    dataIndex: 'proficiency3',
    key: 'proficiency3',
    align: 'center',
  },
  {
    title: '4',
    dataIndex: 'proficiency4',
    key: 'proficiency4',
    align: 'center',
  },
  {
    title: '5',
    dataIndex: 'proficiency5',
    key: 'proficiency5',
    align: 'center',
  },
];

CollectedSkillDomain.propTypes = {
  skillDomainName: PropTypes.string,
  questions: PropTypes.array,
};

export default CollectedSkillDomain;
