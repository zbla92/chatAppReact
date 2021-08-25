import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './views/login';
import Register from './views/register';
import Main from './views/main';

import PrivateRoute from './routers/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path='/' exact component={Main} />
        <Route exact path='/sign-in'>
          <Login />
        </Route>
        <Route exact path='/register'>
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
