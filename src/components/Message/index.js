import React from 'react';
import cn from 'classnames';

import styles from './Message.module.scss';

const Message = ({ message, isMine }) => {
	const getTime = () => {
		const date = new Date(message.time);
		let hours = date.getHours();
		let minutes = date.getMinutes();

		if (hours < 10) hours = `0${hours}`;
		if (minutes < 10) minutes = `0${minutes}`;

		return `${hours}:${minutes}`;
	};

	return (
		<div className={cn(styles.message, isMine && styles.isMine)}>
			<div className={cn(styles.message_wrapper)}>
				{message.message} <span className={styles.time}>{getTime()}</span>
			</div>
		</div>
	);
};

export default Message;
