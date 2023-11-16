import { Form } from 'antd';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  & .ant-form-item {
    margin-top: 16px;
    margin-bottom: 8px;
    width: 100%;
  }
`;

export const FormItemWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
`;
