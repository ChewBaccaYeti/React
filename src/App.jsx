import React from 'react';
import data from 'data/data';
import friends from 'data/friends';
import transactions from 'data/transactions';
import user from 'data/user';
import { Profile } from 'components/Profile/Profile';
import { FriendsList } from 'components/Friends/FriendList/FriendsList';
// import { Statistics } from 'components/';

export const App = () => {
  return (
    <div>
      <Profile user={user}></Profile>

      <FriendsList friends={friends} />
      {/* <Statistics /> */}
    </div>
  );
};

export default App;
