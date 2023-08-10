import React from 'react';
import data from 'data/data';
import friends from 'data/friends';
import transactions from 'data/transactions';
import user from 'data/user';
import styles from 'App/App.module.css';
import { Profile } from '../components/Profile/Profile';
import { FriendsList } from '../components/Friends/FriendList/FriendsList';
import { Statistics } from '../components/Statistics/Statistics';
import { Transactions } from '../components/Transactions/Transactions';

export const App = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.card}>
        <Profile user={user}></Profile>
        <FriendsList friends={friends} />
        <Statistics data={data} />
        <Transactions items={transactions} />
      </div>
    </div>
  );
};

export default App;
