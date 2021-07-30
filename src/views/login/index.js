import React from "react";

import { ReactComponent as Logo } from "../../assets/imgs/nasa_logo.svg";
import styles from "./login.module.scss";

const Login = () => {
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
            <input type="text" name="email" />
          </div>
          <div className={styles.input_wrap}>
            <label for="password">Password:</label>
            <input type="password" name="password" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
