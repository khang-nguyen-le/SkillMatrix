import PropTypes from 'prop-types';
import { List } from 'antd';
import { Link } from 'react-router-dom';

import MoreIcon from '../../icons/MoreIcon';
import DocsIcon from '../../icons/DocsIcon';

const SurveyFormItem = ({
  owner = 'Owner Name',
  formName = '',
  date = '',
  id,
}) => {
  const formattedDate = new Date(date).toDateString().slice(4);
  return (
    <List.Item
      actions={[
        <a key="list-loadmore-more">
          <MoreIcon size={16} color="#8c8c8c" />
        </a>,
      ]}
    >
      <List.Item.Meta
        avatar={<DocsIcon size={48} color="#073da8" />}
        title={<Link to={`/forms/created/${id}`}>{formName}</Link>}
        description={`${formattedDate} | ${owner}`}
      />
    </List.Item>
  );
};

SurveyFormItem.propTypes = {
  owner: PropTypes.node,
  formName: PropTypes.node,
  date: PropTypes.node,
  id: PropTypes.number,
};

export default SurveyFormItem;
