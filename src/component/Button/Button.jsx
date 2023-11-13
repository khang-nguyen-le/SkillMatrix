import { DownOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import {
  StyeledDefaultButton,
  StyeledPrimaryButton,
  StyledActionsButton,
  StyledTextButton,
} from './ButtonStyle';

const PrimaryButton = ({ children, size, icon, onClick }) => {
  return (
    <StyeledPrimaryButton
      type="primary"
      size={size}
      icon={icon}
      onClick={onClick}
    >
      {children}
    </StyeledPrimaryButton>
  );
};

const DefaultButton = ({
  children,
  htmlType,
  onClick,
  shape,
  size = 'large',
  icon,
}) => {
  return (
    <StyeledDefaultButton
      htmlType={htmlType}
      size={size}
      onClick={onClick}
      shape={shape}
      icon={icon}
    >
      {children}
    </StyeledDefaultButton>
  );
};

const TextButton = ({ children, onClick, icon }) => {
  return (
    <StyledTextButton type="text" onClick={onClick} size="large" icon={icon}>
      {children}
    </StyledTextButton>
  );
};

const ActionsButton = ({ children, menu, onSubmit, onSaveDraft, loading }) => {
  return (
    <StyledActionsButton
      type="primary"
      onClick={onSubmit}
      menu={{ items: menu, onClick: onSaveDraft }}
      icon={<DownOutlined />}
      size="large"
      loading={loading}
    >
      {children}
    </StyledActionsButton>
  );
};

PrimaryButton.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.element,
  size: PropTypes.string,
  onClick: PropTypes.func,
};

DefaultButton.propTypes = {
  children: PropTypes.node,
  htmlType: PropTypes.node,
  onClick: PropTypes.func,
  shape: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.element,
};

TextButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  icon: PropTypes.element,
};

ActionsButton.propTypes = {
  children: PropTypes.node,
  menu: PropTypes.array,
  onSubmit: PropTypes.func,
  onSaveDraft: PropTypes.func,
  loading: PropTypes.bool,
};

export { PrimaryButton, DefaultButton, TextButton, ActionsButton };
