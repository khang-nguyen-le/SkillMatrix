import { InboxOutlined } from '@ant-design/icons';
import { Upload, message } from 'antd';
import styled from 'styled-components';

const StyledDragger = styled(Upload.Dragger)`
  &.ant-upload-wrapper .ant-upload-drag .ant-upload {
    padding: 16px;
  }

  &.ant-upload-wrapper .ant-upload-drag .ant-upload-drag-container p {
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.2px;
  }
`;

const props = {
  name: 'file',
  action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const CUpload = () => {
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

export default CUpload;
