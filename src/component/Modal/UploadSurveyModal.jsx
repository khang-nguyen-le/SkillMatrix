import styled from 'styled-components';
import CUpload from '../Upload/Upload';
import CModal from './Modal';
import { Button, message } from 'antd';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { read, utils } from 'xlsx';

const UploadSurveyModal = ({ open, onCancel }) => {
  const [fileList, setFileList] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [uploading, setUploading] = useState(false);

  const handleUpload = () => {
    const formData = new FormData();

    fileList.forEach((file) => {
      formData.append('files[]', file);
    });
  };

  const handleChange = (info) => {
    let newFileList = [...info.fileList];
    newFileList = newFileList.slice(-1);

    setFileList(newFileList);
  };

  const props = {
    name: 'file',
    action: 'http://localhost:8000/createdForms',
    accept:
      'application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    beforeUpload: (file) => {
      console.log(file);
      const isExcel =
        file.type === 'application/vnd.ms-excel' ||
        file.type ===
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      if (!isExcel) {
        message.error('You can only upload Excel file!');
      }

      const data = file
        .arrayBuffer()
        .then((res) => {
          const wb = read(res);
          console.log(wb);
          const ws = wb.Sheets[wb.SheetNames[0]];
          const data = utils.sheet_to_json(ws);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });

      console.log(data);

      return false;
    },
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    fileList,
    onChange: handleChange,

    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <CModal
      open={open}
      onCancel={onCancel}
      title="Upload Survey"
      footer={[
        <Button
          key="submit"
          type="primary"
          loading={uploading}
          onClick={handleUpload}
          disabled={fileList.length === 0}
        >
          Upload
        </Button>,
      ]}
    >
      <p style={{ paddingBottom: '8px' }}>
        Download a{' '}
        <DownloadSampleFileButton type="link">
          sample CSV template
        </DownloadSampleFileButton>{' '}
        to see an example of the format required
      </p>
      <CUpload props={props} />
    </CModal>
  );
};

const DownloadSampleFileButton = styled(Button)`
  &.ant-btn {
    padding: 0;
  }
`;

UploadSurveyModal.propTypes = {
  open: PropTypes.bool,
  onCancel: PropTypes.func,
};

export default UploadSurveyModal;
