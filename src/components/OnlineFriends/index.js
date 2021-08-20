import React from 'react';
import { useSelector } from 'react-redux';
import ChatCard from '../ChatCard';

import styles from './OnlineFriends.module.scss';

const OnlineFriends = () => {
  const { online } = useSelector((state) => state.friends);

  return (
    <div className={styles.onlineFriends}>
      <h4>Online friends:</h4>
      <div className={styles.onlineFriends_container}>
        {online.map((friend) => (
          <ChatCard name={friend.name} profilePicture={friend.profilePicture} />
        ))}
      </div>
    </div>
  );
};

export default OnlineFriends;