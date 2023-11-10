import { Button, Form, Input } from 'antd';
import PropTypes from 'prop-types';
import { faker } from '@faker-js/faker';

import CModal from './Modal';
import styled from 'styled-components';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useQuestions } from '../../context/questionContext';

const AddQuestionsModal = () => {
  const {
    isAddQuestionsModalOpen,
    handleAddQuestionsModalToggle,
    skillDomainName,
    handleCreateQuestions,
    skillDomain,
  } = useQuestions();
  const [form] = Form.useForm();

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        const newValues = {
          ...values,
          skillDomainId: skillDomain.id,
          id: faker.string.uuid(),
        };

        handleCreateQuestions(newValues);
        form.resetFields();
        handleAddQuestionsModalToggle('close');
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  const handleCancel = () => {
    handleAddQuestionsModalToggle('close');
    form.resetFields();
  };

  return (
    <CModal
      open={isAddQuestionsModalOpen}
      onCancel={handleCancel}
      onOk={handleOk}
      title={`Add Questions to "${skillDomainName}"`}
      okText="Add"
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" loading="" onClick={handleOk}>
          Add
        </Button>,
      ]}
    >
      <StyledForm
        form={form}
        layout="vertical"
        name="form_in_add_questions_modal"
        requiredMark={false}
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

const StyledForm = styled(Form)`
  & .ant-form-item {
    margin-top: 16px;
    margin-bottom: 8px;
    width: 100%;
  }
`;

const FormItemWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
`;

AddQuestionsModal.propTypes = {
  isAddQuestionsModalOpen: PropTypes.bool,
  onOpen: PropTypes.func,
  title: PropTypes.string,
  skillDomain: PropTypes.object,
  onCreateQuestions: PropTypes.func,
};

export default AddQuestionsModal;
