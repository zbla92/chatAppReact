import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Login from './views/login';
import Register from './views/register';
import Main from './views/main';

import styles from './app.module.scss';
import useSocketIO from './hooks/useSocketIO';

function App() {
  const socket = useSocketIO();

  return (
    <Router>
      <Switch>
        <div className={styles.app}>
          <Route exact path='/'>
            <Main socket={socket} />
          </Route>
          <Route exact path='/sign-in'>
            <Login />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
