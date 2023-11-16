import { useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import CModal from './Modal';
import { useQuestions } from '../../context/questionContext';
import { FormItemWrapper, StyledForm } from './UpdateQuestionsModalStyle';

const UpdateQuestionsModal = () => {
  const {
    isUpdateQuestionsModalOpen,
    questionsById,
    handleUpdateQuestions,
    skillDomainName,
    handleUpdateQuestionsModalToggle,
  } = useQuestions();
  const [form] = Form.useForm();

  useEffect(() => {
    if (questionsById.length === 0) return;
    form.setFieldsValue({
      questions: questionsById.at(0).questions,
    });
  }, [form, questionsById]);

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        const newValue = { ...values, id: questionsById.at(0).id };

        handleUpdateQuestions(newValue);
        form.resetFields();
        handleUpdateQuestionsModalToggle('close');
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  const handleCancel = () => {
    handleUpdateQuestionsModalToggle('close');
  };

  return (
    <CModal
      open={isUpdateQuestionsModalOpen}
      onCancel={handleCancel}
      onOk={handleOk}
      title={`Update Questions to "${skillDomainName}"`}
      okText="Add"
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" loading="" onClick={handleOk}>
          Update
        </Button>,
      ]}
    >
      <StyledForm
        form={form}
        layout="vertical"
        name="form_in_update_questions_modal"
        requiredMark={false}
        autoComplete="off"
      >
        <Form.List name="questions">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <FormItemWrapper key={key}>
                  <Form.Item
                    {...restField}
                    name={[name, `question`]}
                    rules={[
                      {
                        required: true,
                        message: 'Missing question',
                      },
                    ]}
                  >
                    <Input placeholder={`Question ${name + 1}`} size="large" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </FormItemWrapper>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                  size="large"
                >
                  Add question
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </StyledForm>
    </CModal>
  );
};

export default UpdateQuestionsModal;
