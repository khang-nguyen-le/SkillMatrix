import { Button, Form } from 'antd';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  & .ant-form-item .ant-form-item-label > label,
  & .ant-input,
  & .ant-form-item .ant-form-item-explain-error {
    font-family: var(--font-sans);
  }

  & .ant-form-item .ant-form-item-explain-error {
    font-size: 1.3rem;
  }

  &
    .ant-input-status-error:not(.ant-input-disabled):not(
      .ant-input-borderless
    ).ant-input {
    border-left-width: 5px;
  }
`;

export const DomainSkillBox = styled.div`
  border: 1px solid var(--color-gray--5);
  padding: 0.8rem;
  border-radius: var(--border-radius-lg);
`;

export const DownloadSampleFileButton = styled(Button)`
  &.ant-btn {
    padding: 0;
  }
`;

export const ImportSection = styled.div`
  font-family: var(--font-sans);
`;

export const ImportDomainHeading = styled.p`
  font-weight: 500;
`;

export const ImportDescription = styled.p`
  padding-bottom: 0.8rem;
`;
