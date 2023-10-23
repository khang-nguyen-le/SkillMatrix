import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import ActionItem from '../component/ActionItem/ActionItem';
import SurveyFormHeader from '../component/SurveyForm/SurveyFormHeader';
import SurveyFormTabs from '../component/SurveyForm/SurveyFormTabs';
import CModal from '../component/Modal/Modal';
import CUpload from '../component/Upload/Upload';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <ActionWrapper>
        <Link to="/forms/create/info">
          <ActionItem>
            <PlusOutlined
              style={{
                fontSize: '24px',
                backgroundColor: '#4d9aff ',
                padding: '8px',
                borderRadius: '50%',
                color: '#fff',
              }}
            />
            <p>Create form</p>
          </ActionItem>
        </Link>
        <ActionItem openModal={showModal}>
          <UploadOutlined
            style={{
              fontSize: '24px',
              backgroundColor: '#4d9aff ',
              padding: '8px',
              borderRadius: '50%',
              color: '#fff',
            }}
          />
          <p>Upload survey</p>
        </ActionItem>
      </ActionWrapper>

      <section>
        <div>
          <SurveyFormHeader />
        </div>

        <SurveyFormBodyWrapper>
          <SurveyFormTabs />
        </SurveyFormBodyWrapper>
      </section>

      <CModal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        title="Upload Survey  "
      >
        <p style={{ paddingBottom: '8px' }}>
          Download a{' '}
          <DownloadSampleFileButton type="link">
            sample CSV template
          </DownloadSampleFileButton>{' '}
          to see an example of the format required
        </p>
        <CUpload />
      </CModal>
    </Container>
  );
};

const Container = styled.div`
  max-width: 114rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const ActionWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 24px 0;
`;

const SurveyFormBodyWrapper = styled.section`
  padding: 2.4rem 0 4.8rem;
`;

const DownloadSampleFileButton = styled(Button)`
  &.ant-btn {
    padding: 0;
  }
`;

export default Home;
