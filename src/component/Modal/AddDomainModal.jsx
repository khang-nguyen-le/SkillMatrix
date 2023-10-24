import { Divider, Form, Input } from 'antd';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { useAppState } from '../../context/appContext';
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
} from './StyledAddDomainModal';

const AddDomainModal = () => {
  const { isAddDomainModalOpen, onAddDomainModalCancel, onAddDomain } =
    useAppState();
  const [tags, setTags] = useState([]);

  const handleTags = (values) => {
    setTags(values);
  };

  const [form] = Form.useForm();

  const onCancel = () => {
    form.resetFields();
    onAddDomainModalCancel();
    setTags([]);
  };

  const onOk = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        const newValues = { ...values, domainSkill: tags };
        onAddDomain(newValues);
        setTags([]);
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  return (
    <CModal
      open={isAddDomainModalOpen}
      onCancel={onCancel}
      onOk={onOk}
      title="Add Domain"
      okText="Add"
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
        <Form.Item name="domainSkill" label="Domain Skill">
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
  onAddDomain: PropTypes.func,
};

export default AddDomainModal;
