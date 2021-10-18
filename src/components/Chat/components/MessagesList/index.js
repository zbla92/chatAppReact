import React, { useEffect, useRef } from 'react';
import usePrevious from '../../../../utils/hooks/usePrevious';
import Message from '../../../Message';

import styles from '../../Chat.module.scss';
import useChat from '../../useChat';

const MessagesList = ({ activeChat, user }) => {
	const { messages, loader } = useChat({ activeChat, user });

	const scrollRef = useRef(null);

	window.scrollRef = scrollRef?.current;

	const prevScroll = usePrevious(scrollRef?.current?.scrollTop);

	console.log(scrollRef?.current?.scrollTop, '~Skrol od topa');

	useEffect(() => {
		if (scrollRef?.current?.scrollTop < 0) {
			console.log(prevScroll, '~PREV SCROLL NA KOJI SETUJEM');
			scrollRef.current.scrollTo(0, prevScroll);
		}
	}, [messages.length]);

	return (
		<div className={styles.content} ref={scrollRef}>
			<div className={styles.scroll}>
				<div ref={loader}>Loading...</div>
				{messages?.map(msg => (
					// eslint-disable-next-line eqeqeq
					<Message message={msg} isMine={msg.senderId == user.id} key={msg.time} />
				))}
			</div>
		</div>
	);
};

export default MessagesList;
