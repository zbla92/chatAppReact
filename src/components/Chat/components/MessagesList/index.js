import React, { useEffect, useRef } from 'react';

import useChat from '../../useChat';

import Message from '../../../Message';

import styles from './MessagesList.module.scss';

import LoadingSpinner from '../../../LoadingSpinner/LoadingSpinner';

const MessagesList = ({ activeChat, user }) => {
	const { messages, loader, loaded, noHistory } = useChat({ activeChat, user });

	const scrollRef = useRef(null);

	const prevScroll = scrollRef?.current?.scrollTop;

	useEffect(() => {
		if (scrollRef?.current?.scrollTop < 0) scrollRef.current.scrollTo(0, prevScroll);
	}, [messages.length]);

	return (
		<div className={styles.content} ref={scrollRef}>
			<div className={styles.scroll}>
				{loaded ? (
					<p className={styles.completeChatHistoryLoaded}>
						{noHistory ? `Start your conversation with ${activeChat.firstName}` : 'This is complete chat history'}
					</p>
				) : (
					<LoadingSpinner />
				)}
				<div ref={loader} className={styles.observedLoader} />
				{messages?.map(msg => (
					// eslint-disable-next-line eqeqeq
					<Message message={msg} isMine={msg.senderId == user.id} key={msg.id} />
				))}
			</div>
		</div>
	);
};

export default MessagesList;
