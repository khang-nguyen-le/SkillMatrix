import {
  DownOutlined,
  SearchOutlined,
  SortAscendingOutlined,
} from '@ant-design/icons';
import { Button, Dropdown, Input } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SectionHeadBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-gray--1);
  padding: 0.8rem 2rem;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
`;

const SectionTitle = styled.p`
  text-transform: uppercase;
  font-size: 2rem;
  letter-spacing: 0.3px;
  font-weight: 500;
  color: var(--color-gray--10);
`;

const SectionActionMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const SearchBox = styled(Input)`
  & .anticon.anticon-search {
    color: var(--color-gray--7);
  }
`;

const SortButton = styled(Button)`
  &.ant-btn {
    border: none;
    box-shadow: none;
    font-size: 2rem;
    padding: 0 15px;
  }
`;

const FilterByTime = styled(Dropdown)``;

const filterTimeOptions = [
  {
    label: 'Updating Feature...',
    key: '0',
  },
];

const SurveyFormHeader = () => {
  return (
    <SectionHeadBox>
      <SectionTitle>Survey Form</SectionTitle>
      <SectionActionMenu>
        <SearchBox
          placeholder="Search form..."
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
      </SectionActionMenu>
    </SectionHeadBox>
  );
};

export default SurveyFormHeader;
