import { Button, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PrimaryButton = ({ children, styles }) => {
  return (
    <StyeledButton type="primary" styles={styles}>
      {children}
    </StyeledButton>
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

const StyeledButton = styled(Button)``;

const StyeledDefaultButton = styled(Button)`
  &.ant-btn-default {
    color: var(--color-primary--6);
    font-family: var(--font-sans);
    font-weight: 500;
  }
`;

const StyledTextButton = styled(Button)`
  &.ant-btn-text {
    color: #fff;
    font-family: var(--font-sans);
    font-weight: 500;
  }

  &.ant-btn-text:not(:disabled):not(.ant-btn-disabled):hover {
    color: #fff;
  }
`;

const StyledActionsButton = styled(Dropdown.Button)`
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

PrimaryButton.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.node,
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
