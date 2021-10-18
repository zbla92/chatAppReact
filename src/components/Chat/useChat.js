import { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getMessages } from '../../state/actions/messageActions';

require('intersection-observer');

export default function useChat({ activeChat, user }) {
	const currentChat = useSelector(state => state.message.chats[activeChat?.id]);
	const messages = currentChat?.messages || [];

	const [loaded, setLoaded] = useState(false);

	const dispatch = useDispatch();

	const getMoreNotifications = () => {
		if (messages.length && currentChat?.currentPage < currentChat?.maxPage) {
			dispatch(
				getMessages({ page: currentChat.currentPage + 1, recipientId: activeChat.id, senderId: user.id, messagesOffset: currentChat.messagesOffset })
			);
		} else if (messages.length && currentChat?.currentPage >= currentChat?.maxPage) {
			setLoaded(true);
		}
	};

	useEffect(() => {
		if (user?.id && activeChat?.id && !currentChat?.maxPage) dispatch(getMessages({ page: 1, recipientId: activeChat.id, senderId: user.id }));
	}, [activeChat, user]);

	// Create ref to attach to the loader component
	const loader = useRef(null);

	const loadMore = useCallback(entries => {
		const target = entries[0];
		if (target.isIntersecting) {
			getMoreNotifications();
		}
	});

	useEffect(() => {
		const options = {
			root: null, // window by default
			rootMargin: '0px',
			threshold: 0
		};

		// Create observer
		const observer = new IntersectionObserver(loadMore, options);

		// observer the loader
		if (loader?.current) {
			observer.observe(loader.current);
		}

		// Stp observing any node with this observer instance
		return () => observer.disconnect();
	}, [loader, loadMore]);

	return { messages, loader, loaded };
}
