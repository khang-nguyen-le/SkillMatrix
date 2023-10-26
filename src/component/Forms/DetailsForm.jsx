import { DatePicker, Form, Select } from 'antd';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { useAppState } from '../../context/appContext';
import { DefaultButton, TextButton } from '../Button/Button';
import { useEffect } from 'react';
import dayjs from 'dayjs';

const managers = [
  {
    value: 'jack',
    label: 'Jack',
  },
  {
    value: 'lucy',
    label: 'Lucy',
  },
  {
    value: 'Yiminghe',
    label: 'yiminghe',
  },
];

const teams = [
  {
    value: 'DC1',
    label: 'DC1',
  },
  {
    value: 'DC2',
    label: 'DC2',
  },
  {
    value: 'DC3',
    label: 'DC3',
  },
];
const members = [
  {
    value: 'Luffy',
    label: 'Luffy',
  },
  {
    value: 'Zoro',
    label: 'Zoro',
  },
  {
    value: 'Shanji',
    label: 'Shanji',
  },
];
const domains = [
  {
    value: 'domain1',
    label: 'Domain 1',
  },
  {
    value: 'domain2',
    label: 'Domain 2',
  },
  {
    value: 'domain3',
    label: 'Domain 3',
  },
];

const DetailsForm = () => {
  const { formInfo, handleNextStep, handlePrevStep, handleAddForm } = useAppState();
  const navigate = useNavigate();

  const [form] = Form.useForm();
  const { setFieldsValue } = form;

  const { startDate, endDate, manager, targetTeams, targetMembers, domain } =
    formInfo;

  const handleSubmit = (data) => {
    handleAddForm(data);
    handleNextStep();
    navigate('/forms/create/confirmation');
  };

  const handleBackClick = () => {
    handlePrevStep();
    navigate(-1);
  };

  const handleChange = (e) => {
    console.log(e);
  };

  useEffect(() => {
    if (Object.keys(formInfo).length === 0) {
      navigate('/forms');
    }
  }, [formInfo, navigate]);

  useEffect(() => {
    setFieldsValue({
      startDate: startDate ? dayjs(startDate) : '',
      endDate: endDate ? dayjs(endDate) : '',
      manager,
      targetTeams,
      targetMembers,
      domain,
    });
  }, [
    startDate,
    endDate,
    manager,
    targetTeams,
    targetMembers,
    domain,
    setFieldsValue,
  ]);

  return (
    <StyledForm
      requiredMark={false}
      layout="vertical"
      onFinish={handleSubmit}
      form={form}
    >
      <StyledDatePickerWrapper>
        <FormItem
          label="Start Date"
          name="startDate"
          rules={[{ required: true, message: 'Please enter start date' }]}
        >
          <StyledDatePicker
            size="large"
            format="DD/MM/YYYY"
            onChange={handleChange}
          />
        </FormItem>
        <FormItem
          label="End Date"
          name="endDate"
          rules={[{ required: true, message: 'Please enter the end date' }]}
        >
          <StyledDatePicker size="large" format="DD/MM/YYYY" />
        </FormItem>
      </StyledDatePickerWrapper>
      <FormItem
        label="Manager"
        name="manager"
        rules={[{ required: true, message: 'Please select a manager' }]}
      >
        <StyledSelect allowClear options={managers} size="large" />
      </FormItem>
      <FormItem
        label="Target Teams"
        name="targetTeams"
        rules={[{ required: true, message: 'Please select the target teams' }]}
      >
        <StyledSelect mode="multiple" allowClear options={teams} size="large" />
      </FormItem>
      <FormItem
        label="Target Members"
        name="targetMembers"
        rules={[
          { required: true, message: 'Please select the target members' },
        ]}
      >
        <StyledSelect
          mode="multiple"
          allowClear
          options={members}
          size="large"
        />
      </FormItem>
      <FormItem
        label="Domain"
        name="domain"
        rules={[{ required: true, message: 'Please select a doamin' }]}
      >
        <StyledSelect allowClear options={domains} size="large" />
      </FormItem>
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'end' }}>
        <TextButton onClick={handleBackClick}>&larr; Back</TextButton>
        <DefaultButton htmlType="submit">Next &rarr;</DefaultButton>
      </div>
    </StyledForm>
  );
};

const StyledForm = styled(Form)`
  & .ant-form-item .ant-form-item-label > label {
    font-family: var(--font-sans);
    color: #fff;
    font-size: 1.6rem;
    font-weight: 700;
  }

  & .ant-form-item .ant-form-item-explain-error {
    color: var(--color-red--7);
    font-family: var(--font-sans);
  }
`;
const FormItem = styled(Form.Item)`
  &.ant-form-item {
    width: 100%;
  }
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

const StyledDatePickerWrapper = styled.div`
  display: flex;
  gap: 2.4rem;
`;

const StyledDatePicker = styled(DatePicker)`
  &.ant-picker:hover {
    background-color: #fff;
  }
  &.ant-picker {
    width: 100%;
  }

  &.ant-picker .ant-picker-input > input {
    font-family: var(--font-sans);
  }

  &.ant-picker-focused.ant-picker {
    background-color: #fff;
  }

  &.ant-picker:not(.ant-picker-disabled):not(
      [disabled]
    ).ant-picker-status-error {
    color: var(--color-red--7);
    border-left-width: 5px;
  }

  &.ant-picker:not(.ant-picker-disabled):not(
      [disabled]
    ).ant-picker-status-error.ant-picker-focused {
    background-color: #fff;
  }
`;

const StyledSelect = styled(Select)`
  &.ant-select-status-error:not(.ant-select-disabled):not(
      .ant-select-customize-input
    ):not(.ant-pagination-size-changer)
    .ant-select-selector {
    color: var(--color-red--7);
    border-left-width: 5px;
  }
`;

export default DetailsForm;
