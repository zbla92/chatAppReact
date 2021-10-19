import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';

import { logoutUser, registerUser } from '../../state/actions/authActions';

import { ReactComponent as Logo } from '../../assets/imgs/nasa_logo.svg';
import styles from './register.module.scss';
import { VALIDATOR } from '../../utils/validation';

const initialCredentials = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	confirmPassword: ''
};

const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	const dispatch = useDispatch();
	const history = useHistory();

	const onSubmit = data => {
		if (data?.firstName) dispatch(registerUser(data, history));
	};

	useEffect(() => {
		dispatch(logoutUser());
	}, []);

	const errorDisplay = name => errors[name] && <p className={styles.error}>{errors[name].message}</p>;

	return (
		<div className={styles.register}>
			<div className={styles.wrapper}>
				<div className={styles.title}>
					<h2>Register</h2>
				</div>
				<div className={styles.body}>
					<Logo className={styles.logo} />
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className={styles.input_wrap}>
							<label htmlFor='firstName'>First name:</label>
							<input
								type='text'
								name='firstName'
								{...register('firstName', {
									required: VALIDATOR.REQUIRED,
									minLength: VALIDATOR.MIN_NUMBER_OF_CHAR,
									maxLength: VALIDATOR.MAX_NUMBER_OF_CHAR
								})}
							/>
							{errorDisplay('firstName')}
						</div>
						<div className={styles.input_wrap}>
							<label htmlFor='lastName'>Last name:</label>
							<input
								type='text'
								name='lastName'
								{...register('lastName', {
									required: VALIDATOR.REQUIRED,
									minLength: VALIDATOR.MIN_NUMBER_OF_CHAR,
									maxLength: VALIDATOR.MAX_NUMBER_OF_CHAR
								})}
							/>
							{errorDisplay('lastName')}
						</div>
						<div className={styles.input_wrap}>
							<label htmlFor='email'>Email:</label>
							<input
								type='text'
								name='email'
								{...register('email', {
									required: VALIDATOR.REQUIRED,
									pattern: VALIDATOR.VALID_EMAIL
								})}
							/>
							{errorDisplay('email')}
						</div>
						<div className={styles.input_wrap}>
							<label htmlFor='password'>Password:</label>
							<input
								type='password'
								name='password'
								{...register('password', {
									required: VALIDATOR.REQUIRED,
									minLength: VALIDATOR.PASSWORD_MIN_LENGTH,
									maxLength: VALIDATOR.MAX_NUMBER_OF_CHAR
								})}
							/>
							{errorDisplay('password')}
						</div>
						<div className={styles.input_wrap}>
							<label htmlFor='confirmPassword'>Confirm password:</label>
							<input
								type='password'
								name='confirmPassword'
								{...register('confirmPassword', {
									required: VALIDATOR.REQUIRED,
									minLength: VALIDATOR.PASSWORD_MIN_LENGTH,
									maxLength: VALIDATOR.MAX_NUMBER_OF_CHAR
								})}
							/>
							{errorDisplay('confirmPassword')}
						</div>
						<div className={styles.bottom}>
							<button className={styles.signin_button} onClick={onSubmit} type='button'>
								Sign in
							</button>
							<div className={styles.register_link}>
								<Link to='/sign-in'>Already a member? Sign In.</Link>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
