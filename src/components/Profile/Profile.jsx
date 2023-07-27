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
          <p>Followers: {stats.followers}</p>
          <p>Views: {stats.views}</p>
          <p>Likes: {stats.likes}</p>
        </Stats>
      </InfoContainer>
    </ProfileBlock>
  );
};
