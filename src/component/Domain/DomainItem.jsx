import { useState } from 'react';
import { Popconfirm, Radio } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import { StyledDomainCollapse, TableWrapper } from './DomainItemStyle';
import QuestionsTable from '../Table/QuestionsTable';
import { useDomains } from '../../context/domainContext';

const DomainItem = ({ expandIconPosition, domain, deleteDomain = true }) => {
  const { handleDeleteDomain, handleGetDomain } = useDomains();

  const [activePanels, setActivePanels] = useState(['']);

  const handleClickDeleteDomain = (id) => {
    return (
      <Popconfirm
        title="Delete the domain"
        description="Are you sure to delete this domain?"
        onConfirm={() => {
          handleDeleteDomain(id);
        }}
        okText="Yes"
        cancelText="No"
        onPopupClick={(e) => {
          e.stopPropagation();
        }}
      >
        <DeleteOutlined
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      </Popconfirm>
    );
  };

  const data = domain.domainSkills.map((domainSkill, i) => ({
    key: i + 1,
    domainSkill: domainSkill,
    proficiency0: <Radio />,
    proficiency1: <Radio />,
    proficiency2: <Radio />,
    proficiency3: <Radio />,
    proficiency4: <Radio />,
    proficiency5: <Radio />,
  }));

  const domainItems = [
    {
      key: domain.id,
      label: domain.domainName,
      children: (
        <TableWrapper
          onClick={() => {
            handleGetDomain(domain.id);
          }}
        >
          <QuestionsTable columns={columns} dataSource={data} />
        </TableWrapper>
      ),
      extra: deleteDomain ? handleClickDeleteDomain(domain.id) : <></>,
    },
  ];

  return (
    <StyledDomainCollapse
      activeKey={activePanels}
      items={domainItems}
      expandIconPosition={expandIconPosition}
      onChange={(keys) => setActivePanels(keys)}
    />
  );
};

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
    dataIndex: 'proficiency0',
    key: 'proficiency0',
    align: 'center',
  },
  {
    title: '1',
    dataIndex: 'proficiency1',
    key: 'proficiency1',
    align: 'center',
  },
  {
    title: '2',
    dataIndex: 'proficiency2',
    key: 'proficiency2',
    align: 'center',
  },
  {
    title: '3',
    dataIndex: 'proficiency3',
    key: 'proficiency3',
    align: 'center',
  },
  {
    title: '4',
    dataIndex: 'proficiency4',
    key: 'proficiency4',
    align: 'center',
  },
  {
    title: '5',
    dataIndex: 'proficiency5',
    key: 'proficiency5',
    align: 'center',
  },
];

DomainItem.propTypes = {
  items: PropTypes.array,
  expandIconPosition: PropTypes.string,
  domain: PropTypes.object,
  deleteDomain: PropTypes.bool,
};

export default DomainItem;
