import React, { useEffect, useState } from 'react';
import Chat from '../../components/Chat/index.js';
import OnlineFriends from '../../components/OnlineFriends/index.js';
import useSocketIO from '../../hooks/useSocketIO';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

// components
import OptionsSection from '../../components/OptionsSection.js';
import UserProfile from '../../components/UserProfile';

import styles from './Main.module.scss';

const Main = () => {
  const [activeChat, setActiveChat] = useState(null);
  const [activeTab, setActiveTab] = useState('chat');
  const isLoggedIn = useSelector((state) => !!state.user.userData?.data?.id);

  const history = useHistory();

  const socket = useSocketIO();

  useEffect(() => {
    if (!isLoggedIn) {
      history.push('/sign-in');
      socket.emit('end');
    }
  }, [isLoggedIn]);

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
        <OptionsSection activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
};

export default Main;
