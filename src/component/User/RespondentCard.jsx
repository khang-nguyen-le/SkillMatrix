import { DefaultButton } from '../Button/Button';
import {
  RespondentAvatar,
  RespondentAvatarBox,
  RespondentName,
  RespondentNameBox,
  StyledRespondentCard,
} from './RespondentCardStyle';

import PropTypes from 'prop-types';

const RespondentCard = ({ src, respondentName }) => {
  return (
    <StyledRespondentCard>
      <RespondentAvatarBox>
        <RespondentAvatar src={src} alt="The avatar of the respondent" />
      </RespondentAvatarBox>

      <RespondentNameBox>
        <RespondentName>{respondentName}</RespondentName>
        <p>Contractor</p>
      </RespondentNameBox>

      <DefaultButton shape="round" size="small">
        View Profile
      </DefaultButton>
    </StyledRespondentCard>
  );
};

RespondentCard.propTypes = {
  src: PropTypes.string,
  respondentName: PropTypes.string,
};

export default RespondentCard;
