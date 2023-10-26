import {
  DeleteOutlined,
  PlusOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Input, Radio } from 'antd';
import styled from 'styled-components';

import { PrimaryButton } from '../Button/Button';
import DomainCollapse from '../Collapse/DomainCollapse';
import { useAppState } from '../../context/appContext';
import QuestionsTable from '../Table/QuestionsTable';

function Domain() {
  const { handleAddDomainModalShow } = useAppState();

  const handleDeleteDomain = () => {
    return (
      <DeleteOutlined
        onClick={(e) => {
          e.stopPropagation();
        }}
      />
    );
  };

  const items = [
    {
      key: '1',
      label: 'Domain 1',
      children: (
        <TableWrapper onClick={handleAddDomainModalShow}>
          <QuestionsTable columns={columns} dataSource={data}></QuestionsTable>
        </TableWrapper>
      ),
      extra: handleDeleteDomain(),
    },
  ];

  return (
    <>
      <DomainActionsBox>
        <SearchBox
          placeholder="Search domain..."
          prefix={<SearchOutlined />}
          size="large"
        />
        <PrimaryButton
          size="large"
          icon={<PlusOutlined />}
          onClick={handleAddDomainModalShow}
        >
          Add
        </PrimaryButton>
      </DomainActionsBox>
      <DomainList>
        <li>
          <DomainCollapse items={items} />
        </li>
        <li>
          <DomainCollapse items={items} />
        </li>
      </DomainList>
    </>
  );
}

const columns = [
  {
    title: '',
    dataIndex: 'domainSkill',
    key: 'domainSkill',
    width: 350,
    ellipsis: true,
  },
  {
    title: '0',
    dataIndex: 'lv0',
    key: 'lv0',
    align: 'center',
  },
  {
    title: '1',
    dataIndex: 'lv1',
    key: 'lv1',
    align: 'center',
  },
  {
    title: '2',
    dataIndex: 'lv2',
    key: 'lv2',
    align: 'center',
  },
  {
    title: '3',
    dataIndex: 'lv3',
    key: 'lv3',
    align: 'center',
  },
  {
    title: '4',
    dataIndex: 'lv4',
    key: 'lv4',
    align: 'center',
  },
  {
    title: '5',
    dataIndex: 'lv5',
    key: 'lv5',
    align: 'center',
  },
];
const data = [
  {
    key: '1',
    domainSkill: 'Domain Skill 1',
    lv0: <Radio />,
    lv1: <Radio />,
    lv2: <Radio />,
    lv3: <Radio />,
    lv4: <Radio />,
    lv5: <Radio />,
  },
  {
    key: '2',
    domainSkill: 'Domain Skill 2',
    lv0: <Radio />,
    lv1: <Radio />,
    lv2: <Radio />,
    lv3: <Radio />,
    lv4: <Radio />,
    lv5: <Radio />,
  },
  {
    key: '3',
    domainSkill: 'Domain Skill 3',
    lv0: <Radio />,
    lv1: <Radio />,
    lv2: <Radio />,
    lv3: <Radio />,
    lv4: <Radio />,
    lv5: <Radio />,
  },
];

const DomainActionsBox = styled.div`
  display: flex;
  gap: 1.2rem;
  padding: 1.2rem;
  border-radius: var(--border-radius-xl);
  border: 1px solid var(--color-gray--5);
  background-color: #fff;
  box-shadow: var(--shadow-md);
  margin-bottom: 2rem;
`;

const SearchBox = styled(Input)`
  & .anticon.anticon-search {
    color: var(--color-gray--7);
  }
`;

const DomainList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const TableWrapper = styled.div`
  position: relative;

  &::before {
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    cursor: pointer;
  }
`;

export default Domain;
