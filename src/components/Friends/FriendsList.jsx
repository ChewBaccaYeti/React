import { Friends } from './Friends';

export const FriendsList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.id}>
          <Friends friend={friend} />
        </li>
      ))}
    </ul>
  );
};
