import React from 'react';

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
      Main App
      <div>
        <button onClick={nekaFunkcija}>Klikni me</button>
      </div>
    </div>
  );
};

export default Main;
