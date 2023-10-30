import PropTypes from 'prop-types';

import { StyledModal } from './ModalStyle';

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
