import { InboxOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledDragger = styled(Upload.Dragger)`
  &.ant-upload-wrapper .ant-upload-drag .ant-upload {
    padding: 16px;
  }

  &.ant-upload-wrapper .ant-upload-drag .ant-upload-drag-container p {
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.2px;
  }
`;

const CUpload = ({ props }) => {
  return (
    <StyledDragger {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibit from uploading
        company data or other band files
      </p>
    </StyledDragger>
  );
};

CUpload.propTypes = {
  props: PropTypes.object,
};

export default CUpload;
