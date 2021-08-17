import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// socket io test
import io from 'socket.io-client';

const useSocketIO = () => {
  const [socket, setSocket] = useState(null);

  const user = useSelector((state) => state.user?.userData?.data);

  useEffect(() => {
    if (user?.id && !socket) {
      setSocket(
        io.connect('http://localhost:4000', {
          path: '/socket.io',
          query: { userId: user.id, userEmail: user.email },
        })
      );

      if (socket) {
        socket.on('connect', (socket) => {
          console.log('[SOCKET]', 'connected');
        });

        socket.on('chat', (args) => {
          console.log(args);
        });

        socket.on('error', function error(err) {
          console.log('[SOCKET][ERROR]', err);
        });
      }
    }
  }, [user, socket]);

  return socket;
};

export default useSocketIO;
