import React from 'react';

import profilePicPlaceholder from '../../assets/imgs/profile_picture.png';

import styles from './ChatCard.module.scss';

const ChatCard = ({ name, profilePicture }) => {
  return (
    <div className={styles.chat_card}>
      <img src={profilePicture || profilePicPlaceholder} alt='profile_image' />
      <div className={styles.content}>
        <h5>{name}</h5>
        <p>Start chatting now!</p>
      </div>
      <div className={styles.onlineStatus}></div>
    </div>
  );
};

export default ChatCard;
