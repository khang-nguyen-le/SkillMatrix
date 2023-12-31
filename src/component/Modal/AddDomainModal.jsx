import { Button, Form, Input } from 'antd';
import PropTypes from 'prop-types';
import { useState } from 'react';

import CModal from './Modal';
import SkillTags from '../Tags/SkillTags';
import { DomainSkillBox, StyledForm } from './AddDomainModalStyle';
import { useDomains } from '../../context/domainContext';
import { faker } from '@faker-js/faker';

const AddDomainModal = () => {
  const {
    isAddDomainModalOpen,
    handleAddDomainModalToggle,
    handleAddDomain,
    isDomainLoading,
  } = useDomains();

  const [tags, setTags] = useState([]);

  const handleTags = (values) => {
    setTags(values);
  };

  const [form] = Form.useForm();

  const handleCancel = () => {
    handleAddDomainModalToggle('close');
    form.resetFields();
    setTags([]);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        const skillDomains = tags.map((skillDomain) => ({
          skillDomainName: skillDomain,
          id: faker.string.uuid(),
        }));

        const newDomain = {
          domainName: values.domainName,
          id: faker.string.uuid(),
          skillDomains,
        };

        handleAddDomain(newDomain);
        handleAddDomainModalToggle('close');

        form.resetFields();
        setTags([]);
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  return (
    <CModal
      open={isAddDomainModalOpen}
      onCancel={handleCancel}
      onOk={handleOk}
      title="Add Domain"
      okText="Add"
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={isDomainLoading}
          onClick={handleOk}
        >
          Add
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
        <Form.Item name="skillDomains" label="Skill Domains">
          <DomainSkillBox>
            <SkillTags tags={tags} onTags={handleTags} />
          </DomainSkillBox>
        </Form.Item>
      </StyledForm>
    </CModal>
  );
};

AddDomainModal.propTypes = {
  handleAddDomain: PropTypes.func,
};

export default AddDomainModal;
