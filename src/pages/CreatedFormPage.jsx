import styled from 'styled-components';
import PageLayout from '../component/Layout/PageLayout';
import { Badge, Table, Tabs } from 'antd';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { surveyFormApi } from '../api/surveyForm';
import SpinnerFullPage from '../component/Spinner/SpinnerFullPage';
import SurveyFormQuestions from '../component/SurveyForm/SurveyFormQuestions';
import MoreIcon from '../icons/MoreIcon';
import UserAvatar from '../component/Avatar/UserAvatar';

const CreatedFormPage = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [surveyForm, setSurveyForm] = useState();
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState('');
  const [keyTab, setKeyTab] = useState('1');

  const items = [
    {
      label: 'Questions',
      key: '1',
    },
    {
      label: 'Responses',
      key: '2',
    },
  ];

  useEffect(() => {
    const getSurveyForm = async (id) => {
      try {
        setIsLoading(true);
        setError('');
        const res = await surveyFormApi.getFormById(id);

        setSurveyForm(res.data);
      } catch (err) {
        if (err.code === 'ERR_NETWORK') {
          setError('Something went wrong with fetching the survey form');
        }
      } finally {
        setIsLoading(false);
      }
    };

    getSurveyForm(id);
  }, [id]);

  const handleChangeTabs = (key) => {
    setKeyTab(key);
  };

  if (isLoading) return <SpinnerFullPage />;

  return (
    <PageLayout pageTitle={surveyForm?.formName}>
      <Box>
        <StyledTabs
          defaultActiveKey="1"
          centered
          items={items}
          size="large"
          onChange={(e) => {
            handleChangeTabs(e);
          }}
        />
      </Box>
      {keyTab === '1' ? (
        <SurveyFormQuestions surveyForm={surveyForm} />
      ) : (
        <StyledTable
          size="middle"
          columns={columns}
          dataSource={data}
          pagination={{ hideOnSinglePage: true }}
        ></StyledTable>
      )}
    </PageLayout>
  );
};

const Box = styled.div`
  background-color: #fff;
  padding: 1.2rem;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  margin-top: -32px;
  margin-bottom: 2.4rem;
`;

const StyledTabs = styled(Tabs)`
  &.ant-tabs {
    font-family: var(--font-sans);
  }

  &.ant-tabs-top > .ant-tabs-nav {
    margin: 0;
  }

  &.ant-tabs-top > .ant-tabs-nav::before,
  &.ant-tabs-bottom > .ant-tabs-nav::before,
  &.ant-tabs-top > div > .ant-tabs-nav::before,
  &.ant-tabs-bottom > div > .ant-tabs-nav::before {
    border-bottom: 0;
  }

  &.ant-tabs-large > .ant-tabs-nav .ant-tabs-tab {
    padding: 5px 0;
  }

  &.ant-tabs-top > .ant-tabs-nav .ant-tabs-ink-bar {
    height: 3px;
    border-top-left-radius: 1000px;
    border-top-right-radius: 1000px;
  }
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

const StyledBadge = styled(Badge)`
  font-family: var(--font-sans);
`;

export default CreatedFormPage;
