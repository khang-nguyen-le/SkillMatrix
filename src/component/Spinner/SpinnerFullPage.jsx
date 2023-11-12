import styled from 'styled-components';
import CSpinner from './Spinner';

const SpinnerFullPage = () => {
  return (
    <StyledSpinnerFullpage>
      <CSpinner size="large" />
    </StyledSpinnerFullpage>
  );
};

const StyledSpinnerFullpage = styled.div`
  height: 100vh;
  background-color: var(--color-gray--1);
`;

export default SpinnerFullPage;
