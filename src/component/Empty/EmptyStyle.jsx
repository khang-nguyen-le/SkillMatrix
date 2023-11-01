import { Empty } from 'antd';
import styled from 'styled-components';

export const StyledEmpty = styled(Empty)`
  padding: 24px 0;

  &.ant-empty .ant-empty-footer {
    margin-top: 40px;
  }
`;

export const Description = styled.p`
  font-family: var(--font-sans);
`;
