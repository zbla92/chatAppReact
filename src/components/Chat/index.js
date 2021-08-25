import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { sentNewMessage } from '../../state/actions/friendActions';
import { ReactComponent as SendIcon } from '../../assets/imgs/send.svg';
import { ReactComponent as EmojiIcon } from '../../assets/imgs/happy.svg';
import { ReactComponent as GalleryIcon } from '../../assets/imgs/gallery.svg';
import { ReactComponent as AttachIcon } from '../../assets/imgs/attach.svg';

import Message from '../Message';

import styles from './Chat.module.scss';

const Chat = ({ activeChat, socket }) => {
  const [message, setMessage] = useState('');

  const user = useSelector((state) => state.user.userData?.data);
  const currentChat = useSelector(
    (state) => state.friends.chats[activeChat?.userId]
  );

  const dispatch = useDispatch();

  const sendMessage = () => {
    if (message.length < 1) return;
    socket.emit('direct_message', {
      toUserId: activeChat.userId,
      fromUserId: user.id,
      message,
    });

    dispatch(sentNewMessage({ from: 'me', to: activeChat.userId, message }));
    // Window onkeydown will send the enter after the setMessage is completed leaving one enter in the textarea after completion
    setTimeout(() => setMessage(''), 1);
  };

  window.onkeydown = (e) => {
    if (e.keyCode === 13) sendMessage();
  };

  return (
    <div className={styles.chat}>
      {activeChat && (
        <>
          <div className={styles.top}>
            <img
              className={styles.profile_image}
              src={activeChat?.profilePicture}
              alt='profile'
            />
            <div></div>
          </div>
          <div className={styles.content}>
            <div className={styles.scroll}>
              {currentChat?.map((msg) => (
                <Message message={msg} isMine={msg.from === 'me'} />
              ))}
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.textarea_wrapper}>
              <div className={styles.left_icons}>
                <EmojiIcon />
                <GalleryIcon />
                <AttachIcon />
              </div>
              <textarea
                value={message}
                placeholder='Write a new message!'
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className={styles.send_container}>
              <button className={styles.send_button} onClick={sendMessage}>
                <SendIcon />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Chat;
