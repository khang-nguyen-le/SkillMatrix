import { Empty, Popconfirm } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

import CSpinner from '../Spinner/Spinner';
import { ActionBox, SkillDomainList, StyledDomainItem } from './DomainStyle';
import { useDomains } from '../../context/domainContext';
import CEmpty from '../Empty/Empty';
import SkillDomainItem from './SkillDomainItem';
import UpdateDomainModal from '../Modal/UpdateDomainModal';
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

  if (queryDomains?.length === 0) return <Empty description="Data Not Found" />;

  if (queryDomains)
    return (
      <>
        {isDomainLoading ? (
          <CSpinner />
        ) : (
          <SkillDomainList>
            {queryDomains.map((queryDomain) => (
              <StyledDomainItem
                key={queryDomain.id}
                ghost
                items={[
                  {
                    key: queryDomain.id,
                    label: queryDomain.domainName,
                    children: (
                      <SkillDomainList>
                        {queryDomain.skillDomains.map((skillDomain) => (
                          <li key={skillDomain.id}>
                            <SkillDomainItem skillDomain={skillDomain} />
                          </li>
                        ))}
                      </SkillDomainList>
                    ),
                    extra: (
                      <ActionBox>
                        {handleGetDomainById(queryDomain.id)}
                        {handleClickDeleteDomain(queryDomain.id)}
                      </ActionBox>
                    ),
                  },
                ]}
              />
            ))}
          </SkillDomainList>
        )}
      </>
    );

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
      <UpdateQuestionsModal />
      <AddQuestionsModal />
    </div>
  );
}

export default Domain;
