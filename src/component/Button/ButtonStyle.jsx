import { Button, Dropdown } from 'antd';
import styled from 'styled-components';

export const StyeledPrimaryButton = styled(Button)`
  &.ant-btn-primary {
    background-color: var(--color-primary--6);
  }

  &.ant-btn-primary:not(:disabled):not(.ant-btn-disabled):hover {
    background-color: var(--color-primary--5);
  }
`;

export const StyeledDefaultButton = styled(Button)`
  &.ant-btn-default {
    color: var(--color-primary--6);
    font-family: var(--font-sans);
    font-weight: 500;
  }
`;

export const StyledTextButton = styled(Button)`
  &.ant-btn-text {
    color: #fff;
    font-family: var(--font-sans);
    font-weight: 500;
  }

  &.ant-btn-text:not(:disabled):not(.ant-btn-disabled):hover {
    color: #fff;
  }
`;

export const StyledActionsButton = styled(Dropdown.Button)`
  width: auto;

  & .ant-btn-primary {
    font-family: var(--font-sans);

    background-color: var(--color-primary--6);
  }

  & .ant-btn-primary:not(:disabled):not(.ant-btn-disabled):hover {
    background-color: var(--color-primary--7);
  }

  & .ant-btn.ant-btn-lg.ant-btn-icon-only {
    padding-top: 8px;
  }

  & .ant-btn.ant-btn-lg.ant-btn-icon-only .anticon {
    font-size: 14px;
  }
`;
