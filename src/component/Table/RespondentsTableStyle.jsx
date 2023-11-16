import { Badge, Table } from 'antd';
import styled from 'styled-components';

export const StyledBadge = styled(Badge)`
  font-family: var(--font-sans);
`;

export const StyledTable = styled(Table)`
  box-shadow: var(--shadow-lg);

  &.ant-table-wrapper {
    border-radius: var(--border-radius-xl);
    overflow: hidden;
  }

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

  &.ant-table-wrapper .ant-table {
    font-family: var(--font-sans);
  }

  &.ant-table-wrapper .ant-table-thead > tr > th,
  &.ant-table-wrapper .ant-table-thead > tr > td {
    background-color: var(--color-primary--5);
  }

  &.ant-table-wrapper .ant-table-thead > tr > th,
  &.ant-table-wrapper .ant-table-thead > tr > td {
    color: #fff;
  }

  &.ant-table-wrapper
    .ant-table-container
    table
    > thead
    > tr:first-child
    > *:first-child {
    border-start-start-radius: var(--border-radius-xl);
  }

  &.ant-table-wrapper
    .ant-table-container
    table
    > thead
    > tr:first-child
    > *:last-child {
    border-start-end-radius: var(--border-radius-xl);
  }

  &.ant-table-wrapper
    .ant-table-container
    table
    > tbody
    > tr:last-child
    > *:last-child {
    border-end-end-radius: var(--border-radius-xl);
  }

  &.ant-table-wrapper .ant-table-container table > tbody > tr > *:first-child {
    color: var(--color-gray--6);
  }
`;
