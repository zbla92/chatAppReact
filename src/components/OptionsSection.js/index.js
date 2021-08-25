import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import cn from 'classnames';

import { logoutUser } from '../../state/actions/userActions';

import { ReactComponent as Logo } from '../../assets/imgs/nasa_logo.svg';
import { ReactComponent as SettingsIcon } from '../../assets/imgs/settings.svg';
import { ReactComponent as UserIcon } from '../../assets/imgs/user.svg';
import { ReactComponent as ChatIcon } from '../../assets/imgs/chat.svg';
import { ReactComponent as LogoutIcon } from '../../assets/imgs/logout.svg';

import styles from './OptionsSection.module.scss';

const OptionsSection = ({ socket, activeTab, setActiveTab }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className={styles.optionsSection}>
      <Logo className={styles.logo} />
      <div className={styles.optionButtons}>
        <SettingsIcon
          className={cn(
            styles.optionsIcon,
            activeTab === 'settings' && styles.active
          )}
          onClick={() => setActiveTab('settings')}
        />
        <UserIcon
          className={cn(
            styles.optionsIcon,
            activeTab === 'user' && styles.active
          )}
          onClick={() => setActiveTab('user')}
        />
        <ChatIcon
          className={cn(
            styles.optionsIcon,
            activeTab === 'chat' && styles.active
          )}
          onClick={() => setActiveTab('chat')}
        />
      </div>
      <LogoutIcon
        className={styles.optionsIcon}
        onClick={() => {
          socket.emit('end');
          dispatch(logoutUser());
          history.push('/sign-in');
        }}
      />
    </div>
  );
};

export default OptionsSection;
