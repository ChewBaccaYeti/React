import PropTypes from 'prop-types';
import {
  Wrapper,
  Avatar,
  Name,
  OnlineStatus,
  OnlineGateKeeper,
  TextBlock,
} from './Friends.styled';
import { theme } from 'index';

export const Friends = ({ friend: { avatar, name, isOnline }, id }) => {
  return (
    <Wrapper theme={theme} isOnline={isOnline}>
      <Avatar src={avatar} alt={name}></Avatar>
      <TextBlock>
        <Name>{name}</Name>
        <OnlineStatus isOnline={isOnline}>
          <OnlineGateKeeper isOnline={isOnline}>
            {isOnline ? 'Online' : 'Offline'}
          </OnlineGateKeeper>
        </OnlineStatus>
      </TextBlock>
    </Wrapper>
  );
};

Friends.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    .isRequired,
};
