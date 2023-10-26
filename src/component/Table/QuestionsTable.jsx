import { Table } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const QuestionsTable = ({ columns, dataSource }) => {
  return (
    <StyledTable
      columns={columns}
      dataSource={dataSource}
      pagination={{ hideOnSinglePage: true }}
      tableLayout="fixed"
    ></StyledTable>
  );
};

QuestionsTable.propTypes = {
  columns: PropTypes.array,
  dataSource: PropTypes.array,
};

const StyledTable = styled(Table)`
  &.ant-table-wrapper
    .ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(
      .ant-table-row-expand-icon-cell
    ):not([colspan])::before,
  &.ant-table-wrapper
    .ant-table-thead
    > tr
    > td:not(:last-child):not(.ant-table-selection-column):not(
      .ant-table-row-expand-icon-cell
    ):not([colspan])::before {
    width: 0;
  }

  &.ant-table-wrapper {
    position: relative;
  }

  &.ant-table-wrapper .ant-table {
    background-color: transparent;
    font-family: var(--font-sans);
  }

  &.ant-table-wrapper .ant-table-thead > tr > th,
  &.ant-table-wrapper .ant-table-thead > tr > td {
    background-color: transparent;
  }

  &.ant-table-wrapper .ant-table-tbody > tr > th,
  &.ant-table-wrapper .ant-table-tbody > tr > td {
    background-color: var(--color-gray--1);
    border-bottom: 0;
  }

  &.ant-table-wrapper .ant-table-tbody > tr > td:first-child {
    border-top-left-radius: var(--border-radius-lg);
    border-bottom-left-radius: var(--border-radius-lg);
  }
  &.ant-table-wrapper .ant-table-tbody > tr > td:last-child {
    border-top-right-radius: var(--border-radius-lg);
    border-bottom-right-radius: var(--border-radius-lg);
  }

  &.ant-table-wrapper .ant-table-cell,
  &.ant-table-wrapper .ant-table-thead > tr > th,
  &.ant-table-wrapper .ant-table-tbody > tr > th,
  &.ant-table-wrapper .ant-table-tbody > tr > td,
  &.ant-table-wrapper tfoot > tr > th,
  &.ant-table-wrapper tfoot > tr > td {
    padding: 12px 16px;
  }

  &.ant-table-wrapper table {
    border-spacing: 0 1.2rem;
  }
`;

export default QuestionsTable;
