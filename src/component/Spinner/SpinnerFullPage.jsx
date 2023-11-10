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
  height: calc(100vh - 58px);
  background-color: var(--color-gray--1);
`;

export default SpinnerFullPage;
