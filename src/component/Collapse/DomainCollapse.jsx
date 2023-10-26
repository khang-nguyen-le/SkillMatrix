import PropTypes from 'prop-types';
import { StyledDomainCollapse } from './DomainCollapseStyle';

const DomainCollapse = ({ items, expandIconPosition }) => {
  return (
    <StyledDomainCollapse
      items={items}
      expandIconPosition={expandIconPosition}
    />
  );
};

DomainCollapse.propTypes = {
  items: PropTypes.array,
  expandIconPosition: PropTypes.string,
};

export default DomainCollapse;
