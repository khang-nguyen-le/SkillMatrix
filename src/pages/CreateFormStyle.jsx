import { Steps } from 'antd';
import styled from 'styled-components';

export const Box = styled.div`
  background-color: #fff;
  padding: 2rem 18rem;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  margin-top: -36px;
`;

export const StyledSteps = styled(Steps)`
  &.ant-steps
    .ant-steps-item-finish
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title {
    font-family: var(--font-sans);
  }

  &.ant-steps .ant-steps-item-content {
    font-family: var(--font-sans);
  }
`;

export const FormBox = styled.div`
  background-color: var(--color-primary--5);
  margin-top: 3.2rem;
  padding: 2rem;
  border-radius: var(--border-radius-lg);
`;
