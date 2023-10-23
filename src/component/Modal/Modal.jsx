import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

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

  &.ant-modal .ant-modal-body {
    padding: 12px 24px 24px 24px;
  }
`;

const CModal = ({
  title = 'Basic Modal',
  children,
  onOk,
  onCancel,
  open,
  footer,
}) => {
  return (
    <StyledModal
      title={title}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      footer={footer}
    >
      {children}
    </StyledModal>
  );
};

CModal.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
  onOk: PropTypes.node,
  onCancel: PropTypes.func,
  open: PropTypes.node,
  footer: PropTypes.node,
};

export default CModal;
