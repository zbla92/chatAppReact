import React from 'react';
import { useSelector } from 'react-redux';
import UserInfo from '../Chat/components/UserInfo';
import ChatCard from '../ChatCard';

import styles from './OnlineFriends.module.scss';

const OnlineFriends = ({ setActiveChat, activeChat }) => {
  const { online, chats } = useSelector((state) => state?.friends);
  const user = useSelector((state) => state.auth?.user?.data);

  if (!user) return null;

  return (
    <div className={styles.onlineFriends}>
      <h4>Online friends:</h4>
      <div className={styles.onlineFriends_container}>
        {online.map((friend) => (
          <ChatCard
            name={friend.name}
            profilePicture={friend.profilePicture}
            activateChat={() => setActiveChat(friend)}
            isActive={activeChat?.userId == friend?.userId}
            lastMessage={
              chats[friend?.userId]?.[chats[friend?.userId]?.length - 1]
                ?.message
            }
          />
        ))}
      </div>
      <div className={styles.whoami}>
        <UserInfo
          name={`${user.firstName} ${user.lastName}`}
          profilePicture={user.profilePicture}
          onlineStatus={user.email}
        />
      </div>
    </div>
  );
};

export default OnlineFriends;
