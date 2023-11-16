import { Button, Form, Input } from 'antd';
import { faker } from '@faker-js/faker';

import CModal from './Modal';
import { DomainSkillBox, StyledForm } from './AddDomainModalStyle';
import SkillTags from '../Tags/SkillTags';
import { useEffect, useState } from 'react';
import { useDomains } from '../../context/domainContext';

const UpdateDomainModal = () => {
  const [tags, setTags] = useState([]);
  const [skillDomainsTags, setSkillDomainsTags] = useState([]);

  const {
    isUpdateDomainModalOpen,
    handleUpdateDomainModalToggle,
    isDomainLoading,
    domain,
    handleUpdateDomain,
  } = useDomains();

  const { domainName, skillDomains, id } = domain;

  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      domainName,
    });

    if (!skillDomains) return setTags([]);

    const skillDomainsTags = skillDomains.map(
      (skillDomain) => skillDomain.skillDomainName,
    );

    setSkillDomainsTags(skillDomainsTags);

    setTags(skillDomainsTags);
  }, [domainName, skillDomains, form]);

  const handleCancel = () => {
    form.resetFields();
    handleUpdateDomainModalToggle('close');
    setTags([]);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        const unchangedSkillDomains = skillDomains.filter((skillDomain) =>
          tags.includes(skillDomain.skillDomainName),
        );

        const newSkillDomainsTags = tags.filter(
          (tag) => !skillDomainsTags.includes(tag),
        );

        const newSkillDomains = newSkillDomainsTags.map((tag) => ({
          skillDomainName: tag,
          id: faker.string.uuid(),
        }));

        const newValues = {
          ...values,
          id,
          skillDomains: [...unchangedSkillDomains, ...newSkillDomains],
        };

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
          loading={isDomainLoading}
          onClick={handleOk}
        >
          Update
        </Button>,
      ]}
    >
      <StyledForm
        form={form}
        layout="vertical"
        name="form_in_update_domain_modal"
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

export default UpdateDomainModal;
