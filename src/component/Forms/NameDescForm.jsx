import { useNavigate } from 'react-router-dom';
import { Form } from 'antd';

import { useAppState } from '../../context/appContext';
import { DefaultButton } from '../Button/Button';
import { useEffect } from 'react';
import { FormItem, StyledInput, StyledTextArea } from './NameDescFormStyle';

const NameDescForm = () => {
  const { handleAddForm, handleNextStep, formInfo } = useAppState();
  const navigate = useNavigate();

  const [form] = Form.useForm();
  const { setFieldsValue } = form;

  const handleSubmit = (data) => {
    handleAddForm(data);
    handleNextStep();
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
        name="formName"
        rules={[{ required: true, message: 'Please enter a form name' }]}
      >
        <StyledInput size="large" />
      </FormItem>

      <FormItem label="Description" name="description">
        <StyledTextArea rows={6} style={{ resize: 'none' }} />
      </FormItem>
      <div style={{ textAlign: 'right' }}>
        <DefaultButton htmlType="submit">Next &rarr;</DefaultButton>
      </div>
    </Form>
  );
};

export default NameDescForm;
