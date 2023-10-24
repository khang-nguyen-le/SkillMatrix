import { DownOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import {
  StyeledDefaultButton,
  StyeledPrimaryButton,
  StyledActionsButton,
  StyledTextButton,
} from './StyledButton';

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

const DefaultButton = ({ children, htmlType }) => {
  return (
    <StyeledDefaultButton htmlType={htmlType} size="large">
      {children}
    </StyeledDefaultButton>
  );
};

const TextButton = ({ children, onClick }) => {
  return (
    <StyledTextButton type="text" onClick={onClick} size="large">
      {children}
    </StyledTextButton>
  );
};

const ActionsButton = ({ children, menu, onSubmit, onSaveDraft }) => {
  return (
    <StyledActionsButton
      type="primary"
      onClick={onSubmit}
      menu={{ items: menu, onClick: onSaveDraft }}
      icon={<DownOutlined />}
      size="large"
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
};

TextButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

ActionsButton.propTypes = {
  children: PropTypes.node,
  menu: PropTypes.array,
  onSubmit: PropTypes.func,
  onSaveDraft: PropTypes.func,
};

export { PrimaryButton, DefaultButton, TextButton, ActionsButton };
