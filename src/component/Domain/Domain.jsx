import { PlusOutlined, SearchOutlined } from '@ant-design/icons';

import { PrimaryButton } from '../Button/Button';
import { useAppState } from '../../context/appContext';
import CSpinner from '../Spinner/Spinner';
import { DomainActionsBox, DomainList, SearchBox } from './DomainStyle';
import DomainItem from './DomainItem';

function Domain() {
  const { handleAddDomainModalToggle, isLoading, domains } = useAppState();

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
          onClick={() => {
            handleAddDomainModalToggle('open');
          }}
        >
          Add
        </PrimaryButton>
      </DomainActionsBox>
      {isLoading ? (
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
