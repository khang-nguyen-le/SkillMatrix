import { SearchOutlined, FilterOutlined } from '@ant-design/icons';

import PageLayout from '../component/Layout/PageLayout';
import { DefaultButton } from '../component/Button/Button';
import UserAvatar from '../component/Avatar/UserAvatar';
import MoreIcon from '../icons/MoreIcon';
import {
  Box,
  BoxContent,
  SearchBox,
  StyledBadge,
  StyledTable,
} from './RespondentsPageStyle';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const RespondentsPage = () => {
  const navigate = useNavigate();

  const handleBackPage = () => {
    navigate(-1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout pageTitle="Form Name">
      <Box>
        <BoxContent>
          <DefaultButton onClick={handleBackPage}>&larr; Back</DefaultButton>
          <SearchBox
            placeholder="Search respondent name..."
            prefix={<SearchOutlined />}
            size="large"
          />
          <DefaultButton>
            <FilterOutlined /> Filter
          </DefaultButton>
        </BoxContent>
      </Box>
      <StyledTable
        size="middle"
        columns={columns}
        dataSource={data}
        pagination={{ hideOnSinglePage: true }}
      ></StyledTable>
    </PageLayout>
  );
};

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: 'Name',
    key: 'name',
    render: () => <UserAvatar />,
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
const data = [
  {
    key: '1',
    id: '1',
    gender: 'Male',
    birthday: '02/10/1999',
    email: 'John@example.com',
    phone: '123-456-789',
  },
  {
    key: '2',
    id: '2',
    gender: 'Female',
    birthday: '02/10/1999',
    email: 'John@example.com',
    phone: '123-456-789',
  },
  {
    key: '3',
    id: '3',
    gender: 'Female',
    birthday: '02/10/1999',
    email: 'John@example.com',
    phone: '123-456-789',
  },
];

export default RespondentsPage;
