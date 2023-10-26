import { DefaultButton } from '../Button/Button';
import {
  RespondentAvatar,
  RespondentAvatarBox,
  RespondentName,
  RespondentNameBox,
  StyledRespondentCard,
} from './RespondentCardStyle';

const RespondentCard = () => {
  return (
    <StyledRespondentCard>
      <RespondentAvatarBox>
        <RespondentAvatar
          src="https://i.pravatar.cc/300"
          alt="The avatar of the respondent"
        />
      </RespondentAvatarBox>

      <RespondentNameBox>
        <RespondentName>Nguyen Khang</RespondentName>
        <p>Contractor</p>
      </RespondentNameBox>

      <DefaultButton shape="round" size="small">
        View Profile
      </DefaultButton>
    </StyledRespondentCard>
  );
};

export default RespondentCard;
