import { Form, Input } from 'antd';
import styled from 'styled-components';

export const FormItem = styled(Form.Item)`
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

export const StyledInput = styled(Input)`
  &:hover,
  &:focus {
    background-color: #fff;
  }

  &.ant-input-status-error:not(.ant-input-disabled):not(
      .ant-input-borderless
    ).ant-input {
    border-left-width: 5px;
  }

  &.ant-input-status-error:not(.ant-input-disabled):not(
      .ant-input-borderless
    ).ant-input:focus {
    border-color: var(--color-red--7);
    background-color: #fff;
  }
`;

export const StyledTextArea = styled(Input.TextArea)`
  &:hover,
  &:focus {
    background-color: #fff;
  }
`;
