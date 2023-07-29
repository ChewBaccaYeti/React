import {
  ProfileBlock,
  Avatar,
  Username,
  InfoContainer,
  Stats,
} from './Profile.styled';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
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
            <p>Followers: {stats.followers}</p>
          </div>
          <div
            style={{
              width: 96.7,
            }}
          >
            <p>Views: {stats.views}</p>
          </div>
          <div
            style={{
              width: 96.7,
            }}
          >
            <p>Likes: {stats.likes}</p>
          </div>
        </Stats>
      </InfoContainer>
    </ProfileBlock>
  );
};
