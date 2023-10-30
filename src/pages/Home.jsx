import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import ActionItem from '../component/ActionItem/ActionItem';
import SurveyFormHeader from '../component/SurveyForm/SurveyFormHeader';
import SurveyFormTabs from '../component/SurveyForm/SurveyFormTabs';
import { useAppState } from '../context/appContext';
import AddDomainModal from '../component/Modal/AddDomainModal';
import UploadSurveyModal from '../component/Modal/UploadSurveyModal';
import UpdateDomainModal from '../component/Modal/UpdateDomainModal';

const Home = () => {
  const { handleResetCurrentStep, handleResetForm } = useAppState();
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  const handleUploadModalShow = () => {
    setIsUploadModalOpen(true);
  };

  const handleUploadModalCancel = () => {
    setIsUploadModalOpen(false);
  };

  useEffect(() => {
    handleResetCurrentStep();
    handleResetForm();
  }, []);

  return (
    <Container>
      <ActionWrapper>
        <Link to="/forms/create/info">
          <ActionItem>
            <PlusOutlined style={stylesIcon} />
            <p>Create form</p>
          </ActionItem>
        </Link>
        <ActionItem openModal={handleUploadModalShow}>
          <UploadOutlined style={stylesIcon} />
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

      <UploadSurveyModal
        open={isUploadModalOpen}
        onCancel={handleUploadModalCancel}
      />
      <AddDomainModal />
      <UpdateDomainModal />
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

const stylesIcon = {
  fontSize: '24px',
  backgroundColor: '#4d9aff ',
  padding: '8px',
  borderRadius: '50%',
  color: '#fff',
};

export default Home;
