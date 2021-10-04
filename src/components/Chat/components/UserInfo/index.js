import React from 'react';

import styles from './UserInfo.module.scss';
import placeholderUser from '../../../../assets/imgs/profile_picture.png';

const UserInfo = ({ name, profilePicture, onlineStatus = 'Online' }) => (
	<div className={styles.user_info}>
		<img className={styles.profile_image} src={profilePicture || placeholderUser} alt='profile' />
		<div className={styles.user_content}>
			<p className={styles.name}>{name}</p>
			<p className={styles.online_status}>{onlineStatus}</p>
		</div>
	</div>
);

export default UserInfo;
