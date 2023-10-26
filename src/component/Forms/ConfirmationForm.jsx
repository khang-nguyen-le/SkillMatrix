import { Form, message } from 'antd';
import { SendOutlined, SaveOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { ActionsButton, TextButton } from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { useAppState } from '../../context/appContext';
import { useEffect } from 'react';
import CCollapse from '../Collapse/Collapse';
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
];

const buttonItems = [
  {
    label: 'Save to Draft',
    key: '1',
    icon: <SaveOutlined />,
  },
];

const ConfirmationForm = () => {
  const navigate = useNavigate();
  const { formInfo, handlePrevStep, setCurrentStep, setFormInfo } =
    useAppState();
  const { name, startDate, endDate, domain, description } = formInfo;
  const [messageApi, contextHolder] = message.useMessage();

  const handleBackClick = () => {
    handlePrevStep();
    navigate(-1);
  };

  const handleSubmit = () => {
    handleMessage('success', 'You successfully created your survey form.');
    setTimeout(() => {
      navigate('/forms');
      setCurrentStep(0);
      setFormInfo({});
    }, 2000);
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

  const daysRemaining = (startDate, endDate) => {
    const ms1 = new Date(startDate).getTime();
    const ms2 = new Date(endDate).getTime();
    return Math.ceil((ms2 - ms1) / (24 * 60 * 60 * 1000));
  };

  return (
    <>
      {contextHolder}
      <Form>
        <InfoBox>
          <FormTitle>{name}</FormTitle>
          <FormDurationBox>
            <FormDuration>
              {new Date(startDate).toDateString().slice(4)}
            </FormDuration>{' '}
            to{' '}
            <FormDuration>
              {new Date(endDate).toDateString().slice(4)}
            </FormDuration>
            &nbsp; {`(${daysRemaining(startDate, endDate)} days)`}
          </FormDurationBox>
          {description ? (
            <FormDesc>{description}</FormDesc>
          ) : (
            <FormNoDesc>No description</FormNoDesc>
          )}
        </InfoBox>
        <CollapseList>
          <CCollapse items={items} expandIconPosition="end" />
        </CollapseList>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'end' }}>
          <TextButton onClick={handleBackClick}>&larr; Back</TextButton>
          <ActionsButton
            menu={buttonItems}
            onSubmit={handleSubmit}
            onSaveDraft={handleSaveDraft}
          >
            <SendOutlined /> Submit
          </ActionsButton>
        </div>
      </Form>
    </>
  );
};

const InfoBox = styled.div`
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

const FormDesc = styled.p`
  color: var(--color-gray--8);
  margin-top: 12px;
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

export default ConfirmationForm;
