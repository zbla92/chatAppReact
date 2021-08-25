import React from 'react';

import styles from './UserInfo.module.scss';

const UserInfo = ({ name, profilePicture, onlineStatus = 'Online' }) => {
  return (
    <div className={styles.user_info}>
      <img
        className={styles.profile_image}
        src={profilePicture}
        alt='profile'
      />
      <div className={styles.user_content}>
        <p className={styles.name}>{name}</p>
        <p className={styles.online_status}>{onlineStatus}</p>
      </div>
    </div>
  );
};

export default UserInfo;
