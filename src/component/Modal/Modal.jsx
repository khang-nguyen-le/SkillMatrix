import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

const CModal = ({
  title = 'Basic Modal',
  children,
  onOk,
  onCancel,
  open,
  footer,
  okText,
}) => {
  return (
    <StyledModal
      title={title}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      footer={footer}
      okText={okText}
      centered
    >
      {children}
    </StyledModal>
  );
};

const StyledModal = styled(Modal)`
  &.ant-modal .ant-modal-content {
    padding: 0;
  }

  &.ant-modal .ant-modal-header {
    padding: 12px 24px;
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
  }

  &.ant-modal .ant-modal-footer {
    padding: 0px 24px 24px;
    margin-top: 0;
  }
`;

CModal.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  open: PropTypes.bool,
  footer: PropTypes.node,
  okText: PropTypes.string,
};

export default CModal;
