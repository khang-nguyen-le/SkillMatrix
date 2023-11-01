import { DatePicker, Form, Select } from 'antd';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
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
export const FormItem = styled(Form.Item)`
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

export const StyledDatePickerWrapper = styled.div`
  display: flex;
  gap: 2.4rem;
`;

export const StyledDatePicker = styled(DatePicker)`
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

export const StyledSelect = styled(Select)`
  &.ant-select-status-error:not(.ant-select-disabled):not(
      .ant-select-customize-input
    ):not(.ant-pagination-size-changer)
    .ant-select-selector {
    color: var(--color-red--7);
    border-left-width: 5px;
  }
`;
