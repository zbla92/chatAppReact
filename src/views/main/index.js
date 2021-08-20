import React from 'react';
import Chat from '../../components/Chat/index.js';
import OnlineFriends from '../../components/OnlineFriends/index.js';

import OptionsSection from '../../components/OptionsSection.js';

import styles from './Main.module.scss';

const Main = ({ socket }) => {
  const nekaFunkcija = () => {
    console.log(socket, 'ajmoo');
    socket?.emit('chat', { message: 'Wassup homie' });
  };

  socket?.on('ping', (socket) => {
    console.log(socket);
  });

  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <OnlineFriends />
        <Chat />
        <OptionsSection />
      </div>
    </div>
  );
};

export default Main;
