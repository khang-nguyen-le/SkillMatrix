import { Form, message } from 'antd';
import { SendOutlined, SaveOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { faker } from '@faker-js/faker';

import { ActionsButton, TextButton } from '../Button/Button';
import { useAppState } from '../../context/appContext';
import {
  CollapseList,
  FormDesc,
  FormDuration,
  FormDurationBox,
  FormNoDesc,
  FormTitle,
  InfoBox,
} from './ConfirmationFormStyle';
import { domainApi } from '../../api/domain';
import { surveyFormApi } from '../../api/surveyForm';
import SkillDomainItem from '../Domain/SkillDomainItem';

const buttonItems = [
  {
    label: 'Save to Draft',
    key: '1',
    icon: <SaveOutlined />,
  },
];

const ConfirmationForm = () => {
  const navigate = useNavigate();
  const {
    formInfo,
    handlePrevStep,
    handleResetCurrentStep,
    handleResetForm,
    handleSetCurrentTab,
  } = useAppState();
  const [skillDomains, setSkillDomains] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { formName, startDate, endDate, domain, description } = formInfo;
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (Object.entries(formInfo).length === 0) return navigate('/forms');
    const getDomain = async (id) => {
      try {
        const res = await domainApi.getDomainById(id);
        setSkillDomains(res.data.skillDomains);
      } catch (err) {
        alert('There was an error getting the domain');
      }
    };

    getDomain(domain.value);
  }, [navigate, formInfo]);

  const handleBackClick = () => {
    handlePrevStep();
    navigate(-1);
  };

  const handleSubmit = () => {
    const newForm = {
      ...formInfo,
      domain: { domainName: formInfo.domain.label, id: formInfo.domain.key },
      manager: {
        managerName: formInfo.manager.label,
        id: formInfo.manager.key,
      },
      owner: 'Created by me',
      createdAt: new Date().toISOString(),
      id: faker.string.uuid(),
    };

    const createNewForm = async (newForm) => {
      try {
        setIsLoading(true);
        await surveyFormApi.createForm(newForm);
        handleMessage('success', 'You successfully created your survey form.');

        setTimeout(() => {
          navigate('/forms');
          handleResetCurrentStep();
          handleResetForm();
          handleSetCurrentTab('2');
        }, 1000);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    createNewForm(newForm);
  };

  const handleSaveDraft = () => {
    console.log('Saved draft');
  };

  const handleMessage = (type, content) => {
    messageApi.open({
      type: type,
      content: content,
    });
  };

  useEffect(() => {
    if (!domain) {
      navigate('/forms');
    }
  }, [domain, navigate]);

  const duration = (startDate, endDate) => {
    const ms1 = new Date(startDate).getTime();
    const ms2 = new Date(endDate).getTime();
    return Math.ceil((ms2 - ms1) / (24 * 60 * 60 * 1000));
  };

  return (
    <>
      {contextHolder}
      <Form name="confirmation_form">
        <InfoBox>
          <FormTitle>{formName}</FormTitle>
          <FormDurationBox>
            <FormDuration>
              {new Date(startDate).toDateString().slice(4)}
            </FormDuration>{' '}
            to{' '}
            <FormDuration>
              {new Date(endDate).toDateString().slice(4)}
            </FormDuration>
            &nbsp; {`(${duration(startDate, endDate)} days)`}
          </FormDurationBox>
          {description ? (
            <FormDesc>{description}</FormDesc>
          ) : (
            <FormNoDesc>No description</FormNoDesc>
          )}
        </InfoBox>
        <CollapseList>
          {skillDomains &&
            skillDomains.map((skillDomain) => (
              <SkillDomainItem key={skillDomain.id} skillDomain={skillDomain} />
            ))}
        </CollapseList>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'end' }}>
          <TextButton onClick={handleBackClick}>&larr; Back</TextButton>
          <ActionsButton
            menu={buttonItems}
            onSubmit={handleSubmit}
            onSaveDraft={handleSaveDraft}
            loading={isLoading}
          >
            <SendOutlined /> Submit
          </ActionsButton>
        </div>
      </Form>
    </>
  );
};

export default ConfirmationForm;
