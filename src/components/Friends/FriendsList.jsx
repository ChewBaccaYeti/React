import { Friends } from 'data/friends.json';

export const FriendsList = ({ friend }) => {
  return (
    <ul>
      {Friends.map((friend, idx) => (
        <li key={idx}>
          <Friends />
        </li>
      ))}
    </ul>
  );
};
