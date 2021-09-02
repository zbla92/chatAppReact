import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

import { getUser, loginUser } from '../../state/actions/authActions';

import { ReactComponent as Logo } from '../../assets/imgs/nasa_logo.svg';
import styles from './login.module.scss';

const initialCredentials = { email: '', password: '' };

const Login = () => {
  const [credentials, setCredentials] = useState(initialCredentials);
  const { error } = useSelector((state) => state.auth.tokens);
  const isLoggedIn = useSelector((state) => state.auth.user?.data?.id);

  const accessToken = Cookies.get('access_token');

  const dispatch = useDispatch();
  const history = useHistory();

  const onSignIn = () => {
    dispatch(loginUser(credentials, history));
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
          <Logo className={styles.logo} />
          {error?.error && <p className={styles.errors}>{error.error}</p>}
          <div className={styles.input_wrap}>
            <label for='email'>Email:</label>
            <input
              type='text'
              name='email'
              onChange={(e) => {
                setCredentials({ ...credentials, email: e.target.value });
              }}
            />
          </div>
          <div className={styles.input_wrap}>
            <label for='password'>Password:</label>
            <input
              type='password'
              name='password'
              onChange={(e) => {
                setCredentials({ ...credentials, password: e.target.value });
              }}
            />
          </div>
          <div className={styles.bottom}>
            <button className={styles.signin_button} onClick={onSignIn}>
              Sign in
            </button>
            <div className={styles.register_link}>
              <Link to='/register'>Create new account.</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
