import { Collapse } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CCollapse = ({ items, expandIconPosition }) => {
  return (
    <StyledCollapse items={items} expandIconPosition={expandIconPosition} />
  );
};

CCollapse.propTypes = {
  items: PropTypes.array,
  expandIconPosition: PropTypes.string,
};

const StyledCollapse = styled(Collapse)`
  font-family: var(--font-sans);
  &.ant-collapse
    > .ant-collapse-item
    > .ant-collapse-header
    .ant-collapse-header-text {
    font-weight: 700;
    color: var(--color-gray--10);
  }

  &.ant-collapse {
    background-color: var(--color-primary--1);
    font-size: 1.6rem;
  }
`;

export default CCollapse;
