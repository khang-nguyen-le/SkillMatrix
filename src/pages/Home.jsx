import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { useAppState } from '../context/appContext';

import { ActionWrapper, Container } from './HomeStyles';

import ActionItem from '../component/ActionItem/ActionItem';
import UploadSurveyModal from '../component/Modal/UploadSurveyModal';
import AddDomainModal from '../component/Modal/AddDomainModal';
import ImportDomainModal from '../component/Modal/ImportDomainModal';

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
    handleResetForm();

    return () => {
      handleResetCurrentStep();
    };
  }, [handleResetCurrentStep, handleResetForm]);

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
          <p>Upload form</p>
        </ActionItem>
      </ActionWrapper>

      <section>
        <Outlet />
      </section>

      <UploadSurveyModal
        open={isUploadModalOpen}
        onCancel={handleUploadModalCancel}
      />
      <AddDomainModal />
      <ImportDomainModal />
    </Container>
  );
};

const stylesIcon = {
  fontSize: '24px',
  backgroundColor: '#4d9aff ',
  padding: '8px',
  borderRadius: '50%',
  color: '#fff',
};

export default Home;
