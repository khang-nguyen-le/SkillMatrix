import { Button, Form, Input } from 'antd';
import CModal from './Modal';
import { DomainSkillBox, StyledForm } from './AddDomainModalStyle';
import SkillTags from '../Tags/SkillTags';
import { useAppState } from '../../context/appContext';
import { useEffect, useState } from 'react';

const UpdateDomainModal = () => {
  const [tags, setTags] = useState([]);
  const {
    isUpdateDomainModalOpen,
    handleUpdateDomainModalToggle,
    isLoading,
    domain,
    handleUpdateDomain,
  } = useAppState();

  const { domainName, domainSkills, id } = domain;

  const [form] = Form.useForm();
  const { setFieldsValue } = form;

  useEffect(() => {
    if (!domainSkills) return setTags([]);

    setFieldsValue({
      domainName,
    });
    setTags(domainSkills);
  }, [domainName, setFieldsValue, domainSkills]);

  const handleCancel = () => {
    form.resetFields();
    handleUpdateDomainModalToggle('close');
    setTags([]);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        const newValues = { ...values, id, domainSkills: tags };
        handleUpdateDomain(newValues);

        handleUpdateDomainModalToggle('close');
        form.resetFields();
        setTags([]);
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  const handleTags = (values) => {
    setTags(values);
  };

  return (
    <CModal
      open={isUpdateDomainModalOpen}
      onCancel={handleCancel}
      onOk={handleOk}
      title="Update Domain"
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={isLoading}
          onClick={handleOk}
        >
          Update
        </Button>,
      ]}
    >
      <StyledForm
        form={form}
        layout="vertical"
        name="form_in_add_domain_modal"
        requiredMark={false}
      >
        <Form.Item
          name="domainName"
          label="Domain Name"
          rules={[
            {
              required: true,
              message: 'Please enter the name of domain!',
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item name="domainSkills" label="Domain Skills">
          <DomainSkillBox>
            <SkillTags tags={tags} onTags={handleTags} />
          </DomainSkillBox>
        </Form.Item>
      </StyledForm>
    </CModal>
  );
};

export default UpdateDomainModal;
