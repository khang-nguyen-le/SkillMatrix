import PropTypes from 'prop-types';
import { StyledTable } from './QuestionsTableStyle';

const QuestionsTable = ({ columns, dataSource }) => {
  return (
    <StyledTable
      columns={columns}
      dataSource={dataSource}
      pagination={{ hideOnSinglePage: true }}
      tableLayout="fixed"
    />
  );
};

QuestionsTable.propTypes = {
  columns: PropTypes.array,
  dataSource: PropTypes.array,
};

export default QuestionsTable;
