import { Spin } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CSpinner = ({ size }) => {
  return (
    <SpinContainer>
      <StyledSpinner size={size} />
    </SpinContainer>
  );
};

const SpinContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledSpinner = styled(Spin)``;

CSpinner.propTypes = {
  size: PropTypes.string,
};

export default CSpinner;
