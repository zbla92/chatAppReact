import React from 'react';
import cn from 'classnames';

import styles from './Message.module.scss';

const Message = ({ message, isMine }) => {
  return (
    <div className={cn(styles.message, isMine && styles.isMine)}>
      <div className={cn(styles.message_wrapper)}>{message.message}</div>
    </div>
  );
};

export default Message;
