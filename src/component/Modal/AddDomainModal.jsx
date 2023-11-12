import { Button, Divider, Form, Input } from 'antd';
import PropTypes from 'prop-types';
import { useState } from 'react';

import CModal from './Modal';
import SkillTags from '../Tags/SkillTags';
import CUpload from '../Upload/Upload';
import {
  DomainSkillBox,
  DownloadSampleFileButton,
  ImportDescription,
  ImportDomainHeading,
  ImportSection,
  StyledForm,
} from './AddDomainModalStyle';
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
    form.resetFields();
    handleAddDomainModalToggle('close');
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
        // name="form_in_add_domain_modal"
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
        <Form.Item name="skillDomains" label="Domain Skills">
          <DomainSkillBox>
            <SkillTags tags={tags} onTags={handleTags} />
          </DomainSkillBox>
        </Form.Item>
      </StyledForm>

      <Divider plain>Or</Divider>

      <ImportSection>
        <ImportDomainHeading>Import Domains</ImportDomainHeading>
        <ImportDescription>
          Download a{' '}
          <DownloadSampleFileButton type="link">
            sample CSV template
          </DownloadSampleFileButton>{' '}
          to see an example of the format required
        </ImportDescription>
        <CUpload />
      </ImportSection>
    </CModal>
  );
};

AddDomainModal.propTypes = {
  handleAddDomain: PropTypes.func,
};

export default AddDomainModal;
