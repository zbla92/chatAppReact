/* eslint-disable eqeqeq */
import React from 'react';
import { useSelector } from 'react-redux';

import { ReactComponent as MoreIcon } from '../../assets/imgs/more.svg';

import styles from './Chat.module.scss';
import UserInfo from './components/UserInfo';
import MessagesList from './components/MessagesList';
import ChatInput from './components/ChatInput';

const Chat = ({ activeChat, socket }) => {
	const user = useSelector(state => state.auth.user?.data);

	return (
		<div className={styles.chat}>
			{activeChat && (
				<>
					<div className={styles.top}>
						<UserInfo name={activeChat.name} profilePicture={activeChat.profilePicture} />
						<MoreIcon className={styles.more_icon} />
					</div>
					<MessagesList activeChat={activeChat} user={user} />
					<div className={styles.bottom}>
						<ChatInput activeChat={activeChat} socket={socket} user={user} />
					</div>
				</>
			)}
		</div>
	);
};

export default Chat;
