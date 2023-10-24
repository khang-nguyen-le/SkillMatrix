import PropTypes from 'prop-types';
import { StyledCollapse } from './StyledCollapse';

const CCollapse = ({ items, expandIconPosition }) => {
  return (
    <StyledCollapse items={items} expandIconPosition={expandIconPosition} />
  );
};

CCollapse.propTypes = {
  items: PropTypes.array,
  expandIconPosition: PropTypes.string,
};

export default CCollapse;
