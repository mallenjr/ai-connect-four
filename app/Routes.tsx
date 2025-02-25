import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import ConnectFour from './containers/ConnectFour';

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.COUNTER} component={CounterPage} />
        <Route path={routes.CONNECT_FOUR} component={ConnectFour} />
        <Route path={routes.HOME} component={HomePage} />
      </Switch>
    </App>
  );
}
