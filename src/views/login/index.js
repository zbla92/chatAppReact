import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

import { getUser, loginUser } from '../../state/actions/authActions';

import { ReactComponent as Logo } from '../../assets/imgs/nasa_logo.svg';
import styles from './login.module.scss';

const Login = () => {
	const { error } = useSelector(state => state.auth.tokens);
	const isLoggedIn = useSelector(state => state.auth.user?.data?.id);

	const accessToken = Cookies.get('access_token');

	const { register, handleSubmit } = useForm();
	const dispatch = useDispatch();
	const history = useHistory();

	const onSubmit = data => {
		console.log('desava l se ovo');
		dispatch(loginUser(data, history));
	};

	useEffect(() => {
		if (isLoggedIn) history.push('/');
	}, [isLoggedIn]);

	useEffect(() => {
		if (accessToken) dispatch(getUser());
	}, []);

	return (
		<div className={styles.login}>
			<div className={styles.wrapper}>
				<div className={styles.title}>
					<h2>Sign In</h2>
				</div>
				<div className={styles.body}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Logo className={styles.logo} />
						{error?.data && <p className={styles.errors}>{error?.data?.error}</p>}
						<div className={styles.input_wrap}>
							<label htmlFor='email'>Email:</label>
							<input type='text' name='email' {...register('email')} />
						</div>
						<div className={styles.input_wrap}>
							<label htmlFor='password'>Password:</label>
							<input type='password' name='password' {...register('password')} />
						</div>
						<div className={styles.bottom}>
							<button className={styles.signin_button} type='submit'>
								Sign in
							</button>
							<div className={styles.register_link}>
								<Link to='/register'>Create new account.</Link>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
