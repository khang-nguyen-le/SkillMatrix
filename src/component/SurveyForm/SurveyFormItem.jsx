import PropTypes from 'prop-types';
import { List, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';

import DocsIcon from '../../icons/DocsIcon';
import { DeleteOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useCreatedFormState } from '../../context/createdFormContext';

const SurveyFormItem = ({
  owner = 'Owner Name',
  formName = '',
  date = '',
  id,
}) => {
  const { handleDeleteForm } = useCreatedFormState();
  const formattedDate = new Date(date).toDateString().slice(4);

  return (
    <List.Item
      actions={[
        <StyledPopConfirm
          key={1}
          title="Delete the survey form"
          description="Are you sure to delete this form?"
          onConfirm={() => {
            handleDeleteForm(id);
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
        </StyledPopConfirm>,
      ]}
    >
      <List.Item.Meta
        avatar={<DocsIcon size={48} color="#073da8" />}
        title={<Link to={`/forms/${id}`}>{formName}</Link>}
        description={`${formattedDate} | ${owner}`}
      />
    </List.Item>
  );
};

const StyledPopConfirm = styled(Popconfirm)`
  &.ant-popconfirm-buttons.ant-btn-primary {
    background-color: red;
  }
`;

SurveyFormItem.propTypes = {
  owner: PropTypes.node,
  formName: PropTypes.node,
  date: PropTypes.node,
  id: PropTypes.string,
};

export default SurveyFormItem;
