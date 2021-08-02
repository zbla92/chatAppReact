import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Login from './views/login';
import Main from './views/main';

import styles from './app.module.scss';

function App() {
  return (
    <Router>
      <Switch>
        <dv className={styles.app}>
          <Route exact path='/sign-in'>
            <Login />
          </Route>
          <Route exact path='/'>
            <Main />
          </Route>
        </dv>
      </Switch>
    </Router>
  );
}

export default App;
