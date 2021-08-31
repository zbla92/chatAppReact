import React from 'react';
import cn from 'classnames';

import placeholderUser from '../../assets/imgs/profile_picture.png';

import styles from './ChatCard.module.scss';

const ChatCard = ({
  name,
  profilePicture,
  activateChat,
  isActive,
  lastMessage = 'Start chatting now!',
}) => {
  return (
    <div
      className={cn(styles.chat_card, isActive && styles.active_card)}
      onClick={activateChat}
      role='presentation'
    >
      <img src={profilePicture || placeholderUser} alt='profile_image' />
      <div className={styles.content}>
        <h5>{name}</h5>
        <p className={styles.lastMessage}>{lastMessage}</p>
      </div>
      <div className={styles.onlineStatus}></div>
    </div>
  );
};

export default ChatCard;
