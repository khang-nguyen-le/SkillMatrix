import { PrimaryButton } from '../Button/Button';
import { Description, StyledEmpty } from './EmptyStyle';
import PropTypes from 'prop-types';

const CEmpty = ({ onDescription, onActionText, onAction }) => {
  return (
    <StyledEmpty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      imageStyle={{
        height: 100,
      }}
      description={<Description>{onDescription}</Description>}
    >
      <PrimaryButton onClick={onAction}>{onActionText}</PrimaryButton>
    </StyledEmpty>
  );
};

CEmpty.propTypes = {
  onDescription: PropTypes.string,
  onActionText: PropTypes.string,
  onAction: PropTypes.func,
};

export default CEmpty;
