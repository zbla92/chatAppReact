import React from 'react';
import { useSelector } from 'react-redux';

import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector((state) => !!state.user.userData?.data?.id);

  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to='/sign-in' />
      }
    />
  );
};

export default PrivateRoute;
