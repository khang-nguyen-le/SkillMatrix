import { Outlet } from 'react-router-dom';
import { useAppState } from '../context/appContext';
import PageLayout from '../component/Layout/PageLayout';
import { Box, FormBox, StyledSteps } from './CreateFormStyle';

const steps = [
  {
    title: 'Information',
    content: 'First-content',
  },
  {
    title: 'Details',
    content: 'Second-content',
  },
  {
    title: 'Confirmation',
    content: 'Last-content',
  },
];

const stepItems = steps.map((item) => ({
  key: item.title,
  title: item.title,
}));

const CreateForm = () => {
  const { currentStep } = useAppState();
  return (
    <PageLayout pageTitle="Create Form">
      <Box>
        <StyledSteps items={stepItems} current={currentStep} />
      </Box>
      <FormBox>
        <Outlet />
      </FormBox>
    </PageLayout>
  );
};

export default CreateForm;
