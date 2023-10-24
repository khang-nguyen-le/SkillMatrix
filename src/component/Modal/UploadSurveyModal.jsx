import styled from 'styled-components';
import CUpload from '../Upload/Upload';
import CModal from './Modal';
import { Button } from 'antd';
import PropTypes from 'prop-types';

const UploadSurveyModal = ({ open, onCancel }) => {
  return (
    <CModal open={open} onCancel={onCancel} footer={null} title="Upload Survey">
      <p style={{ paddingBottom: '8px' }}>
        Download a{' '}
        <DownloadSampleFileButton type="link">
          sample CSV template
        </DownloadSampleFileButton>{' '}
        to see an example of the format required
      </p>
      <CUpload />
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
