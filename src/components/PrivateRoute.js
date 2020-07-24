import React from 'react';
import { Route } from 'react-router-dom'
import Login from './SignIn'
import {useGlobalState} from '../config/store';


function PrivateRoute(props) {
      const {store} = useGlobalState();
      const {getLoggedInUser} = store;
      const {component, ...rest} = props;
      // Show the component only when the user is logged in
      // Otherwise, redirect the user to /signin page
      return (
      <Route {...rest} component={getLoggedInUser ? component: Login} />
  );
};

export default PrivateRoute