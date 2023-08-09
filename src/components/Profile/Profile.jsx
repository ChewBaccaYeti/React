import PropTypes from 'prop-types';
import {
  ProfileBlock,
  Avatar,
  Username,
  InfoContainer,
  Stats,
} from './Profile.styled';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <ProfileBlock>
      <Avatar src={avatar} alt={username}></Avatar>
      <Username>{username}</Username>

      <InfoContainer>
        <span>@{tag}</span>
        <p>{location}</p>
        <Stats>
          <div
            style={{
              width: 96.7,
            }}
          >
            <p>Followers: {followers}</p>
          </div>
          <div
            style={{
              width: 96.7,
            }}
          >
            <p>Views: {views}</p>
          </div>
          <div
            style={{
              width: 96.7,
            }}
          >
            <p>Likes: {likes}</p>
          </div>
        </Stats>
      </InfoContainer>
    </ProfileBlock>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
