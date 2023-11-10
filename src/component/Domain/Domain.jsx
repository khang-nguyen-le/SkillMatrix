import { Empty, Popconfirm } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

import CSpinner from '../Spinner/Spinner';
import { ActionBox, SkillDomainList, StyledDomainItem } from './DomainStyle';
import { useDomains } from '../../context/domainContext';
import CEmpty from '../Empty/Empty';
import { useAppState } from '../../context/appContext';
import SkillDomainItem from './SkillDomainItem';
import UpdateDomainModal from '../Modal/UpdateDomainModal';
import AddDomainModal from '../Modal/AddDomainModal';
import UpdateQuestionsModal from '../Modal/UpdateQuestionsModal';
import AddQuestionsModal from '../Modal/AddQuestionsModal';

function Domain() {
  const {
    isDomainLoading,
    handleAddDomainModalToggle,
    queryDomains,
    domains,
    handleDeleteDomain,
    handleGetDomain,
  } = useDomains();

  const { currentTab } = useAppState();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentTab === '1') return navigate('/forms/assigned');
  }, [currentTab, navigate]);

  if (domains.length === 0)
    return (
      <CEmpty
        onDescription="Make it faster to create survey forms by adding your first domain."
        onActionText="Add New"
        onAction={() => {
          handleAddDomainModalToggle('open');
        }}
      />
    );

  if (queryDomains?.length === 0) return <Empty description="Data Not Found" />;

  if (queryDomains)
    return (
      <>
        {isDomainLoading ? (
          <CSpinner />
        ) : (
          <SkillDomainList>
            {queryDomains.map((queryDomain) => (
              <li key={queryDomain.id}>
                <SkillDomainItem skillDomain={queryDomain} />
              </li>
            ))}
          </SkillDomainList>
        )}
      </>
    );

  const handleClickDeleteDomain = (domainId) => {
    return (
      <Popconfirm
        title="Delete the domain"
        description="Are you sure to delete this domain?"
        onConfirm={() => {
          handleDeleteDomain(domainId);
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

  const handleGetDomainById = (id) => {
    return (
      <EditOutlined
        onClick={(e) => {
          e.stopPropagation();
          handleGetDomain(id);
        }}
      />
    );
  };

  const renderDomainItems = domains.map((domain) => (
    <StyledDomainItem
      key={domain.id}
      ghost
      items={[
        {
          key: domain.id,
          label: domain.domainName,
          children: (
            <SkillDomainList>
              {domain.skillDomains.map((skillDomain) => (
                <li key={skillDomain.id}>
                  <SkillDomainItem skillDomain={skillDomain} />
                </li>
              ))}
            </SkillDomainList>
          ),
          extra: (
            <ActionBox>
              {handleGetDomainById(domain.id)}
              {handleClickDeleteDomain(domain.id)}
            </ActionBox>
          ),
        },
      ]}
    />
  ));

  return (
    <div>
      {isDomainLoading ? <CSpinner /> : renderDomainItems}
      <UpdateDomainModal />
      <AddDomainModal />
      <UpdateQuestionsModal />
      <AddQuestionsModal />
    </div>
  );
}

export default Domain;
