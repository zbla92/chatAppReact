import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { baseURL } from '../utils/helpers';
import io from 'socket.io-client';
import {
  getOnlineFriends,
  receivedNewMessage,
} from '../state/actions/friendActions';

const useSocketIO = () => {
  const [socket, setSocket] = useState(null);

  const user = useSelector((state) => state.user?.userData?.data);

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
            profilePicture: user.profilePicture,
          },
        })
      );
    }

    if (socket) {
      socket.on('connect', (socket) => {
        console.log('[SOCKET]', 'connected');
      });

      socket.on('chat', (args) => {
        console.log(args);
      });

      socket.on('online_friends', (args) => {
        console.log(args, 'STIZU');
        dispatch(getOnlineFriends(args.friends, user.email));
      });

      socket.on('disconnect', () => {
        console.log(socket.id, 'se diskonektovao');
      });

      socket.on('error', function error(err) {
        console.log('[SOCKET][ERROR]', err);
      });

      socket.on('direct_message', (data) => dispatch(receivedNewMessage(data)));
    }
  }, [user, socket]);

  return socket;
};

export default useSocketIO;
