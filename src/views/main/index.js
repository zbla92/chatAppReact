import React, { useEffect, useState } from 'react';
import Chat from '../../components/Chat/index.js';
import OnlineFriends from '../../components/OnlineFriends/index.js';
import useSocketIO from '../../hooks/useSocketIO';

// components
import OptionsSection from '../../components/OptionsSection.js';
import UserProfile from '../../components/UserProfile';

import styles from './Main.module.scss';

const Main = () => {
  const [activeChat, setActiveChat] = useState(null);
  const [activeTab, setActiveTab] = useState('chat');

  const socket = useSocketIO();

  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        {activeTab === 'chat' && (
          <>
            <OnlineFriends
              setActiveChat={setActiveChat}
              activeChat={activeChat}
            />
            <Chat activeChat={activeChat} socket={socket} />
          </>
        )}
        {activeTab === 'user' && <UserProfile />}
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
