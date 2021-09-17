import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Navbar from './navbar/navbar';

import Home from './pages/home';
import Auth from './pages/auth/auth';
import Users from './pages/user';
import NoMatch404 from './pages/404';

/**
 * useAuth function will status of currrent user login status
 * @returns boolean (true or false )
 * according to the status <PrivateRoute /> will decided if a user can
 * go to a protected route or not
 */
function useAuth() {
  return false;
}

/**
 * Private routes are only assiblebele after user login
 * depending on auth = useAuth(); value (true or false)
 * one can access the proted=cted route or
 * will be redirected to '/login' route
 */
function PrivateRoute({ children, ...rest }) {
  const auth = useAuth();
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/auth',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

/**
 * MyRoutes will consists of all routes : public and protected routes
 *  public routes can be visited without user auth login
 * protected routes can only be visited after user auth login
 */
export default function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route path="/auth">
            <Auth />
          </Route>
          <PrivateRoute path="/users">
            <Users />
          </PrivateRoute>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="*">
            <NoMatch404 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
