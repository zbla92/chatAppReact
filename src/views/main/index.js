import React, { useEffect, useState } from 'react';
import Chat from '../../components/Chat/index.js';
import OnlineFriends from '../../components/OnlineFriends/index.js';
import useSocketIO from '../../hooks/useSocketIO';

import OptionsSection from '../../components/OptionsSection.js';

import styles from './Main.module.scss';

const Main = () => {
  const [activeChat, setActiveChat] = useState(null);
  const [activeTab, setActiveTab] = useState('chat');

  const socket = useSocketIO();

  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <OnlineFriends setActiveChat={setActiveChat} activeChat={activeChat} />
        <Chat activeChat={activeChat} socket={socket} />
        <OptionsSection
          socket={socket}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
    </div>
  );
};

export default Main;
