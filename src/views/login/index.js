import React, { useState } from "react";
import { signInService } from "../../services/userService";

import { ReactComponent as Logo } from "../../assets/imgs/nasa_logo.svg";
import styles from "./login.module.scss";

const initialCredentials = { email: "", password: "" };

const Login = () => {
  const [credentials, setCredentials] = useState(initialCredentials);

  const onSignIn = () => {
    signInService(credentials);
  };

  return (
    <div className={styles.login}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h2>Sign In</h2>
        </div>
        <div className={styles.body}>
          <Logo className={styles.logo} />
          <div className={styles.input_wrap}>
            <label for="email">Email:</label>
            <input
              type="text"
              name="email"
              onChange={(e) => {
                setCredentials({ ...credentials, email: e.target.value });
              }}
            />
          </div>
          <div className={styles.input_wrap}>
            <label for="password">Password:</label>
            <input
              type="password"
              name="password"
              onChange={(e) => {
                setCredentials({ ...credentials, password: e.target.value });
              }}
            />
          </div>
          <button onClick={onSignIn}>Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
