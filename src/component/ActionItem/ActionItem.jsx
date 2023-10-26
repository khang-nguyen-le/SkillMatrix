import PropTypes from 'prop-types';
import { StyledActionItem } from './ActionItemStyle';

const ActionItem = ({ children, openModal }) => {
  return <StyledActionItem onClick={openModal}>{children}</StyledActionItem>;
};

ActionItem.propTypes = {
  children: PropTypes.node,
  openModal: PropTypes.func,
};

export default ActionItem;
