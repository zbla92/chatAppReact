import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { logoutUser, registerUser } from '../../state/actions/authActions';

import { ReactComponent as Logo } from '../../assets/imgs/nasa_logo.svg';
import styles from './register.module.scss';

const initialCredentials = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Register = () => {
  const [credentials, setCredentials] = useState(initialCredentials);

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = () => {
    dispatch(registerUser(credentials, history));
  };

  useEffect(() => {
    dispatch(logoutUser());
  }, []);

  return (
    <div className={styles.register}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h2>Register</h2>
        </div>
        <div className={styles.body}>
          <Logo className={styles.logo} />
          <div className={styles.input_wrap}>
            <label for='firstName'>First name:</label>
            <input
              type='text'
              name='firstName'
              onChange={(e) => {
                setCredentials({ ...credentials, firstName: e.target.value });
              }}
            />
          </div>
          <div className={styles.input_wrap}>
            <label for='lastName'>Last name:</label>
            <input
              type='text'
              name='lastName'
              onChange={(e) => {
                setCredentials({ ...credentials, lastName: e.target.value });
              }}
            />
          </div>
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
          <div className={styles.input_wrap}>
            <label for='confirmPassword'>Confirm password:</label>
            <input
              type='password'
              name='confirmPassword'
              onChange={(e) => {
                setCredentials({
                  ...credentials,
                  confirmPassword: e.target.value,
                });
              }}
            />
          </div>
          <div className={styles.bottom}>
            <button className={styles.signin_button} onClick={onSubmit}>
              Sign in
            </button>
            <div className={styles.register_link}>
              <Link to='/sign-in'>Already a member? Sign In.</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
