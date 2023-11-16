import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import MoreIcon from '../../icons/MoreIcon';
import UserAvatar from '../Avatar/UserAvatar';
import { Link, useParams } from 'react-router-dom';
import { respondentApi } from '../../api/respondent';
import CSpinner from '../Spinner/Spinner';
import { StyledBadge, StyledTable } from './RespondentsTableStyle';

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

export default RespondentsTable;
