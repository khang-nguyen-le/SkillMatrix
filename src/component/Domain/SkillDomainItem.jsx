import PropTypes from 'prop-types';

import {
  StyledSkillDomainCollapse,
  TableWrapper,
} from './SkillDomainItemStyle';
import { useEffect, useState } from 'react';
import { Radio } from 'antd';
import QuestionsTable from '../Table/QuestionsTable';
import CEmpty from '../Empty/Empty';
import { useQuestions } from '../../context/questionContext';
import { questionApi } from '../../api/question';

const SkillDomainItem = ({ skillDomain }) => {
  const [data, setData] = useState([]);
  const [questions, setQuestions] = useState([]);

  const {
    handleAddQuestionsModalToggle,
    handleUpdateQuestionsModalToggle,
    handleSetSkillDomainName,
    handleSetSkillDomain,
    handleSetQuestionsById,
    questionsById,
  } = useQuestions();

  useEffect(() => {
    const getQuestionsBySkillDomainId = async (skillDomainId) => {
      try {
        const res = await questionApi.getQuestionsById(skillDomainId);

        setQuestions(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getQuestionsBySkillDomainId(skillDomain.id);
  }, [skillDomain.id, questionsById]);

  useEffect(() => {
    if (questions.length !== 0) {
      const tBodyQuestions = questions[0].questions.map((question, i) => ({
        key: i + 1,
        question: question.question,
        proficiency0: <Radio />,
        proficiency1: <Radio />,
        proficiency2: <Radio />,
        proficiency3: <Radio />,
        proficiency4: <Radio />,
        proficiency5: <Radio />,
      }));

      setData(tBodyQuestions);
    }
  }, [questions]);

  const skillDomainItems = [
    {
      key: skillDomain.id,
      label: skillDomain.skillDomainName,
      children:
        questions.length === 0 || !questions ? (
          <CEmpty
            onDescription="Make it faster to create survey forms by adding your questions."
            onActionText="Add new"
            onAction={() => {
              handleAddQuestionsModalToggle('open');
              handleSetSkillDomainName(skillDomain.skillDomainName);
              handleSetSkillDomain(skillDomain);
            }}
          />
        ) : (
          <TableWrapper
            onClick={() => {
              handleUpdateQuestionsModalToggle('open');
              handleSetSkillDomainName(skillDomain.skillDomainName);
              handleSetQuestionsById(questions);
            }}
          >
            <QuestionsTable columns={columns} dataSource={data} />
          </TableWrapper>
        ),
    },
  ];

  return (
    <>
      <StyledSkillDomainCollapse items={skillDomainItems} />
    </>
  );
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

SkillDomainItem.propTypes = {
  items: PropTypes.array,
  expandIconPosition: PropTypes.string,
  skillDomain: PropTypes.object,
  deleteSkillDomain: PropTypes.bool,
};

export default SkillDomainItem;
