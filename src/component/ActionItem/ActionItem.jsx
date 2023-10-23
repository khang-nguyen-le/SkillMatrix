import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledActionItem = styled.div`
  background-color: var(--color-gray--1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem 8rem;
  border-radius: var(--border-radius-lg);
  gap: 1.6rem;
  color: var(--color-gray--7);
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }

  p {
    /* text-transform: uppercase;  */
    letter-spacing: 0.3px;
    font-size: 1.8rem;
  }
`;

const ActionItem = ({ children, openModal }) => {
  return <StyledActionItem onClick={openModal}>{children}</StyledActionItem>;
};

ActionItem.propTypes = {
  children: PropTypes.node,
  openModal: PropTypes.func,
};

export default ActionItem;
