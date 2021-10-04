import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Chat from '../../components/Chat';
import OnlineFriends from '../../components/OnlineFriends';
import useSocketIO from '../../hooks/useSocketIO';

// components
import OptionsSection from '../../components/OptionsSection.js';
import UserProfile from '../../components/UserProfile';

import styles from './Main.module.scss';

const Main = () => {
	const [activeChat, setActiveChat] = useState(null);
	const [activeTab, setActiveTab] = useState('chat');
	const isLoggedIn = useSelector(state => !!state.auth.user?.data?.id);

	const history = useHistory();

	const socket = useSocketIO();

	useEffect(() => {
		if (!isLoggedIn) {
			history.push('/sign-in');
			socket.emit('end');
		}
	}, [isLoggedIn]);

	return (
		<div className={styles.main}>
			<div className={styles.wrapper}>
				{activeTab === 'chat' && (
					<>
						<OnlineFriends setActiveChat={setActiveChat} activeChat={activeChat} />
						<Chat activeChat={activeChat} socket={socket} />
					</>
				)}
				{activeTab === 'user' && <UserProfile />}
				<OptionsSection activeTab={activeTab} setActiveTab={setActiveTab} />
			</div>
		</div>
	);
};

export default Main;
