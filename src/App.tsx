import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Users } from './screens/Users';
import { Wallets } from './screens/Wallets';
import { Home } from './screens/Home';

function App() {
  return (
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/wallets">Wallets</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/wallets">
          <Wallets />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
