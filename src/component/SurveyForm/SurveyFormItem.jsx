import PropTypes from 'prop-types';
import { List } from 'antd';
import styled from 'styled-components';
import MoreIcon from '../../icons/MoreIcon';
import DocsIcon from '../../icons/DocsIcon';
import { Link } from 'react-router-dom';

const StyledListItem = styled(List.Item)``;
const StyledListItemMeta = styled(List.Item.Meta)``;

const formatDate = (date) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

const SurveyFormItem = ({
  owner = 'Kento Momota',
  formName = '',
  date = '',
}) => {
  const formattedDate = formatDate(date);
  return (
    <StyledListItem
      actions={[
        <a key="list-loadmore-more">
          <MoreIcon size={16} color="#8c8c8c" />
        </a>,
      ]}
    >
      <StyledListItemMeta
        avatar={<DocsIcon size={48} color="#073da8" />}
        title={<Link to="#">{formName}</Link>}
        description={`${formattedDate} | ${owner}`}
      />
    </StyledListItem>
  );
};

SurveyFormItem.propTypes = {
  owner: PropTypes.node,
  formName: PropTypes.node,
  date: PropTypes.node,
};

export default SurveyFormItem;
