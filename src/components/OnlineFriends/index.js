import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllFriends } from '../../state/actions/friendActions';
import UserInfo from '../Chat/components/UserInfo';
import ChatCard from '../ChatCard';

import styles from './OnlineFriends.module.scss';

const OnlineFriends = ({ setActiveChat, activeChat }) => {
	const online = useSelector(state => Object.values(state?.friends.online));
	const chats = useSelector(state => state.message.chats);

	const user = useSelector(state => state.auth?.user.data);

	console.log(online);

	const dispatch = useDispatch();

	useEffect(() => {
		if (user) {
			dispatch(getAllFriends(user.id));
		}
	}, [user]);

	if (!user) return null;

	return (
		<div className={styles.onlineFriends}>
			<h4>Online friends:</h4>
			<div className={styles.scroll}>
				<div className={styles.onlineFriends_container}>
					{online?.map(friend => (
						<ChatCard
							key={friend.id}
							name={`${friend.firstName} ${friend.lastName}`}
							profilePicture={friend.profilePicture}
							// friend.online check will be removed once we have support to send messages to online users
							activateChat={() => (friend.online ? setActiveChat(friend) : null)}
							// eslint-disable-next-line eqeqeq
							isActive={activeChat?.id == friend?.id}
							lastMessage={chats[friend.id]?.messages?.[chats[friend.id]?.messages?.length - 1]?.message}
							isOnline={friend.online}
						/>
					))}
				</div>
			</div>
			<div className={styles.whoami}>
				<UserInfo name={`${user.firstName} ${user.lastName}`} profilePicture={user.profilePicture} onlineStatus={user.email} />
			</div>
		</div>
	);
};

export default OnlineFriends;
