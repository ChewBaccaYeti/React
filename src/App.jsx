import { Friends } from 'components/Friends/Friends';
import { Profile } from 'components/Profile/Profile';
import user from 'data/user';
import friend from 'data/friends';
import React from 'react';

export const App = () => {
  return (
    <div>
      <Profile user={user}></Profile>
      <Friends friend={friend[0]}></Friends>
      <Friends friend={friend[1]}></Friends>
      <Friends friend={friend[2]}></Friends>
      <Friends friend={friend[3]}></Friends>
      <Friends friend={friend[4]}></Friends>
    </div>
  );
};

export default App;
