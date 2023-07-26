export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <div>
      <h2>{username}</h2>
      <div>
        <div>
          <span>@{tag}</span>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};
