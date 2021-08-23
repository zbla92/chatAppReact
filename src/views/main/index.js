import React, { useState } from 'react';
import Chat from '../../components/Chat/index.js';
import OnlineFriends from '../../components/OnlineFriends/index.js';

import OptionsSection from '../../components/OptionsSection.js';

import styles from './Main.module.scss';

const Main = ({ socket }) => {
  const [activeChat, setActiveChat] = useState(null);

  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <OnlineFriends setActiveChat={setActiveChat} activeChat={activeChat} />
        <Chat activeChat={activeChat} socket={socket} />
        <OptionsSection />
      </div>
    </div>
  );
};

export default Main;
