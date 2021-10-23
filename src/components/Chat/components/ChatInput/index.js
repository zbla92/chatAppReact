import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { ReactComponent as SendIcon } from '../../../../assets/imgs/send.svg';
import { ReactComponent as EmojiIcon } from '../../../../assets/imgs/happy.svg';
import { ReactComponent as GalleryIcon } from '../../../../assets/imgs/gallery.svg';
import { ReactComponent as AttachIcon } from '../../../../assets/imgs/attach.svg';
import { sentNewMessage } from '../../../../state/actions/messageActions';

import styles from './ChatInput.module.scss';

const ChatInput = ({ activeChat, socket, user }) => {
	const [message, setMessage] = useState('');

	const dispatch = useDispatch();

	const sendMessage = () => {
		if (message.length < 1) return;
		socket.emit('direct_message', {
			recipientId: activeChat.id,
			senderId: user.id,
			message
		});

		dispatch(sentNewMessage({ senderId: user.id, recipientId: activeChat.id, message, read: null, sent: null, time: new Date() }));
		// Window onkeydown will send the enter after the setMessage is completed leaving one enter in the textarea after completion
		setTimeout(() => setMessage(''), 1);
	};

	window.onkeydown = e => {
		if (e.keyCode === 13) sendMessage();
	};

	// eslint-disable-next-line consistent-return
	return (
		<>
			<div className={styles.textarea_wrapper}>
				<div className={styles.left_icons}>
					<EmojiIcon />
					<GalleryIcon />
					<AttachIcon />
				</div>
				<div className={styles.textareaWrap}>
					<textarea value={message} placeholder='Write a new message!' onChange={e => setMessage(e.target.value)} />
					<div className={styles.border} />
				</div>
			</div>
			<div className={styles.send_container}>
				<button className={styles.send_button} onClick={sendMessage} type='button'>
					<SendIcon />
				</button>
			</div>
		</>
	);
};

export default ChatInput;
