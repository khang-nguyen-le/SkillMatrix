import { Modal } from 'antd';
import styled from 'styled-components';

export const StyledModal = styled(Modal)`
  &.ant-modal .ant-modal-content {
    padding: 0;
  }

  &.ant-modal .ant-modal-header {
    padding: 16px 24px;
    border-bottom: 1px solid var(--color-gray--4);
    margin-bottom: 0;
  }

  &.ant-modal .ant-modal-title {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    color: var(--color-gray--9);
  }

  &.ant-modal .ant-modal-close {
    top: 14px;
  }

  &.ant-modal .ant-modal-body {
    padding: 12px 24px 24px;
    max-height: 500px;
    overflow-y: auto;
  }

  &.ant-modal .ant-modal-footer {
    padding: 0px 24px 24px;
    margin-top: 0;
  }
`;
