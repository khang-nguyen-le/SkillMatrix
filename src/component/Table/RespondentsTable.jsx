import { useEffect, useState } from 'react';
import { Badge, Table } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import MoreIcon from '../../icons/MoreIcon';
import UserAvatar from '../Avatar/UserAvatar';
import { Link, useParams } from 'react-router-dom';
import { respondentApi } from '../../api/respondent';
import CSpinner from '../Spinner/Spinner';

const RespondentsTable = ({ formId }) => {
  const { id } = useParams();
  const [respondents, setRespondents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Name',
      key: 'name',
      render: (text, record) => {
        console.log(record);
        return (
          <Link to={`/forms/${formId}/respondent/${record.id}`}>
            <UserAvatar src={record.avatar} name={record.respondentName} />
          </Link>
        );
      },
      dataIndex: ['avatar', 'respondentName', 'id'],
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
    },
    {
      title: 'Birhthday',
      dataIndex: 'birthday',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
    },
    {
      title: 'Status',
      key: 'state',
      render: () => <StyledBadge status="success" text="Complete" />,
    },
    {
      title: '',
      key: 'action',
      render: () => (
        <a>
          <MoreIcon size={14} color="#8c8c8c" />
        </a>
      ),
    },
  ];

  useEffect(() => {
    const fetchRespondents = async (id) => {
      try {
        setIsLoading(true);
        const res = await respondentApi.fetchRespondents(id);
        const newData = res.data.map((respondent) => ({
          ...respondent,
          key: respondent.id,
          birthday: new Date(respondent.birthday).toLocaleDateString(),
        }));
        setRespondents(newData);
      } catch (err) {
        alert(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRespondents(id);
  }, [id]);

  if (isLoading) return <CSpinner />;

  return (
    <StyledTable
      size="middle"
      columns={columns}
      dataSource={respondents}
      pagination={{ hideOnSinglePage: true }}
    />
  );
};

RespondentsTable.propTypes = {
  formId: PropTypes.string,
};

const StyledBadge = styled(Badge)`
  font-family: var(--font-sans);
`;

const StyledTable = styled(Table)`
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

export default RespondentsTable;
