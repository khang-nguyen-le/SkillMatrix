import styled from 'styled-components';
import PropTypes from 'prop-types';

const Radio = ({ name, value }) => {
  return (
    <StyledRadio type="radio" name={name} value={value} checked disabled />
  );
};

const StyledRadio = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

Radio.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
};

export default Radio;
