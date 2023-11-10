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
  style,
}) => {
  return (
    <StyledModal
      title={title}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      footer={footer}
      okText={okText}
      style={style}
      centered
      forceRender
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
  style: PropTypes.object,
};

export default CModal;
