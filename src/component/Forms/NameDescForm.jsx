import { useNavigate } from 'react-router-dom';
import { Form, Input } from 'antd';
import styled from 'styled-components';

import { useAppState } from '../../context/appContext';
import { DefaultButton } from '../Button/Button';
import { useEffect } from 'react';

const NameDescForm = () => {
  const { onAddForm, onNextStep, formInfo } = useAppState();
  const navigate = useNavigate();

  const [form] = Form.useForm();
  const { setFieldsValue } = form;

  const handleSubmit = (data) => {
    onAddForm(data);
    onNextStep();
    navigate('/forms/create/details');
  };

  useEffect(() => {
    setFieldsValue({
      name: formInfo.name,
      description: formInfo.description,
    });
  }, [formInfo.name, formInfo.description, setFieldsValue]);

  return (
    <Form
      requiredMark={false}
      layout="vertical"
      onFinish={handleSubmit}
      form={form}
    >
      <FormItem
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please enter a form name' }]}
        id="name"
      >
        <StyledInput size="large" />
      </FormItem>

      <FormItem label="Description" name="description" id="description">
        <StyledTextArea rows={6} style={{ resize: 'none' }} />
      </FormItem>
      <div style={{ textAlign: 'right' }}>
        <DefaultButton htmlType="submit">Next &rarr;</DefaultButton>
      </div>
    </Form>
  );
};

const FormItem = styled(Form.Item)`
  &.ant-form-item .ant-form-item-label > label {
    font-family: var(--font-sans);
    color: #fff;
    font-size: 1.6rem;
    font-weight: 700;
  }

  &.ant-form-item .ant-form-item-explain-error {
    color: var(--color-red--7);
    font-family: var(--font-sans);
  }
`;

const StyledInput = styled(Input)`
  &:hover,
  &:focus {
    background-color: #fff;
  }

  &.ant-input-status-error:not(.ant-input-disabled):not(
      .ant-input-borderless
    ).ant-input {
    border-left-width: 5px;
  }

  &.ant-input-status-error:not(.ant-input-disabled):not(
      .ant-input-borderless
    ).ant-input:focus {
    border-color: var(--color-red--7);
    background-color: #fff;
  }
`;

const StyledTextArea = styled(Input.TextArea)`
  &:hover,
  &:focus {
    background-color: #fff;
  }
`;

export default NameDescForm;
