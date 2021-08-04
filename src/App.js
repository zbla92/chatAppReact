import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Login from "./views/login";
import Register from "./views/register";
import Main from "./views/main";

import styles from "./app.module.scss";

function App() {
  return (
    <Router>
      <Switch>
        <dv className={styles.app}>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/sign-in">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </dv>
      </Switch>
    </Router>
  );
}

export default App;
