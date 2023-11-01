import {
  DownOutlined,
  PlusOutlined,
  SearchOutlined,
  SortAscendingOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { PrimaryButton } from '../Button/Button';
import { useDomains } from '../../context/domainContext';
import {
  FilterByTime,
  SearchBox,
  SearchDomainBox,
  SectionActionMenu,
  SectionHeadBox,
  SectionTitle,
  SortButton,
} from './SurveyFormHeaderStyle';

const filterTimeOptions = [
  {
    label: 'Updating Feature...',
    key: '0',
  },
];

const SurveyFormHeader = ({ title }) => {
  const { handleAddDomainModalToggle, handleQueryDomains } = useDomains();

  return (
    <SectionHeadBox>
      <SectionTitle>{title}</SectionTitle>
      <SectionActionMenu>
        {title !== 'Domains' ? (
          <>
            <SearchBox
              placeholder={'Search forms...'}
              prefix={<SearchOutlined />}
              size="large"
            />
            <SortButton size="large" styles={{ border: 'none' }}>
              <SortAscendingOutlined />
            </SortButton>
            <FilterByTime
              menu={{ items: filterTimeOptions }}
              trigger={['click']}
              placement="bottomRight"
            >
              <Link
                onClick={(e) => e.preventDefault()}
                style={{
                  display: 'inline-flex',
                  gap: '1rem',
                }}
              >
                <span style={{ width: 'max-content' }}>Select time</span>
                <DownOutlined style={{ fontSize: '12px' }} />
              </Link>
            </FilterByTime>
          </>
        ) : (
          <>
            <SearchDomainBox
              placeholder={'Search domains...'}
              prefix={<SearchOutlined />}
              size="large"
              onChange={(e) => {
                handleQueryDomains(e.target.value);
              }}
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
          </>
        )}
      </SectionActionMenu>
    </SectionHeadBox>
  );
};

SurveyFormHeader.propTypes = {
  title: PropTypes.string,
};

export default SurveyFormHeader;
