import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import profilePicture from '../../assets/imgs/profile_picture.png';

import { upload } from '../../utils/service';

import { ReactComponent as UploadIcon } from '../../assets/imgs/upload.svg';

import styles from './UserProfile.module.scss';

const UserProfile = () => {
	const [image, setImage] = useState(null);

	const user = useSelector(state => state.auth.user?.data);

	const submitForm = () => {
		const url = '/user/avatar';
		const formData = new FormData();
		formData.append('file', image);

		upload(url, formData);
	};

	useEffect(() => {
		if (image) {
			submitForm();
		}
	}, [image]);

	return (
		<div className={styles.userProfile}>
			<div className={styles.top}>
				<img className={styles.image} src={user.profilePicture || profilePicture} alt='profile' />
				<label className={styles.image_upload_button} htmlFor='avatar'>
					<UploadIcon className={styles.upload_svg} />
					<input id='avatar' type='file' name='uploaded_file' onChange={e => setImage(e.target.files[0])} />
				</label>
			</div>
			<div className={styles.form_wrap}>
				<form>
					<div className={styles.form_section}>
						<div className={styles.form_unit}>
							<label htmlFor='firstName'>First Name:</label>
							<input type='text' name='firstName' />
						</div>
						<div className={styles.form_unit}>
							<label htmlFor='firstName'>Last Name:</label>
							<input type='text' name='firstName' />
						</div>
					</div>
					<div className={styles.form_section}>
						<div className={styles.form_unit}>
							<label htmlFor='email'>Email:</label>
							<input type='text' name='email' />
						</div>
						<div className={styles.form_unit}>
							<label htmlFor='password'>Password:</label>
							<input type='password' name='password' />
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default UserProfile;
