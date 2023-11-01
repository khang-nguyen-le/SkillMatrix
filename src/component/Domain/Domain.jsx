import CSpinner from '../Spinner/Spinner';
import { DomainList } from './DomainStyle';
import DomainItem from './DomainItem';
import { useDomains } from '../../context/domainContext';
import CEmpty from '../Empty/Empty';
import { Empty } from 'antd';

function Domain() {
  const { isDomainLoading, domains, handleAddDomainModalToggle, queryDomains } =
    useDomains();
  console.log(queryDomains);

  if (domains.length === 0)
    return (
      <CEmpty
        onDescription="Make it faster to create survey forms by adding your first domain."
        onActionText={'Add New'}
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
          <DomainList>
            {queryDomains.map((queryDomain) => (
              <li key={queryDomain.id}>
                <DomainItem domain={queryDomain} />
              </li>
            ))}
          </DomainList>
        )}
      </>
    );

  return (
    <>
      {isDomainLoading ? (
        <CSpinner />
      ) : (
        <DomainList>
          {domains.map((domain) => (
            <li key={domain.id}>
              <DomainItem domain={domain} />
            </li>
          ))}
        </DomainList>
      )}
    </>
  );
}

export default Domain;
