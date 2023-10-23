import { Steps } from 'antd';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { useAppState } from '../context/appContext';

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
    <PageWrapper>
      <PageTitleWrapper>
        <Container>
          <PageTitle>Create form</PageTitle>
        </Container>
      </PageTitleWrapper>
      <Main>
        <Container>
          <StepsBox>
            <StyledSteps items={stepItems} current={currentStep} />
          </StepsBox>
          <FormBox>
            <Outlet />
          </FormBox>
        </Container>
      </Main>
    </PageWrapper>
  );
};

const PageWrapper = styled.main`
  background-color: var(--color-primary--5);
`;

const Container = styled.div`
  max-width: 114rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const PageTitleWrapper = styled.section`
  padding: 1.6rem 0 4.8rem;
`;

const Main = styled.section`
  background-color: #fff;
  height: 100vh;
  border-radius: 32px 32px 0 0;
`;

const PageTitle = styled.h2`
  color: var(--color-gray--1);
  font-size: 28px;
  text-transform: capitalize;
`;

const StepsBox = styled.div`
  background-color: #fff;
  padding: 2rem 18rem;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  margin-top: -36px;
`;

const StyledSteps = styled(Steps)`
  &.ant-steps
    .ant-steps-item-finish
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title {
    font-family: var(--font-sans);
  }

  &.ant-steps .ant-steps-item-content {
    font-family: var(--font-sans);
  }
`;

const FormBox = styled.div`
  background-color: var(--color-primary--5);
  margin-top: 3.2rem;
  padding: 2rem;
  border-radius: var(--border-radius-lg);
`;

export default CreateForm;
