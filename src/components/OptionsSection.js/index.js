import React from 'react';

import { ReactComponent as Logo } from '../../assets/imgs/nasa_logo.svg';
import { ReactComponent as SettingsIcon } from '../../assets/imgs/settings.svg';
import { ReactComponent as UserIcon } from '../../assets/imgs/user.svg';
import { ReactComponent as ChatIcon } from '../../assets/imgs/chat.svg';
import { ReactComponent as LogoutIcon } from '../../assets/imgs/logout.svg';

import styles from './OptionsSection.module.scss';

const OptionsSection = () => {
  return (
    <div className={styles.optionsSection}>
      <Logo className={styles.logo} />
      <div className={styles.optionButtons}>
        <SettingsIcon className={styles.optionsIcon} />
        <UserIcon className={styles.optionsIcon} />
        <ChatIcon className={styles.optionsIcon} />
      </div>
      <LogoutIcon className={styles.optionsIcon} />
    </div>
  );
};

export default OptionsSection;
