import io from 'socket.io-client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { baseURL } from '../utils/helpers';
import { getOnlineFriends, receivedNewMessage, friendConnected, friendDisconnected } from '../state/actions/friendActions';

const useSocketIO = () => {
	const [socket, setSocket] = useState(null);

	const user = useSelector(state => state.auth?.user?.data);

	const dispatch = useDispatch();

	useEffect(() => {
		if (user?.id && !socket) {
			setSocket(
				io.connect(baseURL, {
					path: '/socket.io',
					query: {
						userId: user.id,
						userEmail: user.email,
						name: `${user.firstName} ${user.lastName}`,
						profilePicture: user.profilePicture
					}
				})
			);
		}

		if (socket) {
			socket.on('connect', () => {
				console.log('[SOCKET]', 'connected');
			});

			socket.on('chat', args => {
				console.log(args);
			});

			socket.on('online_friends', args => {
				console.log(args, 'STIZU');
				dispatch(getOnlineFriends(args.friends, user.email));
			});

			socket.on('disconnect', () => {
				console.log('[SOCKET] disconnected');
			});

			socket.on('error', err => {
				console.log('[SOCKET][ERROR]', err);
			});

			socket.on('direct_message', data => dispatch(receivedNewMessage(data)));
			socket.on('friend_connected', data => dispatch(friendConnected(data)));
			socket.on('friend_disconnected', data => dispatch(friendDisconnected(data)));
		}

		return () => {
			// Let the server know to destroy this connection as I'm  out
			// eslint-disable-next-line no-unused-expressions
			socket?.emit('end');
		};
	}, [user, socket]);

	return socket;
};

export default useSocketIO;
