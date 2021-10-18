import React, { useEffect, useRef } from 'react';
import cn from 'classnames';

import useChat from '../../useChat';

import Message from '../../../Message';

import styles from '../../Chat.module.scss';

const MessagesList = ({ activeChat, user }) => {
	const { messages, loader, loaded } = useChat({ activeChat, user });

	const scrollRef = useRef(null);

	const prevScroll = scrollRef?.current?.scrollTop;

	useEffect(() => {
		if (scrollRef?.current?.scrollTop < 0) scrollRef.current.scrollTo(0, prevScroll);
	}, [messages.length]);

	return (
		<div className={styles.content} ref={scrollRef}>
			<div className={styles.scroll}>
				<div ref={loader} className={styles.loaderContainer}>
					{loaded && <p className={styles.completeChatHistoryLoaded}>This is complete chat history</p>}
				</div>

				{messages?.map(msg => (
					// eslint-disable-next-line eqeqeq
					<Message message={msg} isMine={msg.senderId == user.id} key={msg.time} />
				))}
			</div>
		</div>
	);
};

export default MessagesList;
